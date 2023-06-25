import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#2622FF"
      d="M8 4.5V6h9.442L5 18.442 6.058 19.5 18.5 7.058V16.5H20v-12H8Z"
    />
  </svg>
)
export default SvgComponent
