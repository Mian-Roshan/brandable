import React,{useEffect,useState} from 'react'
import {
    ChevronUp,ChevronDown,
    FileEarmarkPlus,
    Trash,FilePlus,Plus
} 
from 'react-bootstrap-icons'
import 
    EditorTopBar
from './widgets/EditorTopBar'
import EditorRightBar from './EditorRightBar'
import EditorFooter from './widgets/EditorFooter'
const EditorCanvas = (props) => {
    const style = {
        canvas:{
            boxShadow:"0px 0px 20px 2px rgba(0, 0, 0, 0.15)",
            height:"320px"
        },
        lineH:{
            lineHeight:"1"
        },
        blackColor:{
            color:"#0a0416"
        }
    }
    return (
        <React.Fragment>
            <div className="flex-1" style={{background:"#F2F2F2"}}>
               <EditorTopBar />
               <div className="d-flex">
                    <div className="EditorcanvasArea w-100 pt-5 pb-4" id="EditorcanvasArea" style={{height:props.height - 105+"px",
                        overflowY:"auto"}}>
                        <div className="canvasTileWrap mx-auto" style={{width:"320px"}}>
                            <div>
                                <ul className="list-unstyled list-inline">
                                <li className="list-inline-item me-4">
                                    <span className="f14-size font-semi">Page 2 - Add page...</span>
                                </li>
                                    <li className="text-center me-3 list-inline-item">
                                        <button className="bg-transparent text-center border-0 p-0">
                                            <ChevronUp size={18} style={style.lineH} />
                                        </button>
                                    </li>
                                    <li className="text-center me-3  list-inline-item">
                                        <button className="bg-transparent text-center border-0 p-0">
                                            <ChevronDown size={18}  style={style.lineH} />
                                        </button>
                                    </li>
                                    <li className="text-center list-inline-item me-3">
                                        <button className="bg-transparent text-center border-0 p-0">
                                            <FileEarmarkPlus size={18}  style={style.lineH} />
                                        </button>
                                    </li>
                                    <li className="text-center list-inline-item me-3">
                                        <button className="bg-transparent text-center border-0 p-0">
                                            <Trash size={18}  style={style.lineH} />
                                        </button>
                                    </li>
                                    <li className="text-center list-inline-item">
                                        <button className="bg-transparent text-center border-0 p-0">
                                            <FilePlus size={18}  style={style.lineH} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="canvas-container bg-white" style={style.canvas}>
                            </div>
                            <div>
                                <button className="border-0 f16-size d-flex 
                                align-items-center w-100 mt-4
                                justify-content-center py-1" style={{background:"#d9d9d9"}}>
                                <Plus size={28} color="0a0416" />
                                <span className="font-bolder" style={style.blackColor}>Add Page</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <EditorRightBar height={props.height - 105} />
                </div>    
                <EditorFooter />
            </div>
        </React.Fragment>
    )
}

export default EditorCanvas