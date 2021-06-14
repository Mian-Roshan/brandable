import React from 'react'
import Select from 'react-select'
const SaveForm = () => {
    const TagStyle = "bg-white px-1 f12-size  mt-2 font-semi radius4 color-link me-2"
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
    return (
        <>
            <div className="bg-brand-blue text-white radius10 px-3 py-3 radius16">
                <div class="form-element">
                    <label className="mb-2 f12-size font-bolder w-100">Name</label>
                    <input type="text" value="COVID-19 Poster" className="border w-100 bg-white radius4 px-3 f14-size h-38px" />
                </div>
                <div class="form-element mt-3">
                    <label className="mb-2 f12-size font-bolder w-100">Description</label>
                    <textarea type="text" col="12" rows="4" 
                        className="border w-100 bg-white radius4 p-3 f14-size"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras arcu, vel quisque qutam ut sem enim sit. ">
                    </textarea>
                </div>
                <div class="form-element mt-3">
                    <label className="mb-2 f12-size font-bolder w-100">Tags</label>
                    <input type="text" className="border w-100 bg-white radius4 px-3 f14-size h-38px" />
                    <div class="tags-text mt-2 d-flex flex-wrap align-items-center">
                        <h5 className="mb-2 f12-size font-bolder me-2">Added Image</h5>
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li>
                                <div class={TagStyle}>
                                Covid
                            </div>
                            </li>
                            <li>
                                <div class={TagStyle}>
                                Corona
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-element mt-2">
                    <label className="mb-2 f12-size font-bolder w-100">Creative Type</label>
                    <Select options={options}
                        styles={colourStyles}
                    />
                </div>
                <div class="form-element mt-2">
                    <label className="mb-2 f12-size font-bolder w-100">Compaign</label>
                    <Select options={options}
                        styles={colourStyles}
                    />
                </div>
                <div class="form-element mt-2">
                    <label className="mb-2 f12-size font-bolder w-100">Formate</label>
                    <input type="text" className="border w-100 bg-white radius4 px-3 f14-size h-38px" />
                </div>
                <div class="form-element mt-2">
                    <label className="mb-2 f12-size font-bolder w-100">Department</label>
                    <labe className="f12-size d-block mt-2">
                      <input type="radio" className="me-2" />
                      <span>Marketing</span>
                    </labe>
                    <labe className="f12-size mt-2 d-block">
                      <input type="radio" className="me-2" />
                      <span>Sales</span>
                    </labe>
                </div>
            </div>
        </>
    )
}
export default SaveForm