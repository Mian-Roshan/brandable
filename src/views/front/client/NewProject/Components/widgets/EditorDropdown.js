import React from 'react'
import TextContent from './dropdownAssets/TextContent'
import IconContent from './dropdownAssets/IconContent'
import ImagesContent from './dropdownAssets/ImagesContent'
import FontsContent from './dropdownAssets/FontsContent'
import ColorContent from './dropdownAssets/ColorContent'
const EditorDropdown = (props) => {
    const Content = props.dropFor
    const Style = {
        Menu:{
          width:"350px",
          right:"75px",
          top:"0",
          boxShadow:"0px 0px 0px 0.5px rgba(0, 0, 0, 0.1)",
        },
        Header:{
          background:"#4285F4"
        },
        Body:{
            overflowY:"auto",
            maxHeight:props.height-40+"px",
        }
    }
    return (
        <div className="position-absolute bg-white"
            style={Style.Menu}>
            <div className="w-100 text-white py-2 px-4"
                style={Style.Header}>
                <span className="text-capitalize">{Content}</span>
            </div>
            <div className="drop-body" style={Style.Body}>
                <div className="p-3">
                    {
                        Content=="texts"?
                        <TextContent />:
                        Content=="icons"?
                        <IconContent />:
                        Content=="images"?
                        <ImagesContent />:
                        Content=="colors"?
                        <ColorContent />:
                        Content=="fonts"?
                        <FontsContent />:
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default EditorDropdown;