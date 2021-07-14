import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Search, Sliders } from 'react-bootstrap-icons'
import Dropdown from "react-bootstrap/Dropdown"
import Templates from "./widgets/Templates"
import Texts from "./widgets/Texts"
import Icons from "./widgets/Icons"
import Images from "./widgets/Images"
import Elements from "./widgets/Elements"
import Colors from "./widgets/Colors"
import {
    Columns,Megaphone,
    Briefcase,CardChecklist,
    ChatDots,ThreeDots
} from 'react-bootstrap-icons'
const EditorSideBar = (props) => {
    const content = props.showContent
    const FilterDropdowns = [
        {title:"Template", icon:Columns},
        {title:"Marketing", icon:Megaphone},
        {title:"Office", icon:Briefcase},
        {title:"Social media",icon:CardChecklist},
        {title:"Compaigns",icon:ChatDots}
    ]
    return (
        <div className="h-100" style={{ background: "#29303D" }}>
            <ul className="list-unstyled px-3 py-3 d-flex mb-0">
                <li className="me-2 flex-1">
                    <div className="position-relative">
                        <input type="text" className="form-control  pe-5 font-bolder radius4 
                        f13-size h-40px border-dashblue" placeholder={`Search ${content}`} />
                        <Search className="position-absolute text-brand-grey" size={14} style={{ top: "13px", right: "20px" }} />
                    </div>
                </li>
                <li>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="none"
                                className="bg-white" id="filterDropdown">
                                <Sliders size={20} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="DropdownStyle border-0 radius6">
                                {FilterDropdowns.map((item,index) => {
                                    return(
                                        <Dropdown.Item key={index} className="px-3">
                                            <button className="bg-transparent px-0 border-0">
                                                <item.icon className="me-2" size={16} /> 
                                                <span className="f14-size">{item.title}</span>
                                            </button>
                                        </Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </li>
            </ul>
            <Scrollbars renderTrackVertical={Scrollbars.renderTrackVertical}
                renderThumbVertical={Scrollbars.renderThumbVertical
                }
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                style={{ height: "calc(100% - 72px)", minWidth: "300px" }}>
                <div className="px-3">
                    {
                        content=="templates"?
                        <Templates />:
                        content=="texts"?
                        <Texts />:
                        content=="icons"?
                        <Icons />:
                        content=="images"?
                        <Images />:
                        content=="elements"?
                        <Elements />:
                        content=="colors"?
                        <Colors />:
                        null
                    }
                </div>
            </Scrollbars>
            <style>
                {"\
                    #filterDropdown:after{\
                    display:none !important;\
                    }\
                    \
                    .DropdownStyle{\
                    right:0 !important;\
                    \
                    left:auto !important;\
                    \
                    transform: translate(0px, 45px) !important;\
                    }\
                "}
            </style>
        </div>
    )
}

export default EditorSideBar