import React from 'react'
import {freePlan} from '../../components/AllImages'
const Free = () => {
    return (
 
        <div className="package-detail px-3 pb-5">
            <div className="package-title">
                <h3 className="font-boldest f25-size mb-2"
                style={{lineHeight:"1"}}>Free</h3>
                <p className="text-grey mb-4 f14-size">
                    Everything you need to start designing
                </p>
                <div className="package-price">
                    <h3 className="font-boldest f30-size">$0.00</h3>
                </div>
            </div>
            <div className="mt-5">
                <button className="w-100 radius4 text-white px-3 py-2 border-0 f16-size" style={{ background: '#7236df' }}>
                    Get Started
                </button>
            </div>
            <ul className="list-unstyled mt-4">
                <li className="mb-3 f14-size">250,000+free templates</li>
                <li className="mb-3 f14-size">100+design types (social media posts,
                    presentations, letters , and more)
                </li>
                <li className="mb-3 f14-size">
                    Hundreds of thousands of free photos and graphics
                </li>
                <li className="mb-3 f14-size">
                   Invite memebers to your team
                </li>
                <li className="mb-3 f14-size">
                   Collaborate and comment in real-time
                </li>
                <li className="mb-3 f14-size">
                   5GB of cloud storage
                </li>
            </ul>
            <div className="plan-image-section radius8 overflow-hidden mt-5 black-overlay-layer
                position-relative w-fit-contnent mx-auto" data-for="Available">
                <img src={freePlan} className="img-fluid" />
            </div>
        </div>

    )

}
export default Free
