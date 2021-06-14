import React,{useState} from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImportAnalytics from './Components/ImportAnalytics'
import MyAnalytics from './Components/MyAnalytics'
const Analytics = () => {
    const[ShowMyAnalytics,showAnalytics] = useState(false)
    const NextAnalytics = (data) =>{
        showAnalytics(data)
    }
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false}
            NextButton={false} heading={ShowMyAnalytics?"My Analytics":"Analytics"} />
            <div className="px-lg-5 px-md-4 px-3 pb-5 mt-5">
                <Container fluid>
                    {!ShowMyAnalytics?
                        <Row>
                            <Col xs={6} md={8} lg={6} xl={5} className="mx-auto">
                                <ImportAnalytics NextAnalytics={NextAnalytics} />
                            </Col>
                        </Row>
                    :
                    <MyAnalytics />
                    }
                </Container>
            </div>
        </div>
    )
}
export default Analytics