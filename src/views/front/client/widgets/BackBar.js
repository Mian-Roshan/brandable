import React from 'react'
import {ArrowLeft, ArrowRight} from 'react-bootstrap-icons/'
import {useHistory} from 'react-router-dom'
function BackBar(props) {
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }     
    const topHeadClass = props.NextButton?"ms-auto":"mx-auto",
    ButtonStyle = "border-0 bg-transparent d-flex align-items-center text-white font-bolder"
    return (
        <div className="Back-top-bar py-3 px-lg-5 px-md-4 px-3 gr-gredient d-flex align-items-center">
            {props.BackButton?
                <button className="border-0 bg-transparent d-flex align-items-center 
                  text-white font-bolder" onClick={goBack}>
                  <ArrowLeft className="me-2" style={{fontSize:"22px"}} /> Back
                </button>
            :null}
            <div class="d-flex align-items-center mx-auto flex-1">
                <p className={'text-white mb-0 text-center font-semi '+topHeadClass}>
                    {props.heading}
                </p>
                {props.NextButton?
                    <button className={'ms-auto '+ButtonStyle} onClick={goBack}> Next
                    <ArrowRight className="ms-2" style={{fontSize:"22px"}} />
                    </button>
                :null}
            </div>
        </div>
    )
}

export default BackBar
