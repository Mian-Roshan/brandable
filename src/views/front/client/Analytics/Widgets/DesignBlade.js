import React from 'react'
import {
    assetImg,
} from "../../../components/AllImages"
import {Link} from 'react-router-dom'
const DesignBlade = () => {
    return (
        <>
            <Link to={`/client/inspectTemplate/${'template'}`} className="text-decoration-none mx-auto d-block">
                <div className="d-flex flex-wrap flex-column">
                    <div className="asset-blade text-center">
                        <img src={assetImg} height="248px" className="img-fluid" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default DesignBlade