import React from "react";
import classes from "./Select.module.sass"

const showOptions = (options) => {
  
  return options.map((option, i) => {
    return (
      <option key={option + i} value={option}>
        {option}
      </option>
    );
  });
};

const Select = (props) => {

  
  return <>
  <label htmlFor={`select${props.id}`}>level: </label>
  <select id={`select${props.id}`} onChange={props.select} className={classes.Select} defaultValue={""}>
    
    {showOptions(props.options)}</select></>
};

export default Select;
