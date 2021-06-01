import React from 'react'
import Header from './widgets/Header'
import Backbar from './widgets/BackBar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import AssetsFiles from './Components/AssetsFiles'
import {
    file4,
    file1
} from "../components/AllImages"
const AssetDetail = () => {
    const TagStyle = "bg-white px-1 f12-size py-1 mt-2 font-semi radius4 color-link me-2";
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true} 
            NextButton={false} heading="View Assets" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>          
                    <Row className="mx-0">
                        <Col xs={12} className="mt-5">
                           <h5 className="mb-0 font-boldest f20-size">Confetti</h5>
                        </Col>
                        <Col xs={12} md={6} lg={4} className="mt-4">
                            <div className="asset-detail">
                                <p className="mb-4 f12-size">ID 855BBC50-1680-4F75-8C9D8D81C3E82480</p>
                                <img src={file4} width="100%" height="400" className="object-fit-cover radius10" alt="Confetti" />
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} className="px-lg-4 px-xl-5 mt-4">
                            <h5 className="mb-4 f16-size font-boldest">Related Assets</h5>
                            <AssetsFiles title="Confeti" image={file1} 
                            status="avialable" extension={file1.split('.').pop()} filter="Asset by" />
                        </Col>
                        <Col lg={4} xs={12} className="mt-4">
                            <div className="bg-dark text-white radius10 px-1 py-1">
                               <div class="box-content-body py-4 h-box-fixed px-3 px-lg-4 ">
                                   <h5 className="mb-2 f16-size font-bolder">Name</h5>
                                   <p className="f12-size">COVID-19 Poster</p>
                                    <div class="description-text mt-4">
                                        <h5 className="mb-2 f16-size font-bolder">Description</h5>
                                        <p className="f12-size">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Cras arcu, vel quisque quam ut sem enim sit. Viverra massa massa,
                                            sagittis elementum mauris nisi quam. Suspendisse volutpat.
                                        </p>
                                   </div>
                                    <div class="tags-text mt-4">
                                        <h5 className="mb-2 f16-size font-bolder">Tags</h5>
                                        <ul className="list-unstyled d-flex flex-wrap">
                                            <li>
                                                <div class={TagStyle}>
                                                    Covid
                                                </div>
                                            </li>
                                            <li>
                                                <div class={TagStyle}>
                                                    Corona
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                    <div class="usage-text mt-4">
                                        <h5 className="mb-2 f16-size font-bolder">Usage Rights</h5>
                                        <p className="f12-size">
                                            Available
                                        </p>
                                    </div>
                                    <div class="Compaign-text mt-4">
                                        <h5 className="mb-2 f16-size font-bolder">Compaign</h5>
                                        <p className="f12-size">
                                            Spring
                                        </p>
                                    </div>
                               </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>        
        </div>
    )
}
export default AssetDetail