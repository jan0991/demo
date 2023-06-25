import * as React from "react";

type SvgComponentProps = React.SVGProps<SVGSVGElement>;

const SvgComponent: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#2622FF"
      fillRule="evenodd"
      d="m8.925.975 1.35 1.35c.3.3.3.75 0 1.05L4.65 9h-2.4V6.6L7.875.975c.3-.3.75-.3 1.05 0ZM9.75 2.85 8.4 1.5 7.275 2.625l1.35 1.35L9.75 2.85ZM3 6.9v1.35h1.35L8.1 4.5 6.75 3.15 3 6.9Zm-1.5 3.6v-.75H12v.75H1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
