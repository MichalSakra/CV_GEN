import React from "react";
import classes from "./Button.module.sass";

const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className={[classes.Button, classes[props.btnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
