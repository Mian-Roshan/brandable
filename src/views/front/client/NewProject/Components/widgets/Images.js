import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    file1,file2,file3,file4,file5,file6
} from '../../../../components/AllImages'
const counter = [
    {
        img:file1,
    },
    {
        img:file2,
    },
    {
        img:file3,
    },
    {
        img:file4,
    },
    {
        img:file6,
    },
    {
        img:file5,
    },
    {
        img:file2,
    },
    {
        img:file3,
    }
]
const Images = () => {
    return (
        <div>
            <Row>
                {counter.map((item , index) => {
                    return(
                        <Col className="col-cus-p" xs={12} lg={6} key={index}
                            style={{marginBottom:"8px"}}>
                            <div className="d-flex flex-wrap align-items-center" style={{
                                padding:"15px 10px",
                                }}>
                                <button className="w-100 px-0 bg-transparent border-0">
                                  <img height="65px" src={item.img}/>
                                </button>
                            </div>
                        </Col>  
                    )              
                })}
            </Row>
        </div>
    )
}

export default Images