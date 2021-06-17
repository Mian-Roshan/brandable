import React from 'react'
import Select from 'react-select'
import Header from './widgets/Header'
import Backbar from './widgets/BackBar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import AssetsFiles from './Components/AssetsFiles'
import Searchbar from './Components/Searchbar'
import { Scrollbars } from 'react-custom-scrollbars'
import {
    file4,
    file1
} from "../components/AllImages"
const AssetDetail = () => {
    const TagStyle = "bg-white px-1 f12-size  mt-2 font-semi radius4 color-link me-2"
    const options = [
        { value: 'ValueFirst', label: 'ValueFirst' },
        { value: 'ValueSecond', label: 'ValueSecond' },
        { value: 'ValueThird', label: 'ValueThird' }
    ]
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white',fontSize:"13px" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            color: '#000',
            fontSize:"13px",
            cursor: isDisabled ? 'not-allowed' : 'default',
            backgroundColor: isSelected ? '#2AD5C4' : 'default',
            "&:hover": {
                color: "#000",
                backgroundColor:'#2AD5C4'
            }
          };
        },
    }
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true} heading={'Upload Files'} />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>          
                    <Row className="mx-0">
                        <Col xs={12} className="mt-5">
                           <h5 className="mb-0 font-boldest f20-size">Confetti</h5>
                        </Col>
                        <Col lg={4} md={6} xs={12} className="mt-4">
                            <div className="bg-dark text-white radius10 px-3 py-3" style={{borderBottomLeftRadius:'0',
                                borderBottomRightRadius:'0'}}>
                                <div className="form-element">
                                    <label className="mb-2 f12-size font-bolder w-100">Name</label>
                                    <input type="text" className="border w-100 bg-white radius4 px-3 f14-size h-38px" />
                                </div>
                                <div className="form-element mt-3">
                                    <label className="mb-2 f12-size font-bolder w-100">Description</label>
                                    <textarea type="text" col="12" rows="5" className="border w-100 bg-white radius4 px-3 f14-size"></textarea>
                                </div>
                                <div className="form-element mt-3">
                                    <label className="mb-2 f12-size font-bolder w-100">Tags</label>
                                    <input type="text" className="border w-100 bg-white radius4 px-3 f14-size h-38px" />
                                    <div className="tags-text mt-2 d-flex flex-wrap align-items-center">
                                        <h5 className="mb-2 f12-size font-bolder me-2">Added Tags</h5>
                                        <ul className="list-unstyled d-flex flex-wrap">
                                            <li>
                                                <div className={TagStyle}>
                                                    Covid
                                                </div>
                                            </li>
                                            <li>
                                                <div className={TagStyle}>
                                                    Corona
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className="form-element mt-2">
                                    <label className="mb-2 f12-size font-bolder w-100">Usage Rights</label>
                                    <Select options={options} 
                                       styles={colourStyles}
                                    />
                                </div>
                                <div className="form-element mt-2">
                                    <label className="mb-2 f12-size font-bolder w-100">Compaign</label>
                                    <Select options={options} 
                                       styles={colourStyles}
                                    />
                                </div>
                                <div className="form-element mt-2">
                                    <label className="mb-2 f12-size font-bolder w-100">Formate</label>
                                    <input type="text" className="border w-100 bg-white radius4 px-3 f14-size h-38px" />
                                </div>
                            </div>
                            <div className="px-3 py-3 border"style={{borderBottomLeftRadius:'10px',
                                  borderBottomRightRadius:'10px'}}>
                                 <button type="button" className="border-0 font-bolder f16-size text-white 
                                 radius4 py-2 bg-theme-skygreen w-100" >Save and Upload</button>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={8} className="ps-lg-4 ps-xl-5 mt-4">
                            <Row className="mx-0">
                                <Col xs={12} md={6} >
                                    <AssetsFiles title="Confeti" image={file1} 
                                    status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                                </Col>
                                <Col xs={12}>
                                    <hr className="my-4" />
                                </Col>
                            </Row>    
                            <Row className="mx-0  other-assets">
                                <h5 className="f16-size font-boldest px-3 mb-0 w-100">Linked Assets</h5>
                                <Col xs={12}>
                                    <div style={{marginTop:"-15px"}}> 
                                    <Searchbar />
                                    </div>
                                </Col>   
                            </Row>     
                            <Scrollbars renderTrackHorizontal={Scrollbars.renderTrackHorizontal}
                                renderThumbHorizontal={Scrollbars.renderThumbHorizontal}
                                    style={{ width:"100%",height:"270px"}}>
                                <Row className="other-assets flex-nowrap ">
                                    <Col xs={12} md={6} lg={6} xl={4} >
                                        <AssetsFiles title="Confeti" image={file1} 
                                        status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                                    </Col>
                                    <Col xs={12} md={6} lg={6} xl={4}>
                                        <AssetsFiles title="Confeti" image={file1} 
                                        status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                                    </Col>
                                    <Col xs={12} md={6} lg={6} xl={4} >
                                        <AssetsFiles title="Confeti" image={file1} 
                                        status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                                    </Col>
                                    <Col xs={12} md={6} lg={6} xl={4} >
                                        <AssetsFiles title="Confeti" image={file1} 
                                        status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                                    </Col>
                                    <Col xs={12} md={6} lg={6} xl={4} >
                                        <AssetsFiles title="Confeti" image={file1} 
                                        status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                                    </Col>
                                </Row>
                            </Scrollbars>
                        </Col>
                    </Row>
                </Container>
            </div>        
        </div>
    )
}
export default AssetDetail