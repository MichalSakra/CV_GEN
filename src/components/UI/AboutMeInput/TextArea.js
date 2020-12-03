import React from "react";
import classes from "./TextArea.module.sass";

const TextArea = (props) => {
  return (
    <div className={classes.InputWrapper}>
      <textarea
        disabled={props.isDisabled}
        onChange={props.change}
        id={props.id}
        cols="10"
        rows="8"
        value={props.value}
        className={classes.TextArea}
      >
        {props.value}
      </textarea>
    </div>
  );
};

export default TextArea;
