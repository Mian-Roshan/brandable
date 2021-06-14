import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    Presentation
} from "../../components/AllImages"
const InspectTemplate = () => {
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true}
            NextButton={true} heading="Inspect Template" NextUrl="/client/SaveTemplate" />
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={5} lg={4} xl={3} className="px-0">
                            <aside className="h-100vertical bg-white py-5" style={{
                                boxShadow:"0px 0px 0px 0.5px rgba(0, 0, 0, 0.1)",
                                overflowY:"auto"
                                }}>
                                <div className="bg-dark">
                                    <h5 className="text-white py-3 px-lg-4 px-3 f16-size font-bolder">
                                        Information
                                    </h5>
                                </div>
                                <div className="px-lg-4 px-3 mt-4">
                                    <h5 className="f16-size font-bolder">Used in Projects</h5>
                                    <ul>
                                        <li className="pt-3 f14-size">Used in Projects</li>
                                    </ul>
                                </div>
                                <div className="px-lg-4 px-3 mt-4">
                                    <h5 className="f16-size font-bolder">Target Audience</h5>
                                    <ul>
                                        <li className="pt-3 f14-size">Children</li>
                                        <li className="pt-3 f14-size">Adult</li>
                                        <li className="pt-3 f14-size">Business Class</li>
                                    </ul>
                                </div>
                                <div className="px-lg-4 px-3 mt-4">
                                    <h5 className="f16-size font-bolder">Overall Performance</h5>
                                    <ul>
                                        <li className="pt-3 f14-size">Mailchimp-</li>
                                        <li className="pt-3 f14-size">Gmail-</li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col xs={12} lg={7} lg={6} xl={4} className="mx-auto my-5 text-center">
                           <h5 className="f25-size font-bold mb-5">Sample Preview</h5>
                           <img src={Presentation} className="w-100 object-fit-cover radius16" height="475px"
                           style={{boxShadow:"0px 0px 20px 10px rgba(0, 0, 0, 0.15)"}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default InspectTemplate