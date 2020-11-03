import * as actionTypes from "./actionTypes"


export const addFormData = (data)=>{
    
    return{
        type: actionTypes.ADD_FORM_DATA,
        data: data
    }
} 