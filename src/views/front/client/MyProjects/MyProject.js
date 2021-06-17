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
import {Plus} from 'react-bootstrap-icons/'
import {Link} from 'react-router-dom'
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
  const boxStyle = {
    background:"#b1b9c5",
    border:"3px solid #4285F4",
    boxShadow:"3px 3px 25px rgba(0, 0, 0, 0.25)",
    height:"248px",
    width:"210px",
    marginTop:"57px"
  }
  const styleBoxClasses = {
    boxLink:"text-decoration-none mx-auto w-fit-content d-block",
    boxArea:"px-3 d-flex align-items-center justify-content-center flex-column radius10",
    boxContent:"text-black mb-0 text-center mt-2 text-white-shadow font-bolder f20-size",
    boxIcon:"rounded-circle bg-white d-flex align-items-center justify-content-center"
  }
  return (
    <div className="main-wrap">
      <Header />
      <Backbar BackButton={false}
        NextButton={false} heading="Ongoing Projects" />
      <div className="px-lg-5 px-md-4 px-3 pb-5">
        <Container fluid>
          <Slider className="mt-5 slider_Assets" {...sliderSettings}>
            <div classnName="box-style-linkable">
              <Link to="#" className={styleBoxClasses.boxLink}>
                <div className={styleBoxClasses.boxArea} style={boxStyle}>
                  <div>
                    <div className={styleBoxClasses.boxIcon} style={{width:"25px",height:"25px"}}>
                      <Plus className="text-black" size={25} />
                    </div>
                  </div>  
                  <h5 className={styleBoxClasses.boxContent}>
                    Create a <br />Project
                  </h5>
                </div>
              </Link>  
            </div>
            <div classnName="box-style-linkable">
              <Link to="#" className={styleBoxClasses.boxLink}>
                <div className={styleBoxClasses.boxArea} style={boxStyle}>
                  <div>
                    <div className={styleBoxClasses.boxIcon} style={{width:"25px",height:"25px"}}>
                      <Plus className="text-black" size={25} />
                    </div>
                  </div>  
                  <h5 className={styleBoxClasses.boxContent}>
                    Hire a <br />Designer
                  </h5>
                </div>
              </Link>  
            </div>
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
        <div className="mt-3">
          <Backbar BackButton={false}
          NextButton={false} bgColor={"#2e6c64"} heading="Logos" />
        </div>
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