function UserIc(props) {
  if (props.onClick) {
    return (
      <button onClick={props.onClick}>
        <svg viewBox="0 0 16 17">
          <path
            fill={props.color}
            d="M15.000,17.000 L1.000,17.000 C0.448,17.000 -0.000,16.552 -0.000,16.000 L-0.000,15.000 C-0.000,11.686 2.686,9.000 6.000,9.000 L10.000,9.000 C13.314,9.000 16.000,11.686 16.000,15.000 L16.000,16.000 C16.000,16.552 15.552,17.000 15.000,17.000 ZM8.000,8.000 C5.791,8.000 4.000,6.209 4.000,4.000 C4.000,1.791 5.791,-0.000 8.000,-0.000 C10.209,-0.000 12.000,1.791 12.000,4.000 C12.000,6.209 10.209,8.000 8.000,8.000 Z"
          />
        </svg>
      </button>
    );
  }
  return (
    <svg viewBox="0 0 16 17">
      <path
        fill={props.color}
        d="M15.000,17.000 L1.000,17.000 C0.448,17.000 -0.000,16.552 -0.000,16.000 L-0.000,15.000 C-0.000,11.686 2.686,9.000 6.000,9.000 L10.000,9.000 C13.314,9.000 16.000,11.686 16.000,15.000 L16.000,16.000 C16.000,16.552 15.552,17.000 15.000,17.000 ZM8.000,8.000 C5.791,8.000 4.000,6.209 4.000,4.000 C4.000,1.791 5.791,-0.000 8.000,-0.000 C10.209,-0.000 12.000,1.791 12.000,4.000 C12.000,6.209 10.209,8.000 8.000,8.000 Z"
      />
    </svg>
  );
}

export default UserIc;
