import React from "react";
import classes from "./DateInput.module.sass";

const DateInput = (props) => {
  console.log(props);
  return (
    <span className={classes.Date}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="month" value={props.value} onChange={props.change} />
    </span>
  );
};

export default DateInput;
