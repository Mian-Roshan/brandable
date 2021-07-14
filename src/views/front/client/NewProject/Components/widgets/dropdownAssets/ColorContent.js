import React from 'react'
import ColorComponent from './ColorComponent'
const ColorContent = () => {
  
    return (
       <React.Fragment>
            <div className="mb-3">
                <h5 className="mb-1 f14-size font-bold">Text Color</h5>
                <label className="mb-2 f12-size font-bolder">
                    Header Color
                </label>
                <ColorComponent />
            </div>
            <div className="mb-3">
                <label className="mb-2 f12-size font-bolder">
                    Sub-Header Color
                </label>
                <ColorComponent />
            </div>
            <div className="mb-3">
                <label className="mb-2 f12-size font-bolder">
                    Body Color
                </label>
                <ColorComponent />
            </div>
            <div className="mb-3">
                <label className="mb-2 f12-size font-bolder">
                    Icon Color
                </label>
                <ColorComponent />
            </div>
        </React.Fragment>
    )
}

export default ColorContent