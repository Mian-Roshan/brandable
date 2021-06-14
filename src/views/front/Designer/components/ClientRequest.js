import React from 'react'
import { CurrencyDollar } from 'react-bootstrap-icons/'
import TimeAgo from 'timeago-react'
import {Link} from "react-router-dom"
const ClientRequest = () => {
    const listItems = ['1', '2', '3', '4'],
    buttonClass="bg-brand-blue d-flex align-items-center text-white btn f14-size font-bolder radius6 text-decoration-none"
    return (
        <div className="main-box-wrap radius10 overflow-hidden">
            <div className="box-to-bar bg-brand-blue py-3 px-3">
                <h5 className="mb-0 text-white font-boldest f20-size text-center">Client Requests</h5>
            </div>
            <div className="box-project-body border radiusBottom10 p-4">
                <ul className="list-unstyled w-100">
                    {listItems.map((listItems, key) => {
                        return (
                            <li className="w-100 d-flex flex-wrap mb-4" key={key}>
                                <div className="icon-list me-3">
                                    <CurrencyDollar color="#376DF9" size={22} />
                                </div>
                                <div className="heading-list">
                                    <h5 className="mb-0 f16-size font-bold">Project Name {listItems}</h5>
                                    <p className="mb-0 mt-1">
                                        <TimeAgo className="text-grey f12-size font-bolder"
                                            datetime={'2020-08-08 08:08:08'}
                                            // locale='zh_CN'
                                        />
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <Link to={`/admin/ProjectDetail/${listItems.split(' ').join('-')}`} className={buttonClass}>
                                        View Details
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default ClientRequest