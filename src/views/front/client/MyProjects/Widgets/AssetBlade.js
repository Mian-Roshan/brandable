import React from 'react'
import {
    assetImg,
} from "../../../components/AllImages"
import { Link } from 'react-router-dom'
import { ClockHistory } from 'react-bootstrap-icons/'
import TimeAgo from 'timeago-react'
const AssetBlade = (props) => {
    const direction = `d-flex flex-wrap flex-column ${props.textPosition=="bottom"?"flex-column-reverse":null}`,
    Heading = "mt-3"
    return (
        <React.Fragment>
            <Link to="#" className="text-decoration-none mx-auto w-fit-content d-block">
                <div className={direction}>
                    <h5 className={"w-100 text-center text-black font-bolder mb-3 f20-size "+Heading}>Project Name 1</h5>
                    <div className="asset-blade text-center">
                        <img src={assetImg} height="248px" className="img-fluid" />
                    </div>
                    {props.TagTime ?
                    <div className="d-flex flex-wrap w-100">
                        <div className="mt-4">
                            <div className="list-tag shadow-sm bg-primary w-fit-content text-white radius4 px-3">
                                <span className="f13-size font-bolder">tag a</span>
                            </div>
                        </div>
                    </div>
                   : null}
                    {props.TagTime ?
                    <div className="d-flex mt-4 justify-content-center">
                        <div className="icon-list me-3">
                            <ClockHistory color="#376DF9" size={32} />
                        </div>
                        <div className="modified-time">
                            <h5 className="mb-0 text-grey f14-size font-bolder fst-italic">Last modified</h5>
                            <p className="text-grey f14-size font-bold mb-0 mt-1">  
                                <TimeAgo className="text-grey f12-size font-bold"
                                    datetime={'2021-06-06 01:08:08'}
                                    // locale='zh_CN'
                                />
                            </p>
                        </div>
                    </div>
                    : null}
                </div>
            </Link>
        </React.Fragment>
    )
}
export default AssetBlade