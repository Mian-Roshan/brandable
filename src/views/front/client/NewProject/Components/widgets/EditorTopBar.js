import React,{useState} from 'react'
import Select from 'react-select'
import {Dash,Plus,TypeBold,TypeItalic,
  TypeUnderline,Type,ListOl,ListUl,
  TextLeft,TextCenter,TextRight,
  ThreeDots,
  Trash
} from 'react-bootstrap-icons'
const EditorTopBar = () => {
    const[count,setCount] = useState(20)
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
            backgroundColor: isSelected ? '#2AD5C4' : 'default',
            "&:hover": {
                color: "#000",
                backgroundColor:'#2AD5C4'
            }
          };
        },
    }
    return (
        <div className="bg-white border-bottom flex-1" id="topHeadEditor">
            <ul className="list-unstyled list-inline mb-0 d-flex align-items-center py-2 px-3">
                <li className="list-inline me-3" style={{width:"150px"}}>
                    <Select options={options} 
                        styles={colourStyles}
                        placeholder="Select fonts"
                    />
                </li>
                <li className="me-2">
                    <div className="counter-size d-flex">
                        <div className="counter-button border" style={{height:"38px",overflow:"hidden",
                            borderRadius:"6px"}}>
                            <span className="d-inline-block h-100 text-center
                             cursor-pointer" style={{width:"25px"}}
                               onClick={(()=>setCount(count!==1?count - 1:1))}>
                                <Dash size={20} />
                            </span>
                            <span className="d-inline-block h-100">
                                <input className="border-end f16-size
                                px-2 font-bolder border-start h-100 border-0" 
                                type="text" value={count} style={{width:"50px"}} />
                            </span>
                            <span className="d-inline-block h-100 text-center
                               cursor-pointer" style={{width:"25px"}}
                               onClick={(()=>setCount(count+1))}>
                                <Plus size={20} />
                            </span>
                        </div>
                    </div>
                </li>
                <li className="text-center me-1">
                    <button className="p-1 bg-transparent border-0 p-1">
                        <span className="f20-size font-semi" style={{lineHeight:"1"}}>A</span>
                        <div style={{background:"#000",width:"20px",height:"3px"}}>
                        </div>
                    </button>
                </li>
                <li className="text-center me-1">
                    <button className="text-center px-0 bg-transparent border-0 p-1">
                        <TypeBold size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-1">
                    <button className="px-0 bg-transparent text-center border-0 p-1">
                        <TypeItalic size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-1">
                    <button className="px-0 bg-transparent text-center border-0 p-1">
                        <TypeUnderline size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-3">
                    <button className="px-0 bg-transparent text-center border-0 p-1">
                        <Type size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-2 border-start ps-1">
                    <button className="bg-transparent text-center border-0 p-1">
                        <ListUl size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-1">
                    <button className="bg-transparent text-center border-0 p-1">
                        <ListOl size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-2 border-start ps-1">
                    <button className="bg-transparent text-center border-0 p-1">
                        <TextLeft size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-1">
                    <button className="bg-transparent text-center border-0 p-1">
                        <TextCenter size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-1">
                    <button className="bg-transparent text-center border-0 p-1">
                        <TextRight size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-2 border-start ps-2">
                    <button className="text-center border-0 p-1"
                        style={{background:"#DDDDE1",borderRadius:"3px"}}>
                        <ThreeDots size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
                <li className="text-center me-2 ms-auto ps-2">
                    <button className="text-center bg-transparent border-0 p-1">
                        <Trash size={25} style={{lineHeight:"1"}} />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default EditorTopBar