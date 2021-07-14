import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    Presentation
} from '../../../../components/AllImages'
const counter = [1,2,3,4,5,6,7,8,9,10]
const Templates = () => {
    return (
        <div>
            <Row>
                {counter.map((index) => {
                    return(
                        <Col className="mb-3" xs={12} lg={6} key={index}>
                            <div>
                                <button className="px-0 bg-transparent border-0">
                                   <img className="w-100" src={Presentation} />
                                </button>
                            </div>
                        </Col>  
                    )              
                })}
            </Row>
        </div>
    )
}

export default Templates