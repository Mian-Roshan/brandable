import React,{useState} from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Plus, CloudArrowUp, Trash} from 'react-bootstrap-icons/'
import { ChromePicker } from 'react-color'
import {
    Logo
} from "../../components/AllImages"

const MyKit = () => {
    const [ColorChange,changeFunction] = useState('');
    const [Picker,TogglePicker] = useState(false);
    const handleColorPicker = () =>{
        TogglePicker(!Picker);
    } 
    const popover = {
        position: 'absolute',
        zIndex: '2',
        top: '0px',
    }
    const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    }
    const FlexboxClass = "d-flex align-items-center justify-content-center rounded-circle",
    AddedLogos = 'added-logos me-4 d-flex align-items-center justify-content-center mt-4 px-4',
    buttonClass = 'border-0 py-2 px-3 radius10 mt-3 bg-grey text-black'   
    return (
        <div className="main-wrap">
            <Header />
            <Backbar BackButton={false} 
            NextButton={false} heading="Brand Kit" />
            <div className="px-lg-5 px-md-4 px-3 pb-5 pt-5">
                <Container fluid>
                    <h5 className="mb-0 font-bolder  f20-size">Brand Logos</h5>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="upload-trigger-circled mt-4 me-4">
                            <div className={'layer-border-circle '+FlexboxClass}>
                                <label className={FlexboxClass}>
                                    <input type="file" className="d-none" />
                                    <Plus className="text-white" size={40} />
                                </label>
                            </div>
                        </div>
                        <div className={AddedLogos} style={{background:"#f5f5f5"}}>
                            <img  src={Logo} width="40"  className="d-inline-block align-top me-3" alt="Brandable" />
                            <span class="font-bolder">Brandable</span>
                        </div>
                        <div className={AddedLogos} style={{background:"#655252",color:'#fff'}}>
                            <img  src={Logo} width="40"  className="d-inline-block align-top me-3" alt="Brandable" />
                            <span class="font-bolder">Brandable</span>
                        </div>
                    </div>
                    <div className="typography-section mt-5">
                        <Row>
                            <Col xs={12} md={6} xl={4} className="mb-4 pe-4">
                               <h5 className="mb-0 font-bolder  f20-size mb-4">Brand Colours</h5>
                                <div className="border radius10 p-3 d-flex flex-wrap">
                                   <p className="w-100 mb-0 f14-size font-bold text-grey">My Palette</p>
                                    <div className="main-palette-wrap mt-2 me-3">
                                        <div className="added-Palette radius10" style={{backgroundColor:"#FFD4CA"}}>
                                        </div>
                                        <h6 className="text-center mt-2 f12-size font-bold">#ab1234</h6>
                                    </div>
                                    <div className="upload-trigger-circled mt-4 me-4 position-relative">
                                        <label className={'grey-circle '+FlexboxClass} onClick={handleColorPicker}>
                                            <Plus className="text-white" size={40} />
                                        </label>
                                        { Picker? <div style={ popover }>
                                            <div style={ cover } onClick={handleColorPicker}/>
                                            <ChromePicker color={ColorChange}
                                            onChangeComplete={((color)=>{changeFunction(color.hex)})}  /> 
                                        </div> : null }
                                    </div>
                                </div>
                                <div className="addButton">
                                    <button type="button" className={buttonClass}>
                                      <Plus className="me-2" size={20} />
                                      <span className="f12-size font-bold">Add New Palette</span>
                                    </button>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={4} className="mb-4 pe-4">
                               <h5 className="mb-0 font-bolder  f20-size mb-4">Brand Fonts</h5>
                                <div className="border radius10 py-3 px-4 d-flex flex-wrap">
                                   <div class="headingStyles pt-3">
                                       <h3 className="font-bolder  mb-3 f20-size text-grey">Add a heading style</h3>
                                       <h5 className="font-bolder mb-3 f16-size text-grey">Add a heading style</h5>
                                       <h6 className="font-med mb-4 f14-size text-grey">Add a heading style</h6>
                                   </div>
                                </div>
                                <div className="addButton">
                                    <label className={buttonClass}>
                                        <CloudArrowUp className="me-2" size={20} />
                                        <span className="f12-size font-bold">Uplaod Font</span>
                                        <input className="d-none" type="file" />
                                    </label>    
                                </div>
                                <div className="uplaoded-font-view">
                                   <h5 className="font-bolder  f20-size my-4 align-items-center">Brand Fonts</h5>
                                    <div className="border d-flex flex-wrap p-2  mb-2  radius4">
                                       <span className="font-name align-self-center f12-size me-3 font-bolder ">Poppins 200</span>
                                       <caption className="py-0 align-self-center f12-size font-bold text-grey">AaBbCc</caption>
                                       <button type="button" className="ms-auto bg-transparent border-0 align-self-center">
                                            <Trash size={20} />
                                       </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default MyKit