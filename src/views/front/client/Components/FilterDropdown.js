import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {Image,FlagFill,PeopleFill,Tv,PinMap,CheckCircleFill,Sliders} from 'react-bootstrap-icons/'
const dropdownArray=[
    {title:"Asset Type",Icon:<Image  />, option: "Asset1"},
    {title:"Objective",Icon:<FlagFill  />,  option: "Objective1"},
    {title:"Compaigns",Icon:<PeopleFill  />,  option: "Compaigns1"},
    {title:"Channel",Icon:<Tv  /> , option: "Channel1"},
    {title:"Produced by",Icon:<PinMap  />,  option: "Produced by 1"},
    {title:"Usage Rights",Icon:<CheckCircleFill  />,  option: "Users Rights 1"},
    {title:"Advanced",Icon:<Sliders  />,  option: "Advanced 1"},
]
const FilterDropdown = () => {
    return (
        <div className="w-100">
            <div className="d-flex ps-4 flex-wrap justify-content-between">
                {dropdownArray.map((data,key)=>{
                    return(
                        <Dropdown className="me-4" key={key}>
                            <Dropdown.Toggle variant="none" id={"filter_type"+key} className="py-0">
                                <span className="me-2">
                                    {data.Icon}
                                </span>
                                <span className="font-semi f14-size">{data.title}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href={'#'+data.option.replace(/ /g,"_")}>{data.option}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                })}
            </div>
        </div>
    )
}
export  default FilterDropdown