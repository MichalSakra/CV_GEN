import React from "react";
import classes from "./TextArea.module.sass";

const TextArea = (props) => {
  const { mainIndex, index, dataType } = props;
  return (
    <textarea
      onChange={(e) => props.change(e, dataType, mainIndex, index)}
      id={props.id}
      cols="20"
      rows="5"
      value={props.value}
      className={classes.TextArea}
    >
      {props.value}
    </textarea>
  );
};

export default TextArea;
