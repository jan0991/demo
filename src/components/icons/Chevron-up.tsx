import * as React from "react";

const SvgComponent: React.FC<{ isMenuOpen: boolean }> = ({ isMenuOpen }) =>  (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className={isMenuOpen ? 'flip' : ''}
    style={{transform: 'translateY(2px)'}}
  >
    <mask id="a" fill="#fff">
      <path d="m8 5 5 5-.7.7L8 6.4l-4.3 4.3L3 10l5-5Z" />
    </mask>
    <path fill="#000" d="m8 5 5 5-.7.7L8 6.4l-4.3 4.3L3 10l5-5Z" />
    <path
      fill="#2622FF"
      d="m8 5 .707-.707L8 3.586l-.707.707L8 5Zm5 5 .707.707.707-.707-.707-.707L13 10Zm-.7.7-.707.707.707.707.707-.707-.707-.707ZM8 6.4l.707-.707L8 4.986l-.707.707L8 6.4Zm-4.3 4.3-.707.707.707.707.707-.707L3.7 10.7ZM3 10l-.707-.707-.707.707.707.707L3 10Zm4.293-4.293 5 5 1.414-1.414-5-5-1.414 1.414Zm5 3.586-.7.7 1.414 1.414.7-.7-1.414-1.414Zm.714.7-4.3-4.3-1.414 1.414 4.3 4.3 1.414-1.414Zm-5.714-4.3-4.3 4.3 1.414 1.414 4.3-4.3-1.414-1.414Zm-2.886 4.3-.7-.7-1.414 1.414.7.7 1.414-1.414Zm-.7.714 5-5-1.414-1.414-5 5 1.414 1.414Z"
      mask="url(#a)"
    />
  </svg>
)
export default SvgComponent
