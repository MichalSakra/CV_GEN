import React from "react";
import { showElements } from "../utilities";

const Language = (props) => {
  return (
    <section>
     
      {showElements(props.data, "language")}
    </section>
  );
};

export default Language;
