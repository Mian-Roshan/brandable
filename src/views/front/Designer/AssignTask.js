import React,{useState} from 'react'
import Header from './widgets/Header'
import Backbar from '../client/widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SuccessAssigned from './components/SuccessAssigned'
import {Profile , verified} from "../components/AllImages"
const AssignTask = () => {
    const[Assigned,dataAssigned]=useState([{ShowMessage:false,AssignedName:""}]) 
    const handleAssigned = (name) =>{
        dataAssigned([{ShowMessage:true,AssignedName:name}]) 
        setTimeout(() => {
            dataAssigned([{ShowMessage:false,AssignedName:""}])
        }, 3000);
    }
    const listItems = ['1', '2', '3', '4']
    const ButtonStyle = "bg-brand-blue radius4 text-white outline-none border-0 d-flex f12-size justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-4 py-1"
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false}
                NextButton={false} heading="Assign Task" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>
                    {!Assigned[0].ShowMessage?
                    <Row className="mt-5 ps-md-4 ps-lg-5">
                        <Col xs={12} md={10} lg={6} xl="5" className="mb-5">
                            <h3 className="text-black me-2 f-25px font-bold mb-5">Available Designers</h3>
                            <div className="assign-list">
                                {listItems.map((listItems, key) => {
                                    return(
                                        <div className="d-flex mt-4 border-bottom pb-4 align-items-center" key={key}>
                                            <div className="me-3">
                                                <img src={Profile} className="rounded-circle" width="55px" height="55px" />
                                            </div>
                                            <div>
                                                <h5 className="f16-size font-bolder mb-0">Talal Tahir 
                                                    <span className="ms-2">
                                                        <img src={verified} height="15px" />
                                                    </span>
                                                </h5>
                                                <p className="mb-0 mt-1 font-bold text-brand-grey f12-size">
                                                  Islamabad, Pakistan
                                                </p>
                                            </div>
                                            <div className="ms-auto">
                                                <button className={ButtonStyle}
                                                    onClick={()=>handleAssigned('Talal Tahir')}>
                                                    Assign
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                    :
                    <div className="mt-5 text-center pt-5">
                        <SuccessAssigned Name={Assigned[0].AssignedName} />
                    </div>
                }
                </Container>
            </div>
        </div>
    )
}
export default AssignTask