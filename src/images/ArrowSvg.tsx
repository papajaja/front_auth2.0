import { useTheme } from "../contexts/theme/Theme.context";

const ArrowSvg = ({ ...props }) => {
  const { theme } = useTheme();
  if (!theme) return <></>;

  return (
    <svg
      style={{ ...props }}
      width="15px"
      height="15px"
      className="down_ico"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
        stroke={theme["--svg"]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSvg;
