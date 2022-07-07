// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./ReentrancyGuard.sol";
// import "hardhat/console.sol";

contract Escrow is ReentrancyGuard {

    address payable public seller;
    uint256 public price;
    uint256 public deadline;
    uint256 public timeToDeliver;
    uint256 public offerValidUntil;
    string public hashOfDescription;
    //uint256 public immutable gracePeriod = 86400;   // 24h
    uint256 public immutable gracePeriod = 0;

    uint256 public immutable commision = 10; // 1000 = 100%
    address public immutable payzuraWallet = 0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C;
    
    address payable public buyer;
    address[] public arbiters;
    mapping(address => uint256) arbitersVote;

    mapping(address => bool) buyerDelegates;
    mapping(address => bool) sellerDelegates;


    address payable public FactoryAddress;
  
    address[] public personalizedOffer;
    enum State { await_payment, paid, dispute, complete }
    State public state;
      


    // --------------------------------------
    //             MODIFIERS
    // --------------------------------------

    modifier instate(State expected_state){
        require(state == expected_state);
        _;
    }
  
    modifier onlyBuyer(address _buyer){
        require(msg.sender == FactoryAddress);
        require(_buyer == buyer, "address is not a buyer");
        _;
    }

    modifier onlyBuyerOrDelegate(address _buyer){
        require(msg.sender == FactoryAddress);
        require(_buyer == buyer || buyerDelegates[_buyer], "address is not a delegate or a buyer");
        _;
    }
  
    modifier onlySeller(address _seller){
        require(msg.sender == FactoryAddress);
        require(_seller == seller, "address is not a seller");
        _;
    }

    modifier onlySellerOrDelegate(address _seller){
        require(msg.sender == FactoryAddress);
        require(_seller == seller || sellerDelegates[_seller], "address is not a delegate or a seller");
        _;
    }

    modifier onlyArbiters(address _arbiter){
        require(msg.sender == FactoryAddress);
        require(IsArbiter(_arbiter), "address is not an arbiter");
        _;
    }

  
    // --------------------------------------
    //             CONSTRUCTOR
    // --------------------------------------

    constructor(){} // not sure if needed

    function Initialize (  
        address payable _FactoryAddress,
        address payable _seller,
        

        address[] calldata _arbiters, 

        uint256 _price,
        uint256 _timeAllowedInHours,
        string memory _hashOfDescription,

        uint256 _offerValidUntil,
        address[] calldata _personalizedOffer
        
        ) public {

        FactoryAddress = _FactoryAddress;
        state = State.await_payment;

        seller = _seller;
        price = _price;
        hashOfDescription = _hashOfDescription;
        timeToDeliver = _timeAllowedInHours;      
        offerValidUntil = _offerValidUntil;

        // loop through to copy all?
        // personalizedOffer
        for(uint256 i = 0; i < _personalizedOffer.length; i++) {
            personalizedOffer.push(_personalizedOffer[i]);
        }

        // arbiters
        for(uint256 i = 0; i < _arbiters.length; i++) {
            arbiters.push(_arbiters[i]);
        }
    }



    // ---------------------------------------------------------------------------
    //                             READ FUNCTIONS
    // ---------------------------------------------------------------------------

    function IsArbiter(address _arbiter) public view returns(bool){
        for (uint i = 0; i < arbiters.length; i++) {
            if (_arbiter == arbiters[i]) {
                return true;
            }
        }
        return false;
    }

    function isWalletBuyerDelegate(address _buyer) public view returns(bool){
        return buyerDelegates[_buyer];
    }

    function isWalletSellerDelegate(address _seller) public view returns(bool){
        return sellerDelegates[_seller];
    }

    function getArbiters() public view returns(address[] memory){
        return arbiters;
    }

    function getArbitersVote() public view returns(uint256[3] memory){

        // calculate the current vote 
        uint256[3] memory votes;

        for(uint256 i = 0; i < arbiters.length; i++) {
            uint256 vote = arbitersVote[arbiters[i]];
            votes[vote]++; 
        }

        return votes;
    }

    function isOfferValid() public view returns(bool){
        return (offerValidUntil >= block.timestamp) ? true : false;
    }

    function isWalletEligibleToAcceptOffer(address wallet) public view returns(bool){
        if (personalizedOffer.length == 0){
            return true;
        } else {
            for(uint256 i = 0; i < personalizedOffer.length; i++){
                if(personalizedOffer[i] == wallet){
                    return true;
                }
            }
            return false;
        }
    }

    function GetCommision() public view returns(uint256){
        return (uint256(price) / uint256(1000)) * uint256(commision);
    }

 

    // ---------------------------------------------------------------------------
    //                             WRITE FUNCTIONS
    // ---------------------------------------------------------------------------

    // new buyer accepts the agreement
    function acceptOffer(address payable _buyer) instate(State.await_payment) external payable {

        require(msg.value >= price + GetCommision(), "not enough ETH send");

        require(isOfferValid(), "offer is not valid anymore");

        // NEED TO ADD THE REQUIREMENT REGARDING:   personalizedOffer
        require(isWalletEligibleToAcceptOffer(_buyer), "wallet is not eligible to accept");

        buyer = _buyer; 

        // set the deadline
        deadline = block.timestamp + timeToDeliver;

        // update state
        state = State.paid;
    }

    function TranferFunds(address payable receiver) internal {

        // transfer commision to the Payzura wallet
        payable(payzuraWallet).transfer(GetCommision());

        // transfer the remaining amount to the receiver
        receiver.transfer(address(this).balance);
    }



    // --------------------------------------
    //             ONLY SELLER
    // --------------------------------------

    // seller can claim the funds if no dispute and the (deadline + gracePeriod) has passed
    function claimFunds(address _seller) instate(State.paid) onlySellerOrDelegate(_seller) external payable {
        require(block.timestamp > deadline + gracePeriod, "Not able to claim yet. Buyer still has time to open dispute");

        // release funds to the seller
        //seller.transfer(address(this).balance);
        TranferFunds(seller);

        // change state to complete
        state = State.complete;
        return;
    }

    // seller can return the payment and cancel the agreement
    function returnPayment(address _seller) instate(State.paid) onlySellerOrDelegate(_seller) external payable {
        //buyer.transfer(address(this).balance);  //  can change to price
        TranferFunds(buyer);
        state = State.complete;
        return;
    }

    function addSellerDelegates(address _seller, address[] calldata delegates) onlySeller(_seller) external {
        for (uint256 i = 0; i < delegates.length; i++){
            sellerDelegates[delegates[i]] = true;
        }
    }

    function removeSellerDelegates(address _seller, address[] calldata delegates) onlySeller(_seller) external {
        for (uint256 i = 0; i < delegates.length; i++){
            sellerDelegates[delegates[i]] = false;
        }
    }



    // --------------------------------------
    //             ONLY BUYER
    // --------------------------------------

    // buyer can start a dispute after the deadline has passed
    function startDispute(address _buyer) instate(State.paid) onlyBuyerOrDelegate(_buyer) external {  
        require(block.timestamp > deadline, "Deadline for delivery hasn't passed yet!");
        state = State.dispute;
        return;
    }

    // buyer can release the funds - work was done and confirmed
    function confirmDelivery(address _buyer) instate(State.paid) onlyBuyerOrDelegate(_buyer) external payable { 
        //seller.transfer(address(this).balance); //  can change to price
        TranferFunds(seller);
        state = State.complete;
        return;
    }

    function addBuyerDelegates(address _buyer, address[] calldata delegates) onlyBuyer(_buyer) external {
        for (uint256 i = 0; i < delegates.length; i++){
            buyerDelegates[delegates[i]] = true;
        }
    }

    function removeBuyerDelegates(address _buyer, address[] calldata delegates) onlyBuyer(_buyer) external {
        for (uint256 i = 0; i < delegates.length; i++){
            buyerDelegates[delegates[i]] = false;
        }
    }


 
    // --------------------------------------
    //             ONLY ARBITER
    // --------------------------------------

    function handleDispute(address _arbiter, bool returnFundsToBuyer) instate(State.dispute) onlyArbiters(_arbiter) external payable returns(bool){
        
        // add a vote
        if(returnFundsToBuyer){
            arbitersVote[_arbiter] = 1;
        } else {
            arbitersVote[_arbiter] = 2;
        }
        
        // check if the vote makes a majority -> if yes: send funds
        uint256[3] memory votes = getArbitersVote();

        if(votes[1] > votes[2] + votes[0]){
            // send funds to the buyes
            //buyer.transfer(address(this).balance);
            TranferFunds(buyer);
            state = State.complete;
            return true;
        } 
        
        if(votes[2] > votes[1] + votes[0]){
            // send funds to the seller
            //seller.transfer(address(this).balance);
            TranferFunds(seller);
            state = State.complete;
            return true;
        }

        return false;
    }
}