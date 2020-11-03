import React from 'react';
import { connect } from 'react-redux';


const Verify = (props)=>{
    return(
        <div>
            There should be last verification module if redux works fine.
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log(state)
    return
}

export default connect(mapStateToProps, null) (Verify)