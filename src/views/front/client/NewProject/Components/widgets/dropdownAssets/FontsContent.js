import React from 'react'
import Select from 'react-select'
import CounterComponent from './CounterComponent'
import {
    XCircleFill,
} from 'react-bootstrap-icons'
const FontsContent = () => {
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
        control: styles => ({ ...styles, backgroundColor: 'white', fontSize: "13px", height: "35px" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                color: '#000',
                fontSize: "13px",
                cursor: isDisabled ? 'not-allowed' : 'default',
                backgroundColor: isSelected ? '#4285F4' : 'default',
                color: isSelected ? '#fff' : 'default',
                "&:hover": {
                    color: "#fff",
                    backgroundColor: '#4285F4'
                }
            };
        },
    }
    const Output = {
        boxWrap: {
            width: "35px",
            height: "35px"
        },
        Cancel: {
            top: "-5px",
            right: "0px",
            lineHeight: "0"
        }
    }
    return (
        <React.Fragment>
            <div>
                <h5 className="mb-2 f14-size font-bold">Header</h5>
                <div className="mb-2">
                    <label className="mb-2 f12-size font-bolder">Font</label>
                    <Select options={options}
                        styles={colourStyles}
                        placeholder="Select fonts"
                    />
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="mb-3">
                        <CounterComponent label="font size" />
                    </div>
                    <div className="mb-3">
                        <CounterComponent label="font weight" />
                    </div>
                </div>
            </div>
            <div>
                <h5 className="mb-2 f14-size font-bold">Sub-Header</h5>
                <div className="mb-2">
                    <label className="mb-2 f12-size font-bolder">Font</label>
                    <Select options={options}
                        styles={colourStyles}
                        placeholder="Select fonts"
                    />
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="mb-3">
                        <CounterComponent label="font size" />
                    </div>
                    <div className="mb-3">
                        <CounterComponent label="font weight" />
                    </div>
                </div>
            </div>
            <div>
                <h5 className="mb-2 f14-size font-bold">Body</h5>
                <div className="mb-2">
                    <label className="mb-2 f12-size font-bolder">Font</label>
                    <Select options={options}
                        styles={colourStyles}
                        placeholder="Select fonts"
                    />
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="mb-3">
                        <CounterComponent label="font size" />
                    </div>
                    <div className="mb-3">
                        <CounterComponent label="font weight" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FontsContent