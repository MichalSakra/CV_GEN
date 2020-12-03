import React from "react";
import { showElements } from "../utilities";
const Work = (props) => {
  return (
    <section>
     
      {showElements(props.data, "work")}
    </section>
  );
};

export default Work;
