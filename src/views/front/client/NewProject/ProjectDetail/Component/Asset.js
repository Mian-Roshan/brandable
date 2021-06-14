import React from 'react'
import {
    file4,
    music
} from "../../../../components/AllImages"
import { Download, Save2Fill } from 'react-bootstrap-icons/'
const Asset = (props) => {
    const pos_ele = {
        top:"0px",
        left:"0px"
    }
    const ButtonStyle = "bg-brand-blue radius8 f12-size ms-auto text-white outline-none border-0 d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-4 h-40px"
    return (
        <div className="asset-box">
            <div className="radius10 overflow-hidden position-relative" style={{height:"400px"}}>
                {props.type=="image"?
                <img src={file4} className="w-100 object-fit-cover" height="100%" />
                : 
                <div className="h-100 d-flex flex-wrap justify-content-center p-5 align-items-center border">
                   <div className="mt-5">
                       <img src={music} />
                   </div>
                </div>
                }
                <div className="position-absolute w-100 black-overlay align-items-center d-flex flex-wrap py-2 px-4" style={pos_ele}>
                    <div>
                        <h5 className="mb-0 text-white f14-size font-bolder">Thumbnail.png</h5>
                    </div>
                    <div className="d-flex ms-auto">
                        <button type="button" className={'me-3 '+ButtonStyle}>
                           <Download className="me-2" size={16} /> Download File
                        </button>
                        <button type="button" className={ButtonStyle}>
                           <Save2Fill className="me-2" size={16} /> Save to assets
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Asset