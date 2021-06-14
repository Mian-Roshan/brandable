import React from 'react'
import Header from '../../widgets/Header'
import Backbar from '../../widgets/BackBar'
import Asset from './Component/Asset'
import Chat from './Component/Chat'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"
const ProjectDetail = () => {
    const ButtonStyle = "bg-brand-blue radius8 text-white outline-none border-0 d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-5 h-40px",
    headingStyle="f14-size font-bold mb-2 text-brand-grey"
    return (
        <div>
            <Header />
            <Backbar 
                BackButton={false}
                NextButton={false}
                heading="Project Detail" 
            />     
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>
                    <Row className="mt-5 px-xl-4">
                        <Col xs={12} md={6} lg={8} className="pe-lg-5">
                            <div className="project-detail-wrap">
                                <div className="d-flex flex-wrap">
                                    <div className="project-detail-text d-flex flex-wrap w-100">
                                        <div className="project-info d-flex flex-wrap">
                                            <h3 className="text-black me-2 f-30px font-bold">Project #1</h3>
                                            <span className="align-self-end mb-2">
                                               <Link to="#" className="text-primary f14-size font-bold text-decoration-underline">edit</Link>
                                            </span>
                                            <h5 className="f12-size font-bold text-grey w-100">Last Modified : 1 minute ago</h5>
                                        </div>
                                        <button className={'ms-auto '+ButtonStyle}>
                                            Approve
                                        </button>
                                    </div>
                                </div>
                                <div className="project-description mt-4">
                                    <h6 className={headingStyle}>Description:</h6>
                                    <p className="f12-size mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sed rhoncus cursus massa libero senectus dolor 
                                        pellentesque lacinia. Faucibus odio suspendisse consectetur
                                        consectetur non quis id faucibus turpis. Risus, sit at eu hendrerit in cras vel fermentum risus. Est elementum 
                                        lacinia scelerisque id orci. Neque morbi nulla aliquam adipiscing.
                                    </p>
                                    <h6 className={headingStyle}>Category:</h6>
                                    <p className="f12-size mb-4">
                                       Social Media Creative 
                                    </p>
                                    <h6 className={headingStyle}>Additional Comments:</h6>
                                    <p className="f12-size ">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sed rhoncus cursus massa libero senectus 
                                       dolor pellentesque lacinia. Fausque id orci. Neque morbi nulla aliquam adipiscing.
                                    </p>
                                </div>
                                <div className="assets-wrap mt-5">
                                    <h5 className="font-bold f20-size">Current Assets</h5>
                                    <div className="mt-4">
                                        <Asset type="image" />
                                    </div>
                                    <div className="mt-4">
                                        <Asset type="Audio" />
                                    </div>
                                </div>
                            </div>
                        </Col> 

                        <Col xs={12} md={6} lg={4}>
                          <Chat />
                        </Col>

                        <Col xs={12}>
                           <h5 className="font-bold f20-size mt-4 mb-3">Additional Links</h5>
                            <a href="#" target="blank" className="d-block mb-3">
                                www.yotube.com/asasassddadw
                            </a>
                            <a href="#" target="blank" className="d-block mb-3">
                                www.yotube.com/asasassddadw
                            </a>
                            <button className={'mt-5 '+ButtonStyle}>
                                Approve
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>        
        </div>
    )
}
export default ProjectDetail