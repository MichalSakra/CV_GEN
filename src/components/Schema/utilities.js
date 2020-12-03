import React from 'react';



export const showSkillItems = (skills, item)  => {
    return skills.map((skill, i) => {
      if(skill.trim() !== ""){
        return <li key={item + "skill" + i}>{skill}</li>;
      } else return null
    });
  };


const inputValidation = (value)=>{

    const withError = {
        color: "red",
        display: "block"
    }

    if(value === "" ){
        return (
            <>
            {value}
            <span style={withError}> Invalid property. Go back and place the valid value. </span>
            </>
        )
    } else return value
}


export const showElements = (elements, id ) =>{
    return elements.map((item, i) => {
        return (
          <div key={id + i}>

        {item.place ?  <p>place: {inputValidation(item.place.value)}</p> : null }
        {item.specialization ? <p>specialization: {item.specialization.value}</p> : null}   
        {item.date ?  <p>from: {item.date.value[0]} to: {item.date.value[1] !== ""? item.date.value[1]: "present"}</p> : null}  
        {item.language ?  <p>language: {inputValidation(item.language.value)}</p> : null}
        {item.level ?    <p>level: {item.level.value}</p> : null}
        <ul>{showSkillItems(item.skills.value, id)}</ul>
          </div>
        );
      });
}
