import React, { useState } from 'react'
import ChromePicker from 'react-color'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Colors = () => {
    const [Picker, TogglePicker] = useState(false);
    const [ColorChange, changeFunction] = useState('#000');
    const handleColorPicker = () => {
        TogglePicker(!Picker);
    }
    const SetDefault = (color) => {
        changeFunction(color)
    }
    const defaultColor = [
        "#000000", "#545454", "#737373", "#A6A6A6",
        "#D9D9D9", "#ffffff", "#ff0000", "#008037",
        "#0000ff", "#ffff00", "#800080", "#ffc0cb",
        "#ff5757", "#ffcc64", "#c8a2c8", "#ff00ff",
        "#000080", "#4b0082"
    ]
    const Style = {
        RealColor: {
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            backgroundColor: ColorChange
        },
        colorValue: {
            height: "30px"
        }
    }
    return (
        <div>
            <h6 className="text-white mt-1 mb-3 f14-size font-bolder"
            style={{ letterSpacing: "0.5px" }}>Select Color</h6>
            <div className="d-flex flex-wrap mb-4 justify-content-between">
                <div style={Style.RealColor} className="me-4">
                </div>
                <div className="bg-white flex-1 font-bolder f14-size d-flex align-items-center 
                    justify-content-center me-4" style={{ borderRadius: "3px" }}>
                    {ColorChange}
                </div>
                <div className="bg-white px-2 f14-size font-bolder d-flex align-items-center 
                    justify-content-center" style={{ borderRadius: "3px" }}>
                    100%
                </div>
            </div>
            <div onClick={handleColorPicker}>
                <ChromePicker color={ColorChange}
                    onChangeComplete={((color) => { changeFunction(color.hex) })} />
                <div className="mt-4">
                    <h6 className="text-white mt-1 mb-3 f14-size font-bolder"
                    style={{ letterSpacing: "0.5px" }}>Default Color</h6>
                    <Row className="d-flex flex-wrap px-2">
                        {defaultColor.map((item, index) => {
                            return (
                                <Col xs={6} md={3} lg={2} key={index} className="px-1 pb-1">
                                    <div style={{
                                        height: "38px",
                                        borderRadius: "4px",
                                        background: item
                                    }} className="mb-2 w-100 cursor-pointer"
                                        onClick={(() => SetDefault(item))}
                                    >
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Colors