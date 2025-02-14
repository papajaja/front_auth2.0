import { useTheme } from "../contexts/theme/Theme.context";

const DownloadSvg = ({ ...props }) => {
  const { theme } = useTheme();

  return (
    <svg style={{ ...props }} viewBox="0 0 24 24" fill="none">
      <path
        opacity="1"
        d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
        stroke={theme["--svg"]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
        stroke={theme["--svg"]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadSvg;
