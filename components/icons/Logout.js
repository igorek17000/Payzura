function LogoutIc(props) {
  if (props.onClick) {
    return (
      <button onClick={props.onClick}>
        <svg viewBox="0 0 16 16">
          <path
            fill={props.color}
            d="M13.634,2.353 C13.243,1.970 12.616,1.977 12.233,2.368 C11.856,2.753 11.856,3.370 12.233,3.755 C14.582,6.106 14.582,9.916 12.233,12.267 C9.883,14.617 6.075,14.616 3.726,12.266 C1.378,9.916 1.378,6.106 3.726,3.755 C4.109,3.364 4.103,2.736 3.712,2.353 C3.327,1.976 2.710,1.976 2.325,2.353 C-0.778,5.457 -0.778,10.565 2.325,13.669 C5.427,16.773 10.532,16.773 13.634,13.669 C16.757,10.586 16.791,5.554 13.710,2.429 C13.685,2.404 13.660,2.378 13.634,2.353 ZM7.979,9.013 C8.532,9.013 8.980,8.564 8.980,8.011 L8.980,1.001 C8.980,0.448 8.532,0.000 7.979,0.000 C7.427,0.000 6.979,0.448 6.979,1.001 L6.979,8.011 C6.979,8.564 7.427,9.013 7.979,9.013 Z"
          />
        </svg>
      </button>
    );
  }

  return (
    <svg viewBox="0 0 16 16">
      <path
        fill={props.color}
        d="M13.634,2.353 C13.243,1.970 12.616,1.977 12.233,2.368 C11.856,2.753 11.856,3.370 12.233,3.755 C14.582,6.106 14.582,9.916 12.233,12.267 C9.883,14.617 6.075,14.616 3.726,12.266 C1.378,9.916 1.378,6.106 3.726,3.755 C4.109,3.364 4.103,2.736 3.712,2.353 C3.327,1.976 2.710,1.976 2.325,2.353 C-0.778,5.457 -0.778,10.565 2.325,13.669 C5.427,16.773 10.532,16.773 13.634,13.669 C16.757,10.586 16.791,5.554 13.710,2.429 C13.685,2.404 13.660,2.378 13.634,2.353 ZM7.979,9.013 C8.532,9.013 8.980,8.564 8.980,8.011 L8.980,1.001 C8.980,0.448 8.532,0.000 7.979,0.000 C7.427,0.000 6.979,0.448 6.979,1.001 L6.979,8.011 C6.979,8.564 7.427,9.013 7.979,9.013 Z"
      />
    </svg>
  );
}

export default LogoutIc;
