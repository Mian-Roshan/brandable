import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
const MyProject = () => {
    const ButtonStyle = "theme-light-btn mt-4 mx-auto text-white outline-none border-0 d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-5 h-50px",
    HeadingStyle = 'text-black font-boldest font-large mb-4',
    paragraphStyle = 'font-bold f22-size text-brand-grey parah-large mb-0',
    ColumnStyle = 'mb-5 mt-lg-5  px-md-5 text-center position-relative'
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true} 
            NextButton={true} heading="Design Method" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid> 
                   <Row className="mt-5">
                        <Col md={6} className={'seprator-after-column '+ColumnStyle}>
                            <div className="px-xl-4">
                               <h5 className={HeadingStyle}>Hire a professional designer</h5>
                               <p className={paragraphStyle}>
                                  Get matched with a professional designer to create a custom logo for you.
                                </p>
                            </div>
                           <Link to="/client/dashboard" className={ButtonStyle}>
                                Hire a designer
                           </Link>
                        </Col>
                        <Col md={6} className={ColumnStyle}>
                           <div className="px-xl-4">
                               <h5 className={HeadingStyle}>Create from Template</h5>
                                <p className={paragraphStyle}>
                                Get matched with a professional designer to create a custom logo for you.
                                </p>
                            </div>
                           <Link to="/client/dashboard" className={ButtonStyle}>
                                Hire a designer
                           </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>    
    )
}

export default MyProject