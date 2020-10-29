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
  return <select onChange={props.select} className={classes.Select}>
   <option value="" disabled selected> Choose the level </option>
    {showOptions(props.options)}</select>;
};

export default Select;