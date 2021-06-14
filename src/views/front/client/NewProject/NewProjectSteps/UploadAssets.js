import React from 'react'
import Header from '../../widgets/Header'
import Backbar from '../../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AssetsFiles from '../../Components/AssetsFiles'
import DropzoneComponent from '../Components/Dropzone'
import {
    file1,
    file2,
    file3
} from "../../../components/AllImages"
const FileArray = [
    { title: "Confetti", extension: file1, status: "available", filter: "Produced By" },
    { title: "Tie and Dye", extension: file2, status: "available", filter: "Asset Type" },
    { title: "Glitters-pkssa.png", extension: file3, status: "available", filter: "Advance" }
]
const UploadAssets = () => {
    const
    HeadingStyle = 'text-black font-boldest f20-size mb-4',
    paragraphStyle = 'font-bolder f14-size text-brand-grey parah-large mb-0'
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true}
            NextButton={true} NextUrl={'/client/newProject/UploadAssets'} 
            heading="Upload Assets" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>
                    <Row className="mt-5 px-xl-4">
                        <Col xs={12}>
                            <div>
                                <h5 className={HeadingStyle}>Share specific assets</h5>
                                <p className={paragraphStyle}>
                                    Upload specific image, video, font, and related design assets
                                    you would like to share with the project. Your designer will also have access
                                    to your Asset Bank.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 px-xl-4">
                        <div className="w-100 px-3">
                            <div className="d-flex flex-wrap border-top">
                                <Col xs={12} md={6} lg={4} className="pt-4 pe-lg-5 border-end">
                                    <DropzoneComponent />
                                </Col>
                                <Col className="pt-4 ps-lg-5 ps-3" xs={12} md={6} lg={8}>
                                    <Col xs={12}>
                                        <h5 className="f14-size font-bold text-brand-grey">Uploaded Assets({FileArray.length})</h5>
                                    </Col>
                                    <Row className="asset-c-row">
                                        {FileArray.map((data, key) => {
                                            return (
                                                <Col md={6} lg={6} xl={4} xs={12} className="mt-4">
                                                    <AssetsFiles 
                                                    key={key} title={data.title} image={data.extension}
                                                    status={data.status} 
                                                    extension={data.extension.split('.').pop()} 
                                                    filter={data.filter}
                                                    url={`/client/myProjects/${data.title}`}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default UploadAssets