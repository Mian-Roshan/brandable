import React,{useState} from 'react'
import {proPlan , crown} from '../../components/AllImages'
import Switch from "react-switch"
const Pro = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };
    const divideAmount = 119.99/12;
    const yearlyAmount = divideAmount.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    const monthlyAmount = divideAmount+3;
    const PerTime = checked ? "Year" : "Month"
    return (
        <div className="package-detail px-3 pb-5">
            <div className="package-title">
                <h3 className="font-boldest f25-size mb-2 d-flex align-items-end justify-content-center"
                    style={{lineHeight:"0.8"}}>
                    <span className="me-2">
                        <img src={crown} />
                    </span>
                    Pro
                </h3>
                <p className="text-grey mb-4 f14-size">
                   Professional design made easy with unlimited access to premium tools and content
                </p>
                <div className="package-price">
                    <h3 className="font-boldest f30-size">${checked ?  "119.99" :  yearlyAmount}<span className="f16-size font-boldest">/{PerTime}</span></h3>
                    <span className="f12-size text-grey">At 
                    ${!checked ?  monthlyAmount.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] : yearlyAmount}
                    &nbsp;per {checked ? "Month" : "Month"}</span>
                </div>
                <div className="switch-duration d-flex flex-wrap align-items-center justify-content-center">
                    <button className={`bg-transparent border-0 ${checked? "text-grey":"text-black"}`}
                    onClick={(()=>{setChecked(false)})}>
                        This Month
                    </button>
                    <label className="mt-2 mx-2">
                        <Switch
                        onChange={handleChange}
                        checkedIcon={false}
                        checked={checked}
                        uncheckedIcon={false}
                        onColor="#7236df"
                        offColor="#7236df"
                        className="react-switch"
                        />
                    </label>
                    <button className={`bg-transparent border-0 ${checked? "text-black":"text-grey"}`}
                        onClick={(()=>{setChecked(true)})}>
                        This Year
                    </button>
                </div>
            </div>    
            <div className="mt-5">
                <button className="w-100 radius4 text-white px-3 py-2 border-0 f16-size" style={{ background: '#7236df' }}>
                    Try for Free
                </button>
            </div>
            <ul className="list-unstyled mt-4">
                <li className="mb-3 f14-size">Everything <b>Free</b> has, plus:</li>
                <li className="mb-3 f14-size">75+ million premium stock photos,
                420,000+ free templates with new designs daily
                </li>
                <li className="mb-3 f14-size">
                   Create 1 Brand Kit and upload your own fonts and logos
                </li>
                <li className="mb-3 f14-size">
                   Unlimited use of Background Remover
                </li>
                <li className="mb-3 f14-size">
                   Resize designs infinitely with Magic Resize
                </li>
                <li className="mb-3 f14-size">
                   Save designs as templates for your team to use
                </li>
                <li className="mb-3 f14-size">
                  100GB of cloud storage
                </li>
                <li className="mb-3 f14-size">
                  Schedule social media content to 8 platforms
                </li>
            </ul>
            <div className="plan-image-section radius8 overflow-hidden mt-5 black-overlay-layer
                position-relative w-fit-contnent mx-auto" data-for="Available">
                <img src={proPlan} className="img-fluid" />
            </div>
        </div>

    )

}
export default Pro
