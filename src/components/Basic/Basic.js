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
    const inactive = hasCheckbox && !isActive ? classes.inactive : null;
    return (
      <div key={item + i} className={[classes.Input, inactive].join(" ")}>
        <Input
          isDisabled={hasCheckbox ? !isActive : false}
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

  return (
    <section id={props.header} className={classes.Basic}>
      <h1>{props.header}</h1>
      {inputs}
    </section>
  );
};

export default Basic;
