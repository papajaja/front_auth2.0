import { useTheme } from "../contexts/theme/Theme.context";

const DateSvg = () => {
  const { theme } = useTheme();

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
        stroke={theme["--svg"]}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="6" y="12" width="3" height="3" rx="0.5" fill={theme["--svg"]} />
      <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill={theme["--svg"]} />
      <rect x="15" y="12" width="3" height="3" rx="0.5" fill={theme["--svg"]} />
    </svg>
  );
};

export default DateSvg;
