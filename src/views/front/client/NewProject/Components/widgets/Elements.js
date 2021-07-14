import React,{useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import {
    CircleFill,SquareFill,ArrowRight,
    TriangleFill,DiamondFill,PentagonFill,HexagonFill, 
    OctagonFill,HeptagonFill,StarFill,HeartFill,ArrowLeft,
    
    MoonStarsFill,Stars,
    Circle,Square,
    Triangle,Diamond,Pentagon,Hexagon, 
    Octagon,Heptagon,Star,Heart,
    MoonStars
} from 'react-bootstrap-icons'
const shapesObj = {
    shapes:[
        CircleFill,SquareFill,
        TriangleFill,DiamondFill,PentagonFill,
        HexagonFill,HeptagonFill,OctagonFill,
        StarFill,MoonStarsFill,Stars,HeartFill,ArrowRight,ArrowLeft
    ],
    Lines:[ 
        Circle,Square,
        Triangle,Diamond,Pentagon,Hexagon, 
        Octagon,Heptagon,Star,Heart,
        MoonStars,ArrowLeft,ArrowRight
    ]
}
const Classes = {
    TabButton: "custom-tab text-white border-0 mb-3 f14-size d-flex align-items-center justify-content-center",
    innerButton : "w-100 text-start px-0 bg-transparent border-0",
    BoxTile: "d-flex flex-wrap align-items-center"
}
const Elements = () => {
    const [key, setKey] = useState('shapes');
    return (
        <div className="ele-tabs">
            <Tabs defaultActiveKey="Shapes">
                <Tab eventKey="Shapes" 
                    tabClassName={`me-3 ${Classes.TabButton}`}
                    activekey={key}
                    onSelect={(k) => setKey(k)}
                    title="Shapes">
                    <Row>
                        {shapesObj.shapes.map((Item, index) => {
                            return (
                                <Col className="col-cus-p" xs={12} lg={6} xl={4} key={index}
                                    style={{ marginBottom: "8px" }}>
                                    <div className={Classes.BoxTile} style={{
                                        padding: "15px 0px",
                                    }}>
                                        <button className={Classes.innerButton}>
                                            <Item color="#fff" size={50} />
                                        </button>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Tab>
                <Tab eventKey="Lines" title="Lines"
                    tabClassName={Classes.TabButton}>
                    <Row>
                        {shapesObj.Lines.map((Item, index) => {
                            return (
                                <Col className="col-cus-p" xs={12} lg={6} xl={4} key={index}
                                    style={{ marginBottom: "8px" }}>
                                    <div className={Classes.BoxTile} style={{
                                        padding: "15px 0px",
                                    }}>
                                        <button className={Classes.innerButton}>
                                            <Item color="#fff" size={50} />
                                        </button>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Tab>
            </Tabs>
            <style>
                {"\
                    .ele-tabs>nav{\
                      border:0px;\
                    }\
                    .ele-tabs>nav a{\
                        padding: 0.1rem 1rem;\
                        \
                        border-radius: 3px;\
                        \
                        background-color:#463F69 !important;\
                    }\
                    .ele-tabs>nav a.active{\
                        background-color:#7136dd !important;\
                    }\
                "}
            </style>
        </div>
    )
}

export default Elements