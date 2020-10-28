import React from "react";
import classes from "./CompoundInput.module.sass";

const Input = (props) => {
  const { label, type, value, id, dataType, index } = props;

  return (
    <>
      <label className={classes.Label} htmlFor={id}>
        <p> {label}</p>
      </label>
      <input
        index={index}
        value={value}
        id={id + index}
        className={classes.Input}
        type={type}
        onChange={(e) => {
          props.change(e, dataType, id, index);
        }}
      />
    </>
  );
};

export default Input;
