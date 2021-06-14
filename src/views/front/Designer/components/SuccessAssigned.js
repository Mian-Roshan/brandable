import React from 'react'
import { Check } from 'react-bootstrap-icons/'
const SuccessAssigned = (props) => {
    return (
        <div>
            <h2 className="font-boldest f30-size mb-0">Successful!</h2>
            <div className="gr-gredient3 mt-5 rounded-circle d-flex 
                align-items-center mx-auto justify-content-center" 
                style={{width:"150px",height:"150px"}}>
                <Check className="text-white" size={150} />
            </div>
            <h3 className="mt-5 f20-size font-bolder mb-0">
               Task Assigned to Designer <b>“{props.Name}”</b>
            </h3>
        </div>
    )
}
export default SuccessAssigned