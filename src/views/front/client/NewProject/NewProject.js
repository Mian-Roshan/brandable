import React from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {
    village
} from "../../components/AllImages"
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
const listItems = ['1', '2', '3']
const listItemsInner = ['1', '2', '3','4','5','6','7','8','9','10']
const MyProject = () => {
    const ButtonStyle = "theme-light-btn mt-4 mx-auto text-white outline-none border-0 d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-5 h-50px",
    HeadingStyle = 'text-black font-boldest font-large mb-4',
    paragraphStyle = 'font-bold f22-size text-brand-grey parah-large mb-0',
    ColumnStyle = 'mb-5 mt-lg-5  px-md-5 text-center position-relative'
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true} 
            NextButton={true} NextUrl={'/client/newProject/CreativeBrief'} heading="What do you want to create?" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid> 
                   <div className="mt-5">
                        {/* <Col md={6} className={'seprator-after-column '+ColumnStyle}>
                            <div className="px-xl-4">
                               <h5 className={HeadingStyle}>Hire a professional designer</h5>
                               <p className={paragraphStyle}>
                                  Get matched with a professional designer to create a custom logo for you.
                                </p>
                            </div>
                           <Link to="/client/myAssets" className={ButtonStyle}>
                                Hire a designer
                           </Link>
                        </Col>
                        <Col md={6} className={ColumnStyle}>
                           <div className="px-xl-4">
                               <h5 className={HeadingStyle}>Create from Template</h5>
                                <p className={paragraphStyle}>
                                Get matched with a professional designer to create a custom logo for you.
                                </p>
                            </div>
                           <Link to="/client/myAssets" className={ButtonStyle}>
                               Create from template
                           </Link>
                        </Col> */}
                         <Slider className="mt-5 sliderMyProject" {...sliderSettings}>
                            {listItems.map((listItems, key) => {
                            return (
                                <div className="px-md-5" key={key}>
                                    <Row>
                                        {listItemsInner.map((listItemsI, index) => { 
                                            return (
                                                <Col md={6} lg={4} className="col-xl-2-5 mb-5" key={index} >
                                                    <Link to="/client/newProject/CreativeBrief" className="text-decoration-none">
                                                        <div className="bg-grey text-center 
                                                            justify-content-center d-flex 
                                                            align-items-center" style={{borderRadius:"10px"}}>
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
        </div>    
    )
}

export default MyProject