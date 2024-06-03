import { useTheme } from "../contexts/theme/Theme.context";

const FilesSvg = ({ ...props }) => {
  const { theme } = useTheme();
  if (!theme) return <></>;

  return (
    <svg style={{ ...props }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 7V13.8C19 14.9201 19 15.4802 18.782 15.908C18.5903 16.2843 18.2843 16.5903 17.908 16.782C17.4802 17 16.9201 17 15.8 17H12.2C11.0799 17 10.5198 17 10.092 16.782C9.71569 16.5903 9.40973 16.2843 9.21799 15.908C9 15.4802 9 14.9201 9 13.8V6.2C9 5.0799 9 4.51984 9.21799 4.09202C9.40973 3.71569 9.71569 3.40973 10.092 3.21799C10.5198 3 11.0799 3 12.2 3H15M19 7L15 3M19 7H16.6C16.0399 7 15.7599 7 15.546 6.89101C15.3578 6.79513 15.2049 6.64215 15.109 6.45399C15 6.24008 15 5.96005 15 5.4V3M5 7V14.6C5 16.8402 5 17.9603 5.43597 18.816C5.81947 19.5686 6.43139 20.1805 7.18404 20.564C8.03969 21 9.15979 21 11.4 21H15"
        stroke={theme["--svg"]}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilesSvg;
