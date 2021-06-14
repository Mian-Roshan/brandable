import React from 'react'
import {PersonCircle, ChatDots} from 'react-bootstrap-icons/'
import TimeAgo from 'timeago-react'
const LatestActivity = () => {
    return (
        <div className="main-box-wrap radius10 overflow-hidden">
            <div className="box-to-bar bg-dark py-3 px-3">
                <h5 className="mb-0 text-white font-boldest f20-size text-center">Latest Activity</h5>
            </div>
            <div className="box-project-body border radiusBottom10 p-4">
                <ul className="list-unstyled w-100">
                    <li className="w-100 d-flex flex-wrap mb-4">
                        <div className="icon-list me-3">
                            <PersonCircle color="#000" size={22} />
                        </div>
                        <div className="heading-list">
                            <h5 className="mb-0 f14-size font-bold">You submitted test video job to 
                            the next step: Asset Upload</h5>
                            <p className="text-grey f14-size font-bold mb-0 mt-1">Reply <ChatDots className="me-2" />
                            <TimeAgo className="text-grey f12-size font-bold"
                                datetime={'2020-08-08 08:08:08'}
                                // locale='zh_CN'
                            /></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default LatestActivity