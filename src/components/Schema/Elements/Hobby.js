import React from 'react';
import { showSkillItems } from '../utilities';


const Hobby = props => {


    return <div>
       

    <ul>
    {showSkillItems(props.data.skills.value)}
    </ul>
    </div>
}

export default Hobby