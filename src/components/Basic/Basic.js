import React from "react";
import Input from "../UI/Input/Input";
import classes from "./Basic.module.sass";
import Checkbox from "../UI/Checkbox/Checkbox";
const Basic = (props) => {
  let arrayOfInputs = [];
  for (let item in props.data) {
    arrayOfInputs.push(item);
  }

  const inputs = arrayOfInputs.map((item, i) => {
    const { label, type, id, isActive, value } = props.data[item];
    const hasCheckbox = props.data[item].hasOwnProperty("isActive");

    return (
      <div key={item + i} className={classes.InputWrapper}>
        <Input
          label={label}
          type={type}
          id={id}
          dataType={props.dataType}
          change={props.inputChange}
          value={value}
        />

        {hasCheckbox ? (
          <Checkbox
            dataType={props.dataType}
            isActive={isActive}
            checkboxChange={props.checkboxChange}
            id={id}
          />
        ) : null}
      </div>
    );
  });

  return inputs;
};

export default Basic;
