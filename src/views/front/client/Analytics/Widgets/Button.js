import React from 'react'
import {Plus} from 'react-bootstrap-icons'
const Button = (props) => {
    return (
        <div>
            <button type="text" className="bg-brand-blue text-white 
               d-flex align-items-center justify-content-center border-0 py-2 px-3 radius8">
               <Plus size={25} />
               {props.Text}
            </button>  
        </div>
    )
}
export  default Button