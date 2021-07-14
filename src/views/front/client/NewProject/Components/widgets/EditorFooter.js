import React,{useState} from 'react'
import {
    QuestionCircle
} from 'react-bootstrap-icons'
import {pages , fullScreen} from '../../../../components/AllImages'
const EditorFooter = () => {
    const [range , rangeSet]  = useState(0)
    const Style = {
        thumb:{
            transform: `translate(-${range}%, -50%)`,
            left: range+"%"
        },
        pagesNumber:{
            top:"6px",
            left:"-1px",
            fontSize: "12px",
            fontWeight:"600",
            width: "24px",
            textAlign: "center",
            display: "block"
        }
    }
    const elem = document.getElementById("EditorBrand");
    const openFullscreen =  () => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { 
            elem.msRequestFullscreen();
        }
    }
    return (
        <div className="bg-white border-bottom flex-1 px-3" id="footerEditor" style={{height:"50px"}}>
            <ul className="list-unstyled list-inline mb-0 h-100 
                justify-content-end d-flex align-items-center py-2 px-3">
                <li className="list-inline me-3" style={{width:"150px"}}>
                    <div className="position-relative">
                        <div className="wrap-range">
                            <input type="range" className="range" 
                            min="0" max="100" step="10" value={range}
                            onChange={((e)=>rangeSet(e.target.value))} />
                            <div className="track">
                               <div className="track-inner" style={{width:range+"%"}}></div>
                            </div>
                            <div className="thumb" style={Style.thumb}></div>
                        </div>
                    </div>                        
                </li>
                <li className="list-inline ms-3 me-3" style={{width:"45px"}}>
                  <span>{range+"%"}</span> 
                </li>
                <li className="list-inline ms-3 me-3">
                    <button className="bg-transparent p-0 border-0 position-relative">
                       <img src={pages} alt="pages" />
                       <span className="position-absolute" style={Style.pagesNumber}>1</span>
                   </button>
                </li>
                <li className="list-inline me-3">
                    <button className="bg-transparent p-0 border-0" 
                       onClick={openFullscreen}>
                       <img src={fullScreen} alt="Full screen" />
                   </button>
                </li>
                <li className="list-inline border-start ps-3">
                    <button className="bg-transparent p-0 border-0">
                       <QuestionCircle size={24} />
                   </button>
                </li>
            </ul>
        </div>
    )
}

export default EditorFooter