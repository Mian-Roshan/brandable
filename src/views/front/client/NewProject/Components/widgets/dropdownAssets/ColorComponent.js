import React,{ useState } from 'react'
import { ChromePicker } from 'react-color'
const ColorComponent = () => {
    const [Picker, TogglePicker] = useState(false);
    const [ColorChange, changeFunction] = useState('#000');
    const handleColorPicker = () => {
        TogglePicker(!Picker);
    }
    const Style = {
        RealColor: {
            width: "35px",
            height: "35px",
            borderRadius: "4px",
            backgroundColor: ColorChange
        },
        colorValue: {
            height: "30px"
        }
    }
    return (

        <div>
            <div className="d-flex flex-wrap justify-content-between">
                <div style={Style.RealColor}
                  className="me-4 cursor-pointer"
                  onClick={(()=>handleColorPicker())}>
                </div>
                <div className="bg-white 
                   border flex-1 font-bolder f16-size d-flex align-items-center 
                    justify-content-center me-4" style={{ borderRadius: "3px" }}>
                    {ColorChange}
                </div>
                <div className="bg-white 
                    border px-2 f16-size font-bolder d-flex align-items-center 
                    justify-content-center" style={{ borderRadius: "3px" }}>
                    100%
                </div>
            </div>
            {Picker?
                <>
                    <div className="mt-2" onClick={handleColorPicker}/>
                    <ChromePicker color={ColorChange}
                    onChangeComplete={((color)=>{changeFunction(color.hex)})}  /> 
                </>
            :null}
        </div>
    )
}

export default ColorComponent