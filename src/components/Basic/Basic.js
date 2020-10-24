import React from "react";

const Basic = (props) => {
  let arrayOfInputs = [];

  for (let item in props.data) {
    arrayOfInputs.push(item);
  }

  const inputs = arrayOfInputs.map((item, i) => {
    return <input type="text" />;
  });

  return <div>{inputs}</div>;
};

export default Basic;
