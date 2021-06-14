import React from 'react'
import Button from '../Widgets/Button'
import DesignBlade from '../Widgets/DesignBlade'
import FilterSearch from '../Widgets/FilterSearch'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const MyAnalytics = () => {
    const ArrayDesign = ['1', '2', '3', '4', '5']
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap">
                <div className="me-3">
                    <Button Text="Images" />
                </div>
                <div className="me-3">
                    <Button Text="Templates" />
                </div>
                <div className="me-3">
                    <Button Text="Designs" />
                </div>
            </div>
            <div className="mt-5">
              <FilterSearch />
            </div>
            <Row>
                <Col xs={12} className="mb-4">
                    <h5 className="f20-size font-bold">Top Templates / Images / Designs</h5>
                </Col>
                {ArrayDesign.map(() => {
                    return (
                        <Col xs={12} md={6} lg={3} className="col-xl-2-5 mb-4">
                            <div className="w-fit-content">
                                <DesignBlade />
                                <ul>
                                    <li className="mt-2 f12-size font-bolder">Mailchimp: 35% </li>
                                    <li className="mt-2 f12-size font-bolder">Best for Young adults </li>
                                    <li className="mt-2 f12-size font-bolder">Used x times</li>
                                </ul>
                            </div>
                        </Col>
                    )
                })}
                <Col xs={12} className="mb-4">
                    <h5 className="f20-size font-bold">Top Elements</h5>
                    <ul className="mt-4 w-fit-content mx-auto">
                        <li className="mt-2 f16-size font-bold">faces in images etc</li>
                    </ul>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default MyAnalytics