import classNames from "classnames";
import React from "react";

export const Button = ({
  children,
  type,
  block = false,
  padding,
  size = "md",
  border,
  onClick = () => {},
}) => {
  return (
    <button
      className={classNames([
        "whitespace-nowrap bg-bgBtn rounded-btnRounded",
        { "border border-skyBlue": border },
        { "px-[6px] py-1": padding },
      ])}
    >
      {children}
    </button>
  );
};
