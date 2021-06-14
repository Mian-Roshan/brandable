import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Dropzone from '../Components/Dropzone'
import { CloudArrowUp, Search } from 'react-bootstrap-icons/'
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    justifyContent:"center"
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};
const DropzoneComponent = () => {

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    const ButtonStyle = "mt-2 radius6 outline-none border-0 f14-size mx-auto d-flex justify-content-center w-fit-content font-bold align-items-center text-decoration-none px-3 h-35px"
    return (
        <React.Fragment>
            <section className="border-dashed text-center p-4 radius6">
                <div className="position-relative">
                    <input type="text" className="form-control mb-4 px-5 font-bolder radius8 f12-size h-40px border-dashblue" placeholder="Choose from Asset Bank" />
                    <Search className="position-absolute text-brand-grey" size={14} style={{ top: "13px", left: "20px" }} />
                </div>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <CloudArrowUp size={80} />
                    <span className="d-block mt-3 font-bolder f14-size text-brand-grey">Drag and Drop Files</span>
                    <span className="d-block f14-size font-bolder text-brand-grey">OR</span>
                </div>
                <label className={'btn-primary text-white ' + ButtonStyle}>
                    <input {...getInputProps()} className="d-none" />
                    Browse Files
                </label>
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>
            </section>
        </React.Fragment>
    )
}
export default DropzoneComponent