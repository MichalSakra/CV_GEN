import React from "react";

import { showElements } from "../utilities";

const School = (props) => {
  return (
    <section>
    
      {showElements(props.data, "school")}
    </section>
  );
};

export default School;
