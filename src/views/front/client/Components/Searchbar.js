import React from 'react'
import {Search, CloudUpload} from 'react-bootstrap-icons/'
import {Link} from "react-router-dom"
const Searchbar = (props) => {
    return (
        <div className="Searchbar-wrap mt-4 mb-5 py-2 d-flex flex-wrap">
            <div className="search-field position-relative d-flex flex-1 me-3">
                <input type="text" className="flex-1 searchbar-custom" placeholder="Search Assets" />
                <span>
                    <Search className="position-absolute" style={{top:"12px",right:"15px"}} />
                </span>
            </div>
            {props.uploadButton?
            <div className="upload-assets">
                <Link to="/client/UploadAssets" className="theme-light-btn text-white outline-none border-0 
                   d-flex justify-content-center align-items-center text-decoration-none" style={{height:"40px"}}>
                   <CloudUpload className="me-2" />Upload Assets
                </Link>
            </div>:null}
        </div>
    )
}
export default Searchbar;
