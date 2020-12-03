import React from 'react';
import Checkbox from "../UI/Checkbox/Checkbox"
import TextArea from "../UI/AboutMeInput/TextArea"
import classes from './AboutMe.module.sass';


const AboutMe = (props)=>{

const {isActive, value, id} = props.data.aboutMe



    return <section className={classes.AboutMe}>
        <h2>About me:</h2>
        <div style={{position: "relative"}}>
        <Checkbox  dataType="aboutMe" id={id} isActive={isActive} checkboxChange={props.checkboxChange}  />

        <TextArea isDisabled={!isActive}change={(e)=> props.inputChange(e, props.dataType, props.dataType)} id={id} value={value} />


        </div>

    </section>
}

export default AboutMe