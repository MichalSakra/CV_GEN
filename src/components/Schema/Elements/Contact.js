import React from "react";

const Contact = (props) => {
  console.log(props);

  const showInputs = Object.keys(props.data).map((input, i) => {
    if (props.data[input].isActive === false) {
      return null;
    } else {
      return (
        <li key={input + i}>
          {props.data[input].label}: {props.data[input].value}
        </li>
      );
    }
  });

  return (
    <div>
      <ul>{showInputs}</ul>
    </div>
  );
};

export default Contact;
