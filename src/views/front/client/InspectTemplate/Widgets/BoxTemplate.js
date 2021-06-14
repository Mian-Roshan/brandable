import React from 'react'
import {
    Presentation,
    Covid19
} from "../../../components/AllImages"
const BoxTemplate = (props) => {
    return (
        <div className="boxTemplete p-3 bg-grey radius20" style={{
            boxShadow:"0px 7.35238px 22.0571px rgba(0, 0, 0, 0.25)"
            }}>
            <div className="box-canvas radius16 overflow-hidden">
                <img className="w-100 object-fit-cover" height={props.imgHeight} src={Covid19} />
            </div>
            <h5 className={`text-start pb-2 pt-3 font-bolder ${props.heading=="small"?"f12-size":"f16-size"}`} 
            style={{borderBottom:"1px solid #a3a3a3"}}>Covid-19 Poster</h5>
            <div className="d-flex text-start align-items-center">
                <div>
                    <p className="mb-1 text-grey f12-size">Usage Rights</p>
                    <span className="d-block f12-size font-bolder">Marketing</span>
                </div>
                <div className="ms-auto">
                    <label className="text-uppercase radius4 font-bolder f12-size px-3 py-1 text-black"
                    style={{background:'#d1d1d1'}}>psd</label>
                </div>
            </div>
        </div>
    )
}

export default BoxTemplate