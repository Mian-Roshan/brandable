import React from 'react'
import { Plus } from 'react-bootstrap-icons/';
const PaymentMethod = () => {
    const ButtonStyle={
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.25)"
    }
    return (
        <React.Fragment>
            <h5 className="f16-size text-black font-bolder pb-3 border-bottom">Security</h5>
            <button className="bg-brand-blue d-flex align-items-center mt-4
                text-white btn f14-size btn-round-8 font-bolder text-decoration-none" style={ButtonStyle}>
                <Plus color="#fff" size={25} />
                Add Payment Method
            </button>
        </React.Fragment>
    )
}
export default PaymentMethod