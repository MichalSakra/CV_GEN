
import React from 'react';
import classes from "./Backdrop.module.sass"

const Backdrop = (props)=>{
    return(
        <div onClick={props.click}
        className={classes.Backdrop}>
            
        </div>
        
        
        
        )
}

export default Backdrop