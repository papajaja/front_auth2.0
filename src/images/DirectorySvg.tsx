import React from "react";

interface DirectoryProps {
  size: number;
  className: string;
}

const DirectorySvg: React.FC<DirectoryProps> = ({ size, className }) => {
  return (
    <svg
      style={{ marginTop: "-4px" }}
      className={className}
      viewBox="0 0 80 80"
      width={size + "px"}
      height={size + "px"}
      fill="none"
    >
      <path
        fill="#F4DC49"
        d="M0 20a6.667 6.667 0 0 1 6.667-6.667h21.432a6.667 6.667 0 0 1 5.547 2.969l2.708 4.063a6.667 6.667 0 0 0 5.547 2.968h31.432A6.667 6.667 0 0 1 80 30v43.333A6.667 6.667 0 0 1 73.333 80H6.667A6.667 6.667 0 0 1 0 73.333V20Z"
      />
      <path
        fill="#F4DC49"
        fillRule="evenodd"
        d="M28.099 15H6.667a5 5 0 0 0-5 5v53.333a5 5 0 0 0 5 5h66.666a5 5 0 0 0 5-5V30a5 5 0 0 0-5-5H41.901a8.333 8.333 0 0 1-6.934-3.71l-2.708-4.064A5 5 0 0 0 28.099 15ZM6.667 13.333A6.667 6.667 0 0 0 0 20v53.333A6.667 6.667 0 0 0 6.667 80h66.666A6.667 6.667 0 0 0 80 73.333V30a6.667 6.667 0 0 0-6.667-6.667H41.901a6.667 6.667 0 0 1-5.547-2.968l-2.708-4.063a6.667 6.667 0 0 0-5.547-2.969H6.667Z"
        clipRule="evenodd"
      />
      <path
        fill="#FDEFB2"
        d="M28.099 15H6.667a5 5 0 0 0-5 5v53.333a5 5 0 0 0 5 5h66.666a5 5 0 0 0 5-5V30a5 5 0 0 0-5-5H41.901a8.333 8.333 0 0 1-6.934-3.71l-2.708-4.063A5 5 0 0 0 28.099 15Z"
      />
    </svg>
  );
};

export default DirectorySvg;
