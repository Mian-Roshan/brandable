import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    templates,fonts,colors,elements,images,icons
} from '../../../../components/AllImages'
const counter = [
    {
        icon:icons,
    },
    {
        icon:colors,
    },
    {
        icon:templates,
    },
    {
        icon:fonts,
    },
    {
        icon:elements,
    },
    {
        icon:images,
    },
    {
        icon:icons,
    },
    {
        icon:colors,
    }
]
const Icons = () => {
    return (
        <div>
            <Row>
                {counter.map((item , index) => {
                    return(
                        <Col className="col-cus-p" xs={12} lg={6} key={index}
                            style={{marginBottom:"8px"}}>
                            <div className="d-flex flex-wrap align-items-center" style={{
                                    padding:"20px 10px",
                                    minHeight:"116px"
                                }}>
                                <button className="w-100 px-0 bg-transparent border-0">
                                  <img height="65px" src={item.icon}/>
                                </button>
                            </div>
                        </Col>  
                    )              
                })}
            </Row>
        </div>
    )
}

export default Icons