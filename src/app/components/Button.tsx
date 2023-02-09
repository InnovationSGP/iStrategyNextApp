import React from "react";

interface Button {
  children: any;
  txtColor: string;
  type: any;
  color: string;
  isDisabled: boolean;
  clickFunction: any;
  size?: string;
  space?: string;
  hoverFocus?: string;
}

const CustomButton = (props: Button) => {
  const {
    children,
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
      className={`inline-flex ${size} ${space} items-start justify-start ${color} ${hoverFocus}  rounded`}
      type={type}
      disabled={isDisabled}
      onClick={clickFunction}
    >
      <p className={`${size} font-medium leading-none ${txtColor}`}>
        {" "}
        {children}
      </p>
    </button>
  );
};

export default CustomButton;
