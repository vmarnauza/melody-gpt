export default function Spinner({ width = 24, height = 24 }) {
  return (
    <svg
      className="animate-spin"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.69818 15.2727C4.24945 14.2742 4 13.1658 4 12C4 7.58182 7.58182 4 12 4C16.4182 4 20 7.58182 20 12C20 16.4182 16.4182 20 12 20C10.072 20 8.304 19.3178 6.92218 18.1825"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
