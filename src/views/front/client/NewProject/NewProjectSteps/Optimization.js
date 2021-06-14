import React from 'react'
import Header from '../../widgets/Header'
import Backbar from '../../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import Select from 'react-select'
import ImageEditor from '../Components/ImageEditor';
const Optimization = () => {
    const ButtonStyleForm = "btn-theme-outline-primary f14-size btn-circle px-4 py-2  btn-outline"
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
    const ButtonStyle = "mt-4 radius6 outline-none border-0 f14-size d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-3 h-35px",
    HeadingStyle = 'text-black font-boldest f20-size mb-4'
    return (
        <div className="main-wrap">
            <Header />

            <ImageEditor
            />
        </div>    
    )
}

export default Optimization