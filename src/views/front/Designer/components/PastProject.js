import React from 'react'
import {icon_recent} from "../../components/AllImages"
import TimeAgo from 'timeago-react'
const PastProject = () => {
    const listItems =['1','2','3','4'];
    return (
        <div className="main-box-wrap radius10 overflow-hidden">
            <div className="box-to-bar bg-dark py-3 px-3">
                <h5 className="mb-0 text-white font-boldest f20-size text-center">Past Projects</h5>
            </div>
            <div className="box-project-body border radiusBottom10 p-4">
                <ul className="list-unstyled w-100">
                    {listItems.map((listItems , key)=>{
                        return(
                            <li className="w-100 d-flex flex-wrap mb-4" key={key}>
                                <div className="icon-list me-3">
                                   <img src={icon_recent} height="25px" />
                                </div>
                                <div className="heading-list">
                                    <h5 className="mb-0 f16-size font-bold">Project Name {listItems}</h5>
                                    <div className="list-tag bg-brand-blue w-fit-content text-white radius4 px-3 mt-2">
                                       <span className="f13-size">tag a</span>
                                    </div>
                                </div>
                                <div className="ms-auto modified-time">
                                    <h5 className="mb-0 text-grey f14-size font-bolder fst-italic">Last modified</h5>
                                    <TimeAgo className="text-grey f12-size font-bold"
                                        datetime={'2020-08-08 08:08:08'}
                                        // locale='zh_CN'
                                    />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default PastProject