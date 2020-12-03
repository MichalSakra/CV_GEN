import React from "react";
import { withRouter } from "react-router";

import Button from "../UI/Button/Button";

const Confirm = (props) => {
  const handleConfirmClick = () => {
    props.handleConfirmForm(props.data);

    return props.history.push("/verify");
  };

  return (
    <Button
      btnSize="big"
      btnType="info"
      btnPosition="center"
      click={handleConfirmClick}
    >
      OK
    </Button>
  );
};

export default withRouter(Confirm);
