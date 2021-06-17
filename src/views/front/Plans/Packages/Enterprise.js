import React from 'react'
import {enterprisePlan} from '../../components/AllImages'
const Enterprise = () => {
    return (
 
        <div className="package-detail px-3 pb-5">
            <div className="package-title">
                <h3 className="font-boldest f25-size mb-2"
                style={{lineHeight:"1"}}>Enterprise</h3>
                <p className="text-grey mb-4 f14-size">
                  Empower your team, manage your brand, and scale 
                  your content all in one place
                </p>
                <div className="package-price">
                    <h3 className="font-boldest f30-size">$30.00</h3>
                    <span className="f12-size text-grey">
                      /month <b>per person</b>
                    </span>
                </div>
            </div>
            <div className="mt-5">
                <button className="w-100 radius4 text-white px-3 py-2 border-0 f16-size" style={{ background: '#7236df' }}>
                    Try for Free
                </button>
            </div>
            <ul className="list-unstyled mt-4">
                <li className="mb-3 f14-size">Everything Pro has, plus:</li>
                <li className="mb-3 f14-size">Establish your brand’s visual identity with logos, 
                 colors and fonts across multiple Brand Kits
                </li>
                <li className="mb-3 f14-size">
                   Control your team’s access to apps, graphics, colors,
                    logos and fonts with brand controls
                </li>
                <li className="mb-3 f14-size">
                  Control team uploads into Canva
                </li>
                <li className="mb-3 f14-size">
                  Built-in workflows to get approval on your designs
                </li>
                <li className="mb-3 f14-size">
                   Set which elements your team can edit, and 
                   stay on-brand with template locking 
                </li>
                <li>Unlimited storage</li>
                <li>Single-sign on (SSO)</li>
                <li>24/7 Enterprise-level support</li>
            </ul>
            <div className="plan-image-section radius8 overflow-hidden mt-5 black-overlay-layer
                position-relative w-fit-contnent mx-auto" data-for="Available">
                <img src={enterprisePlan} className="img-fluid" />
            </div>
        </div>

    )

}
export default Enterprise
