import React from 'react'
import {Link} from "react-router-dom"
const AssetsFiles= (props) => {
    return (
        <React.Fragment>
            <Link to={`/client/asset/${props.title}`} className="text-decoration-none d-block">
                <img src={props.image} height="229px" className="object-fit-cover radius10" width="100%" alt={props.title} />
                <div class="d-flex align-items-center">
                    <div className="file-title mt-3 text-overflow-style">
                        <h3 class="mb-0 f20-size font-boldest me-2 f15-size text-black text-overflow-style">{props.title}</h3>
                    </div>
                    <div className="file-extention ms-auto mt-3">
                        <label className="text-uppercase bg-primary f15-size py-1 text-white px-3 font-semi d-flex align-items-center"
                        style={{borderRadius:"4px"}}>{props.extension}</label>
                    </div>
                </div>
                <div class="d-flex">
                    <div className="file-filterBy mt-3 me-2">
                        <p class="mb-0 font-semi f14-size color-grey">{props.filter}</p>
                    </div>
                    <div className="file-status ms-auto mt-3">
                        <label className="text-capitalize text-black font-semi f14-size">{props.status}</label>
                    </div>
                </div>
            </Link>
        </React.Fragment>    
    )
}
export default AssetsFiles