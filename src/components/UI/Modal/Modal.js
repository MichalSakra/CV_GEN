import React from "react";
import classes from "./Modal.module.sass";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <>
      <div className={classes.Modal}>
        <p>Are you sure?</p>

        <Button click={props.acceptClick} btnType="success" btnSize="small">
          OK
        </Button>
        <Button click={props.cancelClick} btnType="danger" btnSize="small">
          Cancel
        </Button>
      </div>
      <Backdrop click={props.cancelClick} />
    </>
  );
};

export default Modal;
