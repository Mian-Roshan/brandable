import React from 'react'
import Header from '../../widgets/Header'
import Backbar from '../../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import Select from 'react-select'
const CreativeBreaf = () => {
    const ButtonStyleForm = "btn-theme-outline-primary f14-size btn-circle px-4 py-2  btn-outline"
    const options = [
        { value: 'ValueFirst', label: 'ValueFirst' },
        { value: 'ValueSecond', label: 'ValueSecond' },
        { value: 'ValueThird', label: 'ValueThird' }
    ]
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white',fontSize:"13px" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            color: '#000',
            fontSize:"13px",
            cursor: isDisabled ? 'not-allowed' : 'default',
            backgroundColor: isSelected ? '#2AD5C4' : 'default',
            "&:hover": {
                color: "#000",
                backgroundColor:'#2AD5C4'
            }
          };
        },
    }
    const ButtonStyle = "mt-4 radius6 outline-none border-0 f14-size d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-3 h-35px",
    HeadingStyle = 'text-black font-boldest f20-size mb-4'
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={true} 
            NextButton={true} NextUrl={'/client/newProject/optimization'} heading="Your Design" />
            <div className="px-lg-5 px-md-4 px-3 pb-5">
                <Container fluid> 
                   <Row className="mt-5 px-xl-4">
                        <Col md={8} lg={7} xl={6} className="mx-auto">
                            {/* <div>
                               <h5 className={HeadingStyle}>Approve Content</h5>
                            </div> */}
                            <Row className="mt-2">
                               <Col xs={12}>
                                    <div className="field-style-wrap">
                                        <lable className="f12-size font-bold text-brand-grey">Name</lable>
                                        <input type="text" className="form-control mt-2 f14-size"
                                        placeholder="Enter the project name" />
                                    </div>
                                    <div className="field-style-wrap mt-4">
                                        <lable className="f12-size font-bold text-brand-grey">Category</lable>
                                        <Select className="mt-2" options={options}
                                            styles={colourStyles}
                                        />
                                    </div>
                               </Col>
                               <div className="field-style-wrap mt-4">
                                    <lable className="f12-size font-bold text-brand-grey">Description</lable>
                                    <textarea type="text" className="form-control py-3 mt-2 f14-size resize-none" cols="12" rows="6"
                                    placeholder="Enter your project description"></textarea>
                                </div>
                            </Row>
                            <div className="d-flex justify-content-end">
                                <div className="mt-4 me-3">
                                    <button  className={"text-primary bg-white "+ButtonStyleForm}>Cancel</button>
                                </div>
                                <div className="mt-4">
                                    <button  className={"bg-primary text-white "+ButtonStyleForm}>Create Project</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>    
    )
}

export default CreativeBreaf