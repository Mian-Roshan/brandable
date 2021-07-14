import React,{useState} from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import EditorSideBar from './EditorSideBar'
import {
    templates,text,colors,elements,images,icons
} from '../../../components/AllImages'
const EditorLeftBar = () => {
    const[sideContent , setSideContent] = useState(null)
    const arrayElements = [
        {title:"templates",icon:templates},
        {title:"texts",icon:text},
        {title:"icons",icon:icons},
        {title:"colors",icon:colors},
        {title:"elements",icon:elements},
        {title:"images",icon:images}
    ]
    const SideBarContent = (target) => {
        setSideContent(target)
    }
    return (
        <React.Fragment>
            <div className="h-100 bg-dark">
                <Scrollbars renderTrackVertical={Scrollbars.renderTrackVertical}
                    renderThumbVertical={Scrollbars.renderThumbVertical
                    }
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    style={{height:"100%",width:"100px"}}>
                    <ul className="list-unstyled">
                        {arrayElements.map((item , index)=>{
                            return(
                                <li key={index}>
                                    <button className={`border-0 p-3 w-100`} 
                                        onClick={(()=>SideBarContent(item.title))}
                                        style={{background:sideContent==item.title?'#29303d':'transparent'}}>
                                        <img src={item.icon} alt={item.title} />
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
            {sideContent!==null?
              <EditorSideBar showContent={sideContent} />:
            null}
        </React.Fragment>
    )
}

export default EditorLeftBar