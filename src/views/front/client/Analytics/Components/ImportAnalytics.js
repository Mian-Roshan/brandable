import React from 'react'
import Select from 'react-select'
const ImportAnalytics = ({NextAnalytics}) => {
    const
    ButtonStyle = "btn-theme-outline-primary f14-size btn-circle px-4 py-2  btn-outline"
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
            backgroundColor: isSelected ? '#4285F4' : 'default',
            color:isSelected ? '#fff' : 'default',
            "&:hover": {
                color: "#fff",
                backgroundColor:'#4285F4'
            }
          };
        },
    }
    const GoNextTab = () =>{
        NextAnalytics(true)
    }
    return (
    <React.Fragment>    
        <div className="field-group">
            <label className="mb-2 font-bold f14-size">Source</label>
            <input type="text" className="form-control f12-size h-40px"
            placeholder="Enter the project name" />
        </div>
        <div className="field-group mt-4">
            <label className="mb-2 font-bold f14-size">Import</label>
            <div className="form-element">
                <Select options={options} 
                styles={colourStyles}
                />
            </div>
        </div>
        <div className="d-flex justify-content-end">
            <div className="mt-4 me-3">
                <button  onClick={() => GoNextTab()} className={"text-primary bg-white "+ButtonStyle}>Cancel</button>
            </div>
            <div className="mt-4">
                <button onClick={() => GoNextTab()} className={"bg-primary text-white "+ButtonStyle}>Import</button>
            </div>
        </div>
    </React.Fragment>    
    )
}
export default ImportAnalytics