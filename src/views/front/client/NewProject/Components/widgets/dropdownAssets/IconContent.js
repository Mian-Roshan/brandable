import React from 'react'
import Select from 'react-select'
import {ArrowUpCircle,XCircleFill} from 'react-bootstrap-icons'
const IconContent = () => {
    const [files, setFile] = React.useState([])
    const fileHandler = (e) => {
        setFile(files.concat(e.target.files[0]));
    }
    const deleteItem = (item) => {
        setFile(files.splice(item, 1))
    }
    const options = [
        { value: 'ValueFirst', label: 'ValueFirst' },
        { value: 'ValueSecond', label: 'ValueSecond' },
        { value: 'ValueThird', label: 'ValueThird' }
    ]
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white',fontSize:"13px",height:"35px" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            color: '#000',
            fontSize:"13px",
            cursor: isDisabled ? 'not-allowed' : 'default',
            backgroundColor: isSelected ? '#4285F4' : 'default',
            color: isSelected ? '#fff' : 'default',
            "&:hover": {
                color: "#fff",
                backgroundColor:'#4285F4'
            }
          };
        },
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
            <div className="mb-2">
                <label className="mb-2 f14-size font-bolder">Select Icons</label>
                <Select options={options} 
                    styles={colourStyles}
                    placeholder="Select Icons"
                />
            </div>
            <div className="mb-3">
                <label className="mb-2 f14-size font-bolder">Upload Icons</label>
                <div className="border radius4">
                    <label className="f13-size py-2 px-3 cursor-pointer
                      d-flex align-items-center mb-0">
                      <input type="file" className="d-none"
                      onChange={fileHandler}  accept="image/*" />
                      <span className="me-2">
                        <ArrowUpCircle size={14} /> 
                      </span> 
                      <span>Upload Icon</span>
                    </label>
                </div>
            </div>

                <div className="d-flex flex-wrap">
                    {files.map((item, index)=>{
                        return(
                            <div className="me-2 position-relative" key={index} style={Output.boxWrap}>
                                <img width="100%" height="100%" src={URL.createObjectURL(item)} 
                                alt={item.name} />
                                <label className="position-absolute mb-0 cursor-pointer" 
                                    onClick={(()=>deleteItem(index))} style={Output.Cancel}>
                                    <XCircleFill size={13} color="red" />
                                </label>
                            </div>
                        )
                    })}
                </div>   
            
        </div>
    )
}

export default IconContent