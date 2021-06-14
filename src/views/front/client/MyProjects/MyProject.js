import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import AssetBlade from './Widgets/AssetBlade'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
const MyProject = () => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  }
  const listItems = ['1', '2', '3', '4', '5', '6']
  return (
    <div className="main-wrap">
      <Header />
      <Backbar BackButton={false}
        NextButton={false} heading="Ongoing Projects" />
      <div className="px-lg-5 px-md-4 px-3 pb-5">
        <Container fluid>
          <Slider className="mt-5 slider_Assets" {...sliderSettings}>
            {listItems.map((listItems, key) => {
              return (
                <div>
                  <AssetBlade key={key} TagTime={true} textPosition="top" />
                </div>
              )
            })}
          </Slider>
        </Container>
      </div>
      <Backbar BackButton={false}
        NextButton={false} heading="All Your Projects" />
      <div className="px-lg-5 px-md-4 px-3 pb-5">
        <Container fluid>
          <div className="mt-5">
            <Row>
              {listItems.map((listItems, key) => {
                return (
                  <Col md={6} lg={4} className="col-xl-2-5 mb-5" >
                    <AssetBlade TagTime={false} textPosition="bottom" />
                  </Col>
                )
              })}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MyProject