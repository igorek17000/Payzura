function AgreementIc(props) {
  if (props.onClick) {
    return (
      <button onClick={props.onClick}>
        <svg viewBox="0 0 14 17">
          <path
            fill={props.color}
            d="M11.840,12.687 L3.574,12.687 L3.574,0.000 L11.840,0.000 C13.032,0.001 13.999,0.926 14.000,2.067 L14.000,10.620 C13.999,11.761 13.032,12.686 11.840,12.687 ZM10.277,3.564 L7.298,3.564 C6.929,3.565 6.630,3.851 6.629,4.204 C6.628,4.558 6.928,4.846 7.298,4.847 L10.277,4.847 C10.278,4.847 10.279,4.847 10.280,4.847 C10.650,4.846 10.949,4.558 10.948,4.204 C10.947,3.850 10.647,3.563 10.277,3.564 ZM10.277,5.702 L7.298,5.702 C6.929,5.703 6.630,5.989 6.629,6.342 C6.628,6.696 6.928,6.984 7.298,6.985 L10.277,6.985 C10.278,6.985 10.279,6.985 10.280,6.985 C10.650,6.984 10.949,6.696 10.948,6.342 C10.947,5.988 10.647,5.701 10.277,5.702 ZM0.670,12.687 C0.300,12.687 -0.000,12.400 -0.000,12.045 L-0.000,0.641 C-0.000,0.287 0.300,0.000 0.670,0.000 L2.234,0.000 L2.234,12.687 L0.670,12.687 C0.670,12.687 0.670,12.687 0.670,12.687 ZM11.766,16.323 C11.766,16.422 11.742,16.520 11.695,16.609 C11.530,16.926 11.127,17.055 10.796,16.896 L9.606,16.327 L8.417,16.896 C8.324,16.941 8.221,16.964 8.117,16.964 C7.747,16.964 7.447,16.677 7.447,16.323 L7.447,13.970 L11.766,13.970 L11.766,16.323 Z"
          />
        </svg>
      </button>
    );
  }

  return (
    <svg viewBox="0 0 14 17">
      <path
        fill={props.color}
        d="M11.840,12.687 L3.574,12.687 L3.574,0.000 L11.840,0.000 C13.032,0.001 13.999,0.926 14.000,2.067 L14.000,10.620 C13.999,11.761 13.032,12.686 11.840,12.687 ZM10.277,3.564 L7.298,3.564 C6.929,3.565 6.630,3.851 6.629,4.204 C6.628,4.558 6.928,4.846 7.298,4.847 L10.277,4.847 C10.278,4.847 10.279,4.847 10.280,4.847 C10.650,4.846 10.949,4.558 10.948,4.204 C10.947,3.850 10.647,3.563 10.277,3.564 ZM10.277,5.702 L7.298,5.702 C6.929,5.703 6.630,5.989 6.629,6.342 C6.628,6.696 6.928,6.984 7.298,6.985 L10.277,6.985 C10.278,6.985 10.279,6.985 10.280,6.985 C10.650,6.984 10.949,6.696 10.948,6.342 C10.947,5.988 10.647,5.701 10.277,5.702 ZM0.670,12.687 C0.300,12.687 -0.000,12.400 -0.000,12.045 L-0.000,0.641 C-0.000,0.287 0.300,0.000 0.670,0.000 L2.234,0.000 L2.234,12.687 L0.670,12.687 C0.670,12.687 0.670,12.687 0.670,12.687 ZM11.766,16.323 C11.766,16.422 11.742,16.520 11.695,16.609 C11.530,16.926 11.127,17.055 10.796,16.896 L9.606,16.327 L8.417,16.896 C8.324,16.941 8.221,16.964 8.117,16.964 C7.747,16.964 7.447,16.677 7.447,16.323 L7.447,13.970 L11.766,13.970 L11.766,16.323 Z"
      />
    </svg>
  );
}

export default AgreementIc;
