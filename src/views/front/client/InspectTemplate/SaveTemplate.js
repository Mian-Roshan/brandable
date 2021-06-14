import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import SaveForm from './Widgets/SaveForm'
import BoxTemplate from './Widgets/BoxTemplate'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const SaveTemplate = () => {
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false}
                NextButton={false} heading="Save as Template" NextUrl="/client/SaveTemplate" />
            <div className="mb-3">
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={5} lg={4} xl={3} className="mt-3">
                            <SaveForm />
                        </Col>
                        <Col xs={12} lg={7} lg={8} xl={9} className="mx-auto my-5 text-center">
                            <Row>
                                <Col xs={12} md={6} lg={5} className="mt-3">
                                    <BoxTemplate imgHeight="223px" heading="medium" />
                                </Col>
                                <Col xs={12} md={6} lg={7} className="mt-3 ms-auto">
                                    <div className="upload-assets">
                                        <button class="theme-light-btn text-white outline-none border-0 
                                            mx-auto d-flex justify-content-center align-items-center h-40px text-decoration-none">
                                            Save and Upload
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-start my-5 pb-4" style={{borderBottom:"1px solid #a3a3a3"}}>
                                <h5 className="mb-0 f20-size font-bold">Linked Assets</h5>
                            </div>
                            <Row>
                                <Col xs={12} md={6} lg={4} className="mb-3">
                                  <BoxTemplate imgHeight="150px" heading="small" />
                                </Col> 
                                <Col xs={12} md={6} lg={4} className="mb-3">
                                  <BoxTemplate imgHeight="150px" heading="small" />
                                </Col>
                                <Col xs={12} md={6} lg={4} className="mb-3">
                                  <BoxTemplate imgHeight="150px" heading="small" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default SaveTemplate