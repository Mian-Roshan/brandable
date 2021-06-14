import React from 'react'
import Header from './widgets/Header'
import Backbar from '../client/widgets/BackBar'
import FilterDropdown from '../client/Components/FilterDropdown'
import Searchbar  from '../client/Components/Searchbar'
import AssetsFiles from '../client/Components/AssetsFiles'
import Brandkit from './components/Brandkit'
import Asset from './components/Asset'
import Chat from './components/Chat'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import { Upload } from 'react-bootstrap-icons/'
import {
    file1,
    file2,
    file3,
    file4,
    file5,
    file6,
    file7,
    file8
} from "../components/AllImages"
const ProjectDetail = () => {
    const FileArray = [
        {title:"Confetti",extension:file1,status:"available",filter:"Produced By"},
        {title:"Tie and Dye",extension:file2,status:"available",filter:"Asset Type"},
        {title:"Glitters-pkssa.png",extension:file3,status:"available",filter:"Advance"},
        {title:"Abstractart-5fdefine",extension:file4,status:"available",filter:"Usage RIghts"},
        {title:"Confetti",extension:file5,status:"available",filter:"Compaigns"},
        {title:"Tie and Dye",extension:file6,status:"available",filter:"Channel"},
        {title:"Glitters-pkssa.png",extension:file7,status:"available",filter:"Objective"},
        {title:"Abstractart-5fdefend",extension:file8,status:"available",filter:"Asset Type"},
    ]
    const ButtonStyle = "bg-brand-blue radius8 text-white outline-none border-0 d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-4 h-40px",
        headingStyle = "f14-size font-bold mb-2 text-brand-grey"
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
                                            <h5 className="f12-size font-bold text-grey w-100">Last Modified : 1 minute ago</h5>
                                        </div>
                                        <Link to="#" className={'ms-auto ' + ButtonStyle}>
                                            Request Approval
                                        </Link>
                                    </div>
                                </div>
                                <div className="assets-wrap mt-4">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5 className="font-bold f20-size mb-0 me-3">Current Assets</h5>
                                        </div>
                                        <div>
                                            <label type="button" className="border-dark f14-size font-bolder bg-white px-3 py-1 radius6">
                                                <Upload /> Upload Files
                                                <input type="file" className="d-none" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Asset type="image" />
                                    </div>
                                    <div className="mt-4">
                                        <Asset type="Audio" />
                                    </div>
                                </div>
                                <div className="project-description mt-5">
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
                            </div>
                            <Col xs={12} className="mt-5">
                                <Row>
                                    <Col xs={12}>
                                    <h5 className="f14-size text-grey font-bold">Uploaded Assets(2)</h5>
                                    </Col>
                                    <Col xs={12} md={6} className="mt-4">
                                        <AssetsFiles title="Confeti" image={file1}
                                        status="avialable" extension={file1.split('.').pop()} filter="Asset by"
                                        url={`/designer/projectDetail/Confeti`} />
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Chat />
                        </Col>
                        <Col xs={12} className="mt-5">
                           <h5 className="font-boldest f25-size mb-0 mb-4">Brand Kit</h5>
                           <Brandkit />
                        </Col>
                        <Col xs={12} className="mt-5">
                           <h5 className="font-boldest f25-size mb-0 mb-4">Brand Assets</h5>
                           <Searchbar uploadButton={false} />
                           <FilterDropdown />
                            <Row>
                                {FileArray.map((data,key)=>{
                                    return(
                                        <Col className="mt-5 px-4" xs={12} md={6} lg={4} xl={3}>
                                            <AssetsFiles key={key} title={data.title} image={data.extension} 
                                            status={data.status} extension={data.extension.split('.').pop()} filter={data.filter}
                                            url={`/designer/projectDetail/${data.title}`} />
                                        </Col>    
                                    )
                                })}
                            </Row>
                            <br />
                            <Link to="#" className={'mt-5 bg-primary '+ButtonStyle}>
                                Request Approval
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ProjectDetail