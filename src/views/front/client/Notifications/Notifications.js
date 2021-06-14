import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import TimeAgo from 'timeago-react'
const Notifications = () => {
    const notifications_list = [
        {project_Name:"Project 1",time:"2021-02-01 08:08:08"},
        {project_Name:"Project 2",time:"2020-02-01 08:08:08"},
        {project_Name:"Project 3",time:"2018-02-01 08:08:08"},
        {project_Name:"Project 4",time:"2017-02-01 08:08:08"},
    ]
    return (
        <div>
           <div className="main-wrap">
                <Header />
                <Backbar BackButton={false} 
                NextButton={false} heading="Notifications" />
                <div className="px-lg-5 px-md-4 px-3 pb-5">
                    <Container fluid>
                        <Col xs={12} md={10} lg={8}>
                            <h5 className="f16-size text-black font-bolder mt-5 pb-3">Unread ({notifications_list.length})</h5>
                            {notifications_list.map((list_item)=>{
                                return(
                                    <div className="d-flex mt-4 border-bottom pb-3" key={list_item.project_Name}>
                                        <div className="me-3">
                                            <span className="bg-primary d-block rounded-circle" style={{width:"25px",height:"25px"}}></span>
                                        </div>
                                        <div>
                                            <h5 className="f16-size font-bolder mb-0">Your <span className="font-boldest">{list_item.project_Name}</span> is ready for review</h5>
                                            <p className="mb-0 mt-2 font-bold text-grey f12-size">
                                                <TimeAgo
                                                    datetime={list_item.time}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}    
                        </Col>
                        <Col xs={12}>
                            <h5 className="f16-size text-black font-bolder mt-5">Previous History</h5>
                            <p className="px-lg-5 px-sm-3 f14-size font-bolder px-0 mb-0 mt-4">Your Project 1 has a new revision </p>
                        </Col>
                    </Container>
                </div>
            </div> 
        </div>
    )
}
export default Notifications