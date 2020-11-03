import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./Photo.module.sass";
import Confirm from "../Confirm/Confirm";
const Photo = (props) => {
  const [isError, setError] = useState({ error: false });

  const { value, startValidate, isValidated, type, placeholder } = props.data;
  let image = (
    <div>
      <img
        src={value}
        alt="This is You"
        className={classes.Image}
        onLoad={(e) => handleLoadImage(e)}
        onError={(e) => handleErrorImage(e)}
      />
      {!isValidated ? (
        <>
          <Button
            click={(e) => props.validatePhoto(e, props.dataType, "confirm")}
          >
            Confirm
          </Button>
          <Button
            click={(e) => {
              setError({ error: false });
              props.resetValue(e, props.dataType);
            }}
          >
            Cancel
          </Button>
        </>
      ) : null}
    </div>
  );

  const handleLoadImage = (e) => {
    setError({ error: false });
  };

  const handleErrorImage = (e) => {
    setError({ error: true });
  };

  return (
    <section className={classes.Photo}>
      <Input
        placeholder={placeholder}
        value={value}
        type={type}
        change={(e) => {
          setError({ error: false });
          props.changePhoto(e, props.dataType);
        }}
      />
      <Button
        click={(e) => props.validatePhoto(e, props.dataType, "start")}
        isDisabled={startValidate}
      >
        Verify photo
      </Button>

      {startValidate && !isError.error ? image : null}
      {isError.error ? <div>error ziomek</div> : null}

      {isValidated ? <Confirm submitForm={props.submitForm} /> : null}
    </section>
  );
};

export default Photo;
