import React, { useState, useEffect } from "react";
import EditorLeftBar from '../Components/EditorLeftBar'
import EditorCanvas from './EditorCanvas'
const ImageEditor = (props)=> {

  return(
    <React.Fragment>
      <div className="main-editor-wrap d-flex" id="EditorBrand" style={{height:props.height}}>
        <EditorLeftBar />
        <EditorCanvas height={props.height} />
      </div>
    </React.Fragment>
  )
}
export default ImageEditor