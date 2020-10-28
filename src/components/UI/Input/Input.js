import React from "react";
import classes from "./Input.module.sass";

const Input = (props) => {
  const { label, type, value, id, dataType, index } = props;

  return (
    <>
      <label className={classes.Label} htmlFor={id}>
        {label}
      </label>
      <input
        index={index}
        value={value}
        id={id}
        className={classes.Input}
        type={type}
        onChange={(e) => {
          props.change(e, dataType, id);
        }}
      />
    </>
  );
};

export default Input;
