import React from "react";
import classes from "./Checkbox.module.sass";
const Checkbox = (props) => {
  const { isActive, dataType, id } = props;

  
 
  return (
    <span className={classes.Checkbox}>
      <label htmlFor={`checkbox-${id}`}>click to {isActive ? "hide" : "show"}</label>
      <input
      className={classes.Input}
        onChange={(e) => {
          props.checkboxChange(dataType, id);
        }}
        type="checkbox"
        checked={isActive}
        id={`checkbox-${id}`}
      />
    </span>
  );
};

export default Checkbox;
