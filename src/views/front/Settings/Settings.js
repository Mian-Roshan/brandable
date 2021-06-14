import React from 'react'
import Header from '../client/widgets/Header'
import Backbar from '../client/widgets/BackBar'
import ProfileForm from './ProfileForm'
import PaymentMethod from './PaymentMethod'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
const Settings = () => {
    return (
        <div>
            <div className="main-wrap">
                <Header />
                <Backbar BackButton={false}
                    NextButton={false} heading="Settings" />
                <div className="px-lg-5 px-md-4 px-3 pb-5">
                    <Container fluid>
                        <Row className="ps-lg-5">
                            <Col xs={12} md={6} lg={5} className="mt-5">
                            <ProfileForm />
                            </Col>
                            <Col  xs={12} md={6} lg={5} className="mt-5 ps-md-4 ps-lg-5" >
                                <PaymentMethod />
                            </Col>
                        </Row>
                    </Container>    
                </div>
            </div>
        </div>
    )
}
export default Settings
