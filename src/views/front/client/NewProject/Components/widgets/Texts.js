import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const counter = [
    {
        title:"Thank You!",
        style:{
            fontFamily:"cursive",
            fontSize:"20px",
            color: "#ffdf2b",
            fontWeight: 700
        }
    },
    {
        title:"Welcome!",
        style:{
            fontFamily:"cursive",
            fontSize:"20px",
            color: "#e2e2e2",
            fontWeight: 700
        }
    },
    {
        title:"How are you",
        style:{
            fontFamily:"fantasy",
            fontSize:"25px",
            color: "#fff",
            fontWeight: 400
        }
    },
    {
        title:"Whats'up!",
        style:{
            fontFamily:"cursive",
            fontSize:"20px",
            color: "#000",
            fontWeight: 700
        }
    },
    {
        title:"Party",
        style:{
            fontFamily:"serif",
            fontSize:"30px",
            color: "#ffdf2b",
            fontWeight: 700
        }
    },
    {
        title:"Enjoy Life",
        style:{
            fontFamily:"inherit",
            fontSize:"25px",
            color: "#f44336",
            fontWeight: 700
        }
    }
]
const Texts = () => {
    const style = {
        headingTile:{
            background:"#463f69",
            borderRadius:"3px",
            margin:"8px 0px",
        },
        headingStyle:{
            margin:0,
            fontSize:"23px",
            color:"#fff",
            fontWeight:"bolder",
            lineHeight:"1"
        },
        subheadingStyle:{
            margin:0,
            fontSize:"16px",
            color:"#fff",
            fontWeight:"600",
            lineHeight:"1"
        },
        titleBodyStyle:{
            margin:0,
            fontSize:"14px",
            color:"#fff",
            fontWeight:"normal",
            lineHeight:"1"
        },
        classes:{
            heading:"px-3 py-2 cursor-pointer"
        },
        letterSpacing:{
            letterSpacing:"0.5px"
        }
    }
    return (
        <div>
            <div>
                <h6 className="text-white mt-1 f14-size font-bolder"
                style={style.letterSpacing}>Click text to add to page</h6>
            </div>
            <div className={style.classes.heading} style={style.headingTile}>
                <h3 style={style.headingStyle}>Add a heading</h3>
            </div>
            <div className={style.classes.heading} style={style.headingTile}>
                <h5 style={style.subheadingStyle}>Add a subheading</h5>
            </div>
            <div className={style.classes.heading} style={style.headingTile}>
                <p style={style.titleBodyStyle}>Add a title body text</p>
            </div>
            <Row>
                {counter.map((item , index) => {
                    return(
                        <Col className="col-cus-p" xs={12} lg={6} key={index}
                            style={{marginBottom:"8px"}}>
                            <div className="d-flex flex-wrap align-items-center" style={{
                                background:style.headingTile.background,
                                padding:"20px 10px",
                                minHeight:"116px"
                                }}>
                                <button className="w-100 px-0 bg-transparent border-0">
                                    <span className="mb-0" style={item.style}>{item.title}</span>
                                </button>
                            </div>
                        </Col>  
                    )              
                })}
            </Row>
            <style>
                {"\
                    .col-cus-p:nth-child(2n+1){\
                      padding-right:5px;\
                    }\
                    .col-cus-p:nth-child(2n+2){\
                        padding-left:5px;\
                    }\
                "}
            </style>
        </div>
    )
}

export default Texts