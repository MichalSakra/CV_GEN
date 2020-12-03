import React from 'react';



const AboutMe = props =>{
    

    return  props.data.aboutMe.isActive? props.data.aboutMe.value.trim() !== " " ?  
    <div>
    <p> {props.data.aboutMe.value}</p>
    </div> : null : "section disabled"
}

export default AboutMe