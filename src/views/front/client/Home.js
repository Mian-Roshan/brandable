import React from 'react'
import Header from './widgets/Header'
import Backbar from './widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import AssetBlade from './MyProjects/Widgets/AssetBlade'
import {
    village
} from "../components/AllImages"
const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
    ]
}
const sliderSettingsBottom = {
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
const listItemsBottom = ['1', '2', '3', '4', '5', '6']
const listItems = ['1', '2', '3']
const listItemsInner = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const Home = () => {
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false}
                NextButton={false} NextUrl={'/client/newProject/CreativeBrief'} heading="What do you want to create?" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid>
                    <div className="mt-5">
                        <Slider className="mt-5 sliderMyProject" {...sliderSettings}>
                            {listItems.map((listItems, key) => {
                                return (
                                    <div className="px-md-5" key={key}>
                                        <Row>
                                            {listItemsInner.map((listItemsI, index) => {
                                                return (
                                                    <Col md={6} lg={4} className="col-xl-2-5 mb-5" key={index} >
                                                        <Link to="#" className="text-decoration-none">
                                                            <div className="bg-grey text-center 
                                                            justify-content-center d-flex 
                                                            align-items-center" style={{ borderRadius: "10px" }}>
                                                                <div>
                                                                    <img src={village} className="img-fluid" />
                                                                </div>
                                                            </div>
                                                            <h5 className="mt-2 mb-2 f14-size font-bolder text-black">Business Cards</h5>
                                                            <p className="mb-0 font-bolder f12-size text-grey">8.5 x 5 cm</p>
                                                        </Link>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </Container>
            </div>
            <div className="mt-4 sliderMainHome">
                <Backbar BackButton={false}
                NextButton={false}  heading="Your Templates" />
                <Slider className="mt-5 slider_Assets" {...sliderSettingsBottom}>
                    {listItemsBottom.map((listItems, index) => {
                        return (
                            <div>
                                <AssetBlade key={index} headingText={"off"} TagTime={false} textPosition="bottom" />
                            </div>
                        )
                    })}
                </Slider>
            </div>    
            <div className="mt-5 mb-4 sliderMainHome">
                <Backbar BackButton={false}
                NextButton={false}  heading="Your Projects" />
                <Slider className="mt-5 slider_Assets" {...sliderSettingsBottom}>
                    {listItemsBottom.map((listItems, index) => {
                        return (
                            <div>
                                <AssetBlade key={index} headingText={"off"} TagTime={false} textPosition="bottom" />
                            </div>
                        )
                    })}
                </Slider>
            </div>    
        </div>
    )
}

export default Home