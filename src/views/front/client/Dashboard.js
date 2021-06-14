import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './widgets/Header'
import Backbar from './widgets/BackBar'
import Seachbar from './Components/Searchbar'
import FilterDropdown from './Components/FilterDropdown'
import AssetsFiles from './Components/AssetsFiles'
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
function dashboard() {
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
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false} 
            NextButton={false} heading="My Assets" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>           
                    <Seachbar uploadButton={true} />
                    <FilterDropdown />
                    <Row>
                        {FileArray.map((data,key)=>{
                            return(
                                <Col className="mt-5 px-4" xs={12} md={6} lg={4} xl={3}>
                                    <AssetsFiles key={key} title={data.title} image={data.extension} 
                                    status={data.status} extension={data.extension.split('.').pop()} filter={data.filter}
                                    url={`/client/asset/${data.title}`} />
                                </Col>    
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default dashboard
