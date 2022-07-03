function SettingsIc(props) {
  if (props.onClick) {
    return (
      <button onClick={props.onClick}>
        <svg viewBox="0 0 16 17">
          <path
            fill={props.color}
            d="M15.294,10.200 L14.436,9.704 C13.506,9.137 13.506,7.792 14.436,7.225 L15.294,6.729 C16.009,6.304 16.223,5.454 15.794,4.817 L15.079,3.613 C14.650,2.904 13.792,2.692 13.149,3.117 L12.291,3.613 C11.361,4.179 10.145,3.471 10.145,2.408 L10.145,1.417 C10.145,0.637 9.502,0.000 8.715,0.000 L7.285,0.000 C6.499,0.000 5.855,0.637 5.855,1.417 L5.855,2.337 C5.855,3.400 4.639,4.108 3.709,3.541 L2.851,3.117 C2.136,2.692 1.278,2.975 0.921,3.613 L0.206,4.817 C-0.152,5.525 0.063,6.375 0.706,6.800 L1.564,7.296 C2.494,7.792 2.494,9.208 1.564,9.704 L0.706,10.200 C-0.009,10.625 -0.223,11.475 0.206,12.112 L0.921,13.316 C1.350,14.025 2.208,14.238 2.851,13.812 L3.709,13.388 C4.639,12.821 5.855,13.529 5.855,14.592 L5.855,15.583 C5.855,16.362 6.499,17.000 7.285,17.000 L8.715,17.000 C9.502,17.000 10.145,16.362 10.145,15.583 L10.145,14.663 C10.145,13.600 11.361,12.892 12.291,13.458 L13.149,13.954 C13.864,14.379 14.722,14.096 15.079,13.458 L15.794,12.254 C16.152,11.475 15.937,10.625 15.294,10.200 ZM8.000,11.333 C6.427,11.333 5.140,10.058 5.140,8.500 C5.140,6.942 6.427,5.667 8.000,5.667 C9.573,5.667 10.860,6.942 10.860,8.500 C10.860,10.058 9.573,11.333 8.000,11.333 Z"
          />
        </svg>
      </button>
    );
  }
  return (
    <svg viewBox="0 0 16 17">
      <path
        fill={props.color}
        d="M15.294,10.200 L14.436,9.704 C13.506,9.137 13.506,7.792 14.436,7.225 L15.294,6.729 C16.009,6.304 16.223,5.454 15.794,4.817 L15.079,3.613 C14.650,2.904 13.792,2.692 13.149,3.117 L12.291,3.613 C11.361,4.179 10.145,3.471 10.145,2.408 L10.145,1.417 C10.145,0.637 9.502,0.000 8.715,0.000 L7.285,0.000 C6.499,0.000 5.855,0.637 5.855,1.417 L5.855,2.337 C5.855,3.400 4.639,4.108 3.709,3.541 L2.851,3.117 C2.136,2.692 1.278,2.975 0.921,3.613 L0.206,4.817 C-0.152,5.525 0.063,6.375 0.706,6.800 L1.564,7.296 C2.494,7.792 2.494,9.208 1.564,9.704 L0.706,10.200 C-0.009,10.625 -0.223,11.475 0.206,12.112 L0.921,13.316 C1.350,14.025 2.208,14.238 2.851,13.812 L3.709,13.388 C4.639,12.821 5.855,13.529 5.855,14.592 L5.855,15.583 C5.855,16.362 6.499,17.000 7.285,17.000 L8.715,17.000 C9.502,17.000 10.145,16.362 10.145,15.583 L10.145,14.663 C10.145,13.600 11.361,12.892 12.291,13.458 L13.149,13.954 C13.864,14.379 14.722,14.096 15.079,13.458 L15.794,12.254 C16.152,11.475 15.937,10.625 15.294,10.200 ZM8.000,11.333 C6.427,11.333 5.140,10.058 5.140,8.500 C5.140,6.942 6.427,5.667 8.000,5.667 C9.573,5.667 10.860,6.942 10.860,8.500 C10.860,10.058 9.573,11.333 8.000,11.333 Z"
      />
    </svg>
  );
}

export default SettingsIc;
