import React from 'react';


const Photo = props =>{


    return props.data.value !=="" ? <div>

        <img src={props.data.value} alt=""/>
    </div> : null
}

export default Photo