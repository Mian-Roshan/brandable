import React,{useState} from 'react'
import Header from '../widgets/Header'
import Backbar from '../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Plus, CloudArrowUp, Trash} from 'react-bootstrap-icons/'
import { ChromePicker } from 'react-color'
import {
    Logo_old
} from "../../components/AllImages"

const MyKit = () => {
    const [ColorChange,changeFunction] = useState('');
    const [ArrayofPalette, arrayPusher] = useState([]) 
    const [Picker,TogglePicker] = useState(false);
    const [HeaderFamily,headerFamily] = useState('Metropolis');
    const [HeaderFsize,headerFsize] = useState('25px');
    const [HeaderBold,headerBold] = useState(true);
    const [HeaderItalic,headerItalic] = useState(false);

    const [SubHeaderFamily,SubheaderFamily] = useState('Metropolis');
    const [SubHeaderFsize,SubheaderFsize] = useState('18px');
    const [SubHeaderBold,SubheaderBold] = useState(false);
    const [SubHeaderItalic,SubheaderItalic] = useState(false);

    
    const [BodyFamily,Bodyfamily] = useState('Metropolis');
    const [BodyFsize,Bodyfsize] = useState('14px');
    const [BodyBold,Bodybold] = useState(false);
    const [BodyItalic,Bodyitalic] = useState(false);

    const handleColorPicker = () =>{
        TogglePicker(!Picker);
    } 
    const addPalette = () => {
        if(ColorChange==""){
         TogglePicker(true)
        }
        else{
            ArrayofPalette.push({name:"My Palette",color:ColorChange})
            changeFunction(ArrayofPalette);
        }
    }
    const popover = {
        position: 'absolute',
        top: '0px',
    }
    const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    }
    const hoverEditBar = {
        boxShadow: "3px 3px 24px rgba(0, 0, 0, 0.25)",
        position: "absolute",
        width: "260px",
        bottom:"-40px",
        zIndex:"200",
        display:"none",
        zIndex: '2',

    }
    const HeaderFontStyle = {
        fontFamily:HeaderFamily,
        fontSize:HeaderFsize,
        fontWeight: HeaderBold?"900":"500",
        fontStyle:HeaderItalic? "italic" :"normal"
    }
    const SubHeaderFontStyle = {
        fontFamily:SubHeaderFamily,
        fontSize:SubHeaderFsize,
        fontWeight:SubHeaderBold?"900":"500",
        fontStyle:SubHeaderItalic? "italic" :"normal"
    }
    const BodyFontStyle = {
        fontFamily:BodyFamily,
        fontSize:BodyFsize,
        fontWeight:BodyBold?"900":"500",
        fontStyle:BodyItalic? "italic" :"normal"
    }
    const FlexboxClass = "d-flex align-items-center justify-content-center rounded-circle",
    AddedLogos = 'added-logos me-4 d-flex align-items-center justify-content-center mt-4 px-4',
    buttonClass = 'border-0 py-2 px-3 radius10 mt-3 bg-grey text-black' 
    let tmp = [];
    let counterOption =10;
    for (let i = 10; i <= 100; i++) {
      tmp.push(counterOption);
      counterOption = counterOption + .5
    }
    let OptionsFont = tmp.map(function (i) {
      return (
        <option className='indent'>{i}</option>
      );
    });
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
                            <img  src={Logo_old} width="40"  className="d-inline-block align-top me-3" alt="Brandable" />
                            <span className="font-bolder">Brandable</span>
                        </div>
                        <div className={AddedLogos} style={{background:"#655252",color:'#fff'}}>
                            <img  src={Logo_old} width="40"  className="d-inline-block align-top me-3" alt="Brandable" />
                            <span className="font-bolder">Brandable</span>
                        </div>
                    </div>
                    <div className="typography-section mt-5">
                        <Row>
                            <Col xs={12} md={6} xl={4} className="mb-4 pe-4">
                               <h5 className="mb-0 font-bolder  f20-size mb-4">Brand Colours</h5>
                                <div className="border radius10 p-3 d-flex flex-wrap">
                                    <div className="mb-3">
                                        <p className="w-100 mb-0 f14-size font-bold text-grey">My Palette</p>
                                        <div className="main-palette-wrap mt-2 me-3">
                                            <div className="added-Palette radius10" style={{backgroundColor:"#FFD4CA"}}>
                                            </div>
                                            <h6 className="text-center mt-2 f12-size font-bold">#ab1234</h6>
                                        </div>
                                    </div>
                                    {ArrayofPalette.map((palette, index) => { 
                                        return (
                                            <div className="mb-3" key={index}>
                                                <p className="w-100 mb-0 f14-size font-bold text-grey">{palette.name}</p>
                                                <div className="main-palette-wrap mt-2 me-3">
                                                    <div className="added-Palette radius10" style={{backgroundColor:palette.color}}>
                                                    </div>
                                                    <h6 className="text-center mt-2 f12-size font-bold">{palette.color}</h6>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="upload-trigger-circled align-self-center me-4 mb-3 position-relative">
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
                                    <button type="button" className={buttonClass}
                                      onClick={addPalette}>
                                      <Plus className="me-2" size={20} />
                                      <span className="f12-size font-bold">Add New Palette</span>
                                    </button>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={4} className="mb-4 pe-4">
                               <h5 className="mb-0 font-bolder  f20-size mb-4">Brand Fonts</h5>
                                <div className="border radius10 py-3 px-4 d-flex flex-wrap">
                                   <div className="headingStyles w-100 pt-3">
                                        <div className="d-flex align-items-center  mb-3">
                                            <div className="position-relative editable-text me-2"> 
                                                <h3 className="text-grey mb-0" style={HeaderFontStyle}>Add header font</h3> 
                                                <div className="font-editable-bar bg-white pe-4 ps-3 py-2 radius8" style={hoverEditBar}>
                                                    <ul className="list-unstyled list-inline mb-0">
                                                        <li className="list-inline-item me-2">
                                                            <select className="bg-transparent border-0 f14-size" onChange={((e)=>{headerFamily(e.target.value)})} >
                                                                <option disabled selected>
                                                                    Choose a font
                                                                </option>
                                                                <option>Arial</option>
                                                                <option>Verdana</option>
                                                                <option>Metropolis</option>
                                                            </select>
                                                            
                                                        </li>
                                                        <li className="list-inline-item me-2">
                                                            <select className="bg-transparent border-0 f14-size"
                                                            onChange={((e)=>{headerFsize(e.target.value+"px")})}>
                                                            {OptionsFont}  
                                                            </select>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <span className={`f14-size cursor-pointer ${HeaderBold?"text-black font-bolder":"text-grey"}`}
                                                            onClick={(()=>{headerBold(!HeaderBold)})}>B</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className={`fst-italic f14-size text-grey cursor-pointer ${HeaderItalic?"text-black font-bolder":"text-grey"}`} 
                                                            onClick={(()=>{headerItalic(!HeaderItalic)})} style={{fontFamily:"auto"}}>I</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ms-auto">
                                                <label className="mb-0 cursor-pointer">
                                                    <input type="file" className="d-none" />
                                                    <CloudArrowUp  size={20} />
                                                </label>     
                                            </div>  
                                        </div>      
                                        <div className="d-flex align-items-center  mb-3">
                                            <div className="position-relative editable-text me-2"> 
                                                <h5 className="mb-0 f16-size text-grey" style={SubHeaderFontStyle}>Add subheader font</h5>
                                                <div className="font-editable-bar bg-white pe-4 ps-3 py-2 radius8" style={hoverEditBar}>
                                                    <ul className="list-unstyled list-inline mb-0">
                                                        <li className="list-inline-item me-2">
                                                            <select className="bg-transparent border-0 f14-size" onChange={((e)=>{SubheaderFamily(e.target.value)})} >
                                                                <option disabled selected>
                                                                    Choose a font
                                                                </option>
                                                                <option>Arial</option>
                                                                <option>Verdana</option>
                                                                <option>Metropolis</option>
                                                            </select>
                                                            
                                                        </li>
                                                        <li className="list-inline-item me-2">
                                                            <select className="bg-transparent border-0 f14-size"
                                                            onChange={((e)=>{SubheaderFsize(e.target.value+"px")})}>
                                                            {OptionsFont}  
                                                            </select>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <span className={`f14-size cursor-pointer ${SubHeaderBold?"text-black font-bolder":"text-grey"}`}
                                                            onClick={(()=>{SubheaderBold(!SubHeaderBold)})}>B</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className={`fst-italic f14-size text-grey cursor-pointer ${SubHeaderItalic?"text-black font-bolder":"text-grey"}`} 
                                                            onClick={(()=>{SubheaderItalic(!SubHeaderItalic)})} style={{fontFamily:"auto"}}>I</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>    
                                            <div className="ms-auto">
                                                <label className="mb-0 cursor-pointer">
                                                    <input type="file" className="d-none" />
                                                    <CloudArrowUp  size={20} />
                                                </label>     
                                            </div>  
                                        </div> 
                                        <div className="d-flex align-items-center  mb-3">
                                            <div className="position-relative editable-text me-2"> 
                                                <h6 className="mb-0 f14-size text-grey" style={BodyFontStyle}>Add body font</h6>
                                                <div className="font-editable-bar bg-white pe-4 ps-3 py-2 radius8" style={hoverEditBar}>
                                                    <ul className="list-unstyled list-inline mb-0">
                                                        <li className="list-inline-item me-2">
                                                            <select className="bg-transparent border-0 f14-size" onChange={((e)=>{Bodyfamily(e.target.value)})} >
                                                                <option disabled selected>
                                                                    Choose a font
                                                                </option>
                                                                <option>Arial</option>
                                                                <option>Verdana</option>
                                                                <option>Metropolis</option>
                                                            </select>
                                                            
                                                        </li>
                                                        <li className="list-inline-item me-2">
                                                            <select className="bg-transparent border-0 f14-size"
                                                                onChange={((e)=>{Bodyfsize(e.target.value+"px")})}>
                                                                {OptionsFont}  
                                                            </select>
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <span className={`f14-size cursor-pointer ${BodyBold?"text-black font-bolder":"text-grey"}`}
                                                            onClick={(()=>{Bodybold(!BodyBold)})}>B</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className={`fst-italic f14-size text-grey cursor-pointer ${BodyItalic?"text-black font-bolder":"text-grey"}`} 
                                                                onClick={(()=>{Bodyitalic(!BodyItalic)})} style={{fontFamily:"auto"}}>I</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>  
                                            <div className="ms-auto">
                                                <label className="mb-0 cursor-pointer">
                                                    <input type="file" className="d-none" />
                                                    <CloudArrowUp size={20} />
                                                </label>     
                                            </div>  
                                        </div>       
                                   </div>
                                </div>
                                <div className="addButton">
                                    <label className={buttonClass}>
                                        <CloudArrowUp className="me-2" size={20} />
                                        <span className="f12-size font-bold">Upload Font</span>
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