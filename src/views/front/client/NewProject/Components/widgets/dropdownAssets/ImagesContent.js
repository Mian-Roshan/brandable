import React from 'react'
import Select from 'react-select'
import {ArrowUpCircle,XCircleFill} from 'react-bootstrap-icons'
import {
    facebook,
    instagram,
    dropbox,
    drive
} from '../../../../../components/AllImages'
const ImagesContent = () => {
    const [files, setFile] = React.useState([])
    const [filesP, setFileP] = React.useState([])
    const fileHandler = (e , type) => {
        if(type=="background"){
            setFile(files.concat(e.target.files[0]));
        }else{
            setFileP(filesP.concat(e.target.files[0]));
        }
    }
    const deleteItem = (item , type) => {
        if(type=="background"){
            setFile(files.splice(item, 1))
        }else{
            setFileP(filesP.splice(item, 1))
        }
    }
    const Output = {
        boxWrap:{
            width:"35px",
            height:"35px"
        },
        Cancel:{
            top:"-5px",
            right:"0px",
            lineHeight:"0"
        }
    }
    return (

        <div>
            <div className="mb-3">
                <label className="mb-2 f14-size font-bolder">Background Images</label>
                <div className="border radius4">
                    <label className="f13-size py-2 px-3 cursor-pointer
                      d-flex align-items-center mb-0">
                      <input type="file" className="d-none"
                      onChange={((e)=>fileHandler(e ,'background'))}  accept="image/*" />
                      <span className="me-2 cursor-pointer">
                        <ArrowUpCircle size={14} /> 
                      </span> 
                      <span>Upload Image</span>
                    </label>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {files.map((item, index)=>{
                    return(
                        <div className="me-2 mb-2 position-relative" key={index} style={Output.boxWrap}>
                            <img width="100%" height="100%" src={URL.createObjectURL(item)} 
                            alt={item.name} />
                            <label className="position-absolute mb-0 cursor-pointer" 
                                onClick={(()=>deleteItem(index,'background'))} style={Output.Cancel}>
                                <XCircleFill size={13} color="red" />
                            </label>
                        </div>
                    )
                })}
            </div>   
            <div className="mb-3">
                <label className="mb-2 f14-size font-bolder">Product Images</label>
                <div className="border radius4">
                    <label className="f13-size py-2 px-3 cursor-pointer
                      d-flex align-items-center mb-0">
                      <input type="file" className="d-none"
                          onChange={((e)=>fileHandler(e ,'product'))}  accept="image/*" />
                      <span className="me-2 cursor-pointer">
                        <ArrowUpCircle size={14} /> 
                      </span> 
                      <span>Upload Image</span>
                    </label>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {filesP.map((item, index)=>{
                    return(
                        <div className="me-2 mb-2 position-relative" key={index} style={Output.boxWrap}>
                            <img width="100%" height="100%" src={URL.createObjectURL(item)} 
                            alt={item.name} />
                            <label className="position-absolute mb-0 cursor-pointer" 
                                onClick={(()=>deleteItem(index,'product'))} style={Output.Cancel}>
                                <XCircleFill size={13} color="red" />
                            </label>
                        </div>
                    )
                })}
            </div>   
            <div className="mb-3">
                <label className="mb-2 f14-size font-bolder">Import Images</label>
                <div className="d-flex flex-wrap">
                    <div className="me-2 cursor-pointer">
                        <img src={facebook} />
                        <span className="d-block f10-size mt-1 text-center">
                            Facebook
                        </span>
                    </div>
                    <div className="me-2 cursor-pointer">
                        <img src={drive} />
                        <span className="d-block f10-size mt-1 text-center">
                            Drive
                        </span>
                    </div>
                    <div className="me-2 cursor-pointer">
                        <img src={instagram} />
                        <span className="d-block f10-size mt-1 text-center">
                            Instagram
                        </span>
                    </div>
                    <div className="me-2 cursor-pointer">
                        <img src={dropbox} />
                        <span className="d-block f10-size mt-1 text-center">
                            Dropbox
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesContent