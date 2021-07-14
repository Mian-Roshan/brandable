import React from 'react'

const TextContent = () => {
    return (

        <div>
            <div className="mb-2">
                <label className="mb-1 f14-size font-bolder">Header</label>
                <input className="w-100 f14-size form-control"
                placeholder="Enter header" />
            </div>
            <div className="mb-2">
                <label className="mb-1 f14-size font-bolder">Sub-Header</label>
                <input className="w-100 f14-size form-control"
                placeholder="Enter header" />
            </div>
            <div className="mb-2">
                <label className="mb-1 f14-size font-bolder">Body</label>
                <input className="w-100 f14-size form-control"
                placeholder="Enter header" />
            </div>
        </div>
    )
}

export default TextContent