import React from 'react'
import Header from '../client/widgets/Header'
import Backbar from '../client/widgets/BackBar'
import Free from './Packages/Free'
import Pro from './Packages/Pro'
import Enterprise from './Packages/Enterprise'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Baxter , KingWood , Hubspot 
, warnermusic , Total , 
idc} from '../components/AllImages'
import Trusted from './Trusted'
const Plans = () => {
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false}
                NextButton={false} heading="Upgrade Your Plan" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container>
                    <Row className="border">
                        <Col className="pt-5 border-end text-center" sm={12} md={6} lg={4}>
                            <Free />
                        </Col>
                        <Col className="pt-5 border-end text-center" sm={12} md={6} lg={4}>
                            <Pro />
                        </Col>
                        <Col className="pt-5 text-center" sm={12} md={6} lg={4}>
                            <Enterprise />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xs={12} className="mt-5">
                            <h5 className="mb-0 text-grey f16-size 
                            text-uppercase font-bolder">Trusted By</h5>
                        </Col>
                        <Col xs={12} md={4}  className="mt-4 col-lg">
                            <div className="px-3">
                                <Trusted image={Baxter} />
                            </div>
                        </Col>
                        <Col xs={12} md={4}  className="mt-4 col-lg">
                            <div className="px-3">
                                <Trusted image={KingWood} />
                            </div>
                        </Col>
                        <Col xs={12} md={4}  className="mt-4 col-lg">
                            <div className="px-3">
                                <Trusted image={Hubspot} />
                            </div>
                        </Col>
                        <Col xs={12} md={4}  className="mt-4 col-lg">
                            <div className="px-3">
                                <Trusted image={warnermusic} />
                            </div>
                        </Col>
                        <Col xs={12} md={4}  className="mt-4 col-lg">
                            <div className="px-3">
                                <Trusted image={Total} />
                            </div>
                        </Col>
                        <Col xs={12} md={4}  className="mt-4 col-lg">
                            <div className="px-3">
                                <Trusted image={idc} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Plans