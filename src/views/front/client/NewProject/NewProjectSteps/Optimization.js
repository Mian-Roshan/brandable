import React,{useEffect, useState} from 'react'
import Header from '../../widgets/Header'
import Backbar from '../../widgets/BackBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import Select from 'react-select'
import ImageEditor from '../Components/ImageEditor';
const Optimization = () => {
    const[heightE,heightEditor] = useState()
    useEffect(() => {
      const eleHeight = document.getElementById('mian-header-wrapper').clientHeight
      heightEditor(window.innerHeight - eleHeight)
        window.addEventListener('resize', (()=> {
            heightEditor(window.innerHeight - eleHeight)
        }))
    },[true])    
    return (
        <div className="main-wrap">
            <div id="mian-header-wrapper">
                <Header />
                <Backbar 
                    heading="Edit Project"
                    BackButton={true}
                />
            </div>
            <ImageEditor
             height={heightE}
            />
        </div>    
    )
}

export default Optimization