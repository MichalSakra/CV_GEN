import React from "react";
import classes from "./Button.module.sass";

const Button = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.click}
      className={[classes.Button, classes[props.btnType], classes[props.btnSize]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
