import React from 'react'
import 
{ 
 Columns,
 Megaphone,
 Briefcase,
 CardChecklist,
 ChatDots,
 ThreeDots,
 Search
} from 'react-bootstrap-icons/'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import {
    angleDown,
} from "../../../components/AllImages"
const FilterSearch = () => {
    const
    DropdownStyle={
     border: "2px solid #e1e1e1",
     borderRadius: "10px",
     right:"0"
    }
    const FilterDropdowns = [
        {title:"creative type", icon:Columns},
        {title:"Marketing", icon:Megaphone},
        {title:"Office", icon:Briefcase},
        {title:"Social media",icon:CardChecklist},
        {title:"Compaigns",icon:ChatDots},
        {title:"more",icon:ThreeDots}
    ]
    return (
        <>
            <div className="d-flex flex-wrap w-100 align-items-center">
                <ul className="list-unstyled list-inline me-3 mb-5">
                   {FilterDropdowns.map((list , key)=>{
                        return(
                            <li className="list-inline-item" key={key}>
                                <Dropdown className="no-icon custiom-dropdown dropdown-hover-item">
                                    <Dropdown.Toggle variant="none" className="py-0">
                                        <div className="d-flex align-items-center
                                            text-black btn px-3 f12-size btn-round-10 text-capitalize
                                            text-decoration-none position-relative toggle-btn font-bolder">
                                            <list.icon color="#000" className="me-2" size={16} /> {list.title}
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={DropdownStyle}>
                                    <div className="dropdown-item bg-white px-2">
                                        <Link to="#" className="text-decoration-none d-block text-black f12-size font-bolder">
                                          Option1
                                        </Link>
                                    </div>
                                    <div className="dropdown-item bg-white px-2">
                                        <Link to="#" className="text-decoration-none d-block  text-black f12-size font-bolder">
                                          option2
                                        </Link>
                                    </div>  
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li> 
                        )
                    })}
                </ul>
                <div class="search-field position-relative d-flex flex-1 me-3 mb-5">
                    <input type="text" className="flex-1 searchbar-custom bg-transparent" placeholder="Search Assets" style={{
                        boxShadow:"none",
                    }} />
                    <span>
                        <Search className="position-absolute" style={{top:"12px",right:"15px"}} />
                    </span>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: [
                    '.toggle-btn:after {',
                    '  content: "";',
                    '  position: absolute;',
                    '  background:url('+angleDown+') no-repeat;',
                    '  width:11px;',
                    '  height:11px;',
                    '  right:0px;',
                    '  top:13px',
                    '}'
                    ].join('\n')
                }}>
            </style>
        </>
        
    )
}
export default FilterSearch