import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import OngoingProject from './Widgets/OngoingProject'
import PastProject from './Widgets/PastProject'
import Drafts from './Widgets/Drafts'
import LatestActivity from './Widgets/LatestActivity'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const MyProject = () => {
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

export default MyProject