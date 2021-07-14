import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import EditorDropdown from './widgets/EditorDropdown'
import {
    text, fonts, colors, images, icons
} from '../../../components/AllImages'
const EditorRightBar = (props) => {
    const [sideContent, setSideContent] = useState(false)
    const arrayElements = [
        { title: "texts", icon: text },
        { title: "fonts", icon: fonts },
        { title: "icons", icon: icons },
        { title: "colors", icon: colors },
        { title: "images", icon: images }
    ]
    const SideBarContent = (target) => {
        setSideContent(target)
    }
    return (
        <React.Fragment>
            <div>
                <div className="h-100 position-relative">
                    <span className="d-block text-center 
                    text-uppercase f14-size py-2 font-bold" style={{lineHeight:1}}>Editor</span>
                    <div className="bg-dark" style={{ height: "calc(100% - 58px)"}}>
                        <div>
                            <span className="d-block text-white text-center 
                            text-capitalize f12-size py-2 font-normal" style={{lineHeight:1}}>Input info</span>
                        </div>
                        <Scrollbars renderTrackVertical={Scrollbars.renderTrackVertical}
                            renderThumbVertical={Scrollbars.renderThumbVertical
                            }
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                            style={{ height: "100%", width: "75px",
                            background:"#212529"}}>
                            <ul className="list-unstyled">
                                {arrayElements.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <button className={`border-0 p-3 w-100`}
                                                onClick={(() => SideBarContent(item.title))}
                                                style={{ background: sideContent == item.title ? '#4285F4' : 'transparent' }}>
                                                <img height="18px" src={item.icon} alt={item.title} />
                                                <p className="mb-0 text-white mt-1 
                                            f12-size text-capitalize">
                                                    {item.title}
                                                </p>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Scrollbars>
                    </div>
                    {
                        sideContent!==false?
                        <EditorDropdown height={props.height} dropFor={sideContent} />:null
                    }
                </div>     
            </div>
        </React.Fragment>
    )
}

export default EditorRightBar