import React from 'react';
import { Redirect, withRouter } from 'react-router';

import Button from "../UI/Button/Button"
const Confirm =(props)=>{

 const handleConfirmClick = ()=>{
    props.submitForm()

    return props.history.push("/verify")
 }
    
    return <div>
        <p>That is all. Check all of your information again. If everything is OK click the button bellow</p>

        <Button btnSize="big" btnType="success" btnPosition="center" click={handleConfirmClick}>OK</Button>
    </div>
}

export default withRouter(Confirm)