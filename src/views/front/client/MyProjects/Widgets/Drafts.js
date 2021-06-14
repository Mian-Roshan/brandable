import React from 'react'
import {filesGroup} from "../../../components/AllImages"
const PastProject = () => {
    return (
        <div className="main-box-wrap radius10 overflow-hidden">
            <div className="box-to-bar bg-dark py-3 px-3">
                <h5 className="mb-0 text-white font-boldest f20-size text-center">Drafts</h5>
            </div>
            <div className="box-project-body border radiusBottom10 d-flex 
                align-items-center justify-content-center p-4">
                <img src={filesGroup}/>
            </div>
        </div>
    )
}
export default PastProject