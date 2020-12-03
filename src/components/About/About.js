import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Photo from "../Photo/Photo";
import Confirm from "../Confirm/Confirm";

const About = (props) => {
  return (
    <div>
      <Photo
        header="Photo"
        dataType="photo"
        data={props.photo.data}
        addPhoto={props.photo.addPhoto}
        validatePhoto={props.photo.validatePhoto}
      />

      <AboutMe
        data={props.aboutMe.data}
        inputChange={props.aboutMe.inputChange}
        checkboxChange={props.aboutMe.checkboxChange}
        dataType="aboutMe"
      />

    </div>
  );
};

export default About;
