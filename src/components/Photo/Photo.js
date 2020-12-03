import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./Photo.module.sass";

const Photo = (props) => {
  const [isError, setError] = useState({ error: false });
  const [input, setInput] = useState({ value: props.data.value, isTouched: false });
  const [showPhoto, setshowPhoto] = useState({ show: props.data.isShowed });

  const { value, type, placeholder } = props.data;

  const handleChangeInputValue = (e) => {
    setError({ error: false });
    setInput({
      value: e.target.value,
      isTouched: true,
    });
  };

  const handleLoadImage = (e) => {
    setInput({ ...input, isTouched: false });
    props.addPhoto(props.dataType, input.value, true);
    setError({ error: false });
  };

  const handleErrorImage = (e) => {
    setshowPhoto({ show: false });
    setError({ error: true });
    props.addPhoto(props.dataType, "", false);
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();

    setInput({
      ...input,
      isTouched: false,
    });
    setshowPhoto({
      show: true,
    });
  };

  const handleRemovePhotoClick = (e) => {
    e.preventDefault();
    setInput({ ...input, isTouched: true });
    setshowPhoto({ show: false });
    props.addPhoto(props.dataType, "", false);
  };
  const image = (
    <div>
      <img
        src={value === "" ? input.value : value}
        alt="This is You"
        className={classes.Image}
        onLoad={(e) => handleLoadImage(e)}
        onError={(e) => handleErrorImage(e)}
      />
      {isError.error ? null : (
        <Button
          btnType="danger"
          btnPosition="center"
          click={(e) => handleRemovePhotoClick(e)}
        >
          Remove
        </Button>
      )}
    </div>
  );

  const error = (
    <div className={classes.Error}>
      Error! <br />
      Invalid value. Try again.
    </div>
  );
  return (
    <section id={props.header} className={classes.Photo}>
      <h1>{props.header}</h1>
      <Input
        placeholder={placeholder}
        value={input.value}
        type={type}
        change={(e) => handleChangeInputValue(e)}
      />
      <Button
        btnType="success"
        btnPosition="center"
        btnSize="big"
        click={(e) => handleAddPhoto(e)}
        isDisabled={!input.isTouched || input.value === "" || showPhoto.show}
      >
        Add photo
      </Button>

      {showPhoto.show && !isError.error ? image : null}

      {!input.isTouched && isError.error ? error : null}
    </section>
  );
};

export default Photo;
