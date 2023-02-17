import React from "react";

interface Button {
  text: any;
  txtColor?: string;
  type?: any;
  color?: string;
  isDisabled?: boolean;
  clickFunction: any;
  size?: string;
  space?: string;
  hoverFocus?: string;
}

const CustomButton = (props: Button) => {
  const {
    text,
    size,
    space,
    txtColor,
    type,
    color,
    isDisabled,
    clickFunction,
    hoverFocus,
  } = props;

  return (
    <button
      className={`inline-flex ${size} ${space} items-start hover:scale-105 hover:transition duration-300 justify-start ${color} ${hoverFocus}  rounded`}
      type={type}
      disabled={isDisabled}
      onClick={clickFunction}
    >
      <p className={`${size} font-medium leading-none ${txtColor}`}> {text}</p>
    </button>
  );
};

export default CustomButton;
