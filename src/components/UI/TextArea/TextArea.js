import React from "react";
import classes from "./TextArea.module.sass";
import Button from "../Button/Button";
const TextArea = (props) => {

  return (
    <div className={classes.InputWrapper}>
      <Button click={props.click} >
        remove
      </Button>
      <textarea
        onChange={props.change}
        id={props.id}
        cols="20"
        rows="2"
        value={props.value}
        className={classes.TextArea}
      >
        {props.value}
      </textarea>
    </div>
  );
};

export default TextArea;
