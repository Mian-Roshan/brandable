import React from 'react'
import Header from './widgets/Header'
import Backbar from '../client/widgets/BackBar'
import OngoingProject from '../client/MyProjects/Widgets/OngoingProject'
import PastProject from '../client/MyProjects/Widgets/PastProject'
import Drafts from '../client/MyProjects/Widgets/Drafts'
import LatestActivity from '../client/MyProjects/Widgets/LatestActivity'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const MyAssets = () => {
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false}
                NextButton={false} heading="My Projects" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>
                    <Row className="mt-5">
                        <Col md={6} className="mb-5">
                            <OngoingProject />
                        </Col>
                        <Col md={6} className="mb-5">
                            <PastProject />
                        </Col>
                        <Col md={6} className="mb-5">
                            <Drafts />
                        </Col>
                        <Col md={6} className="mb-5">
                            <LatestActivity />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>  
    )
}

export default MyAssets