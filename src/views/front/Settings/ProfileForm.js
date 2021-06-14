import React, { useState } from 'react'
import '../../../assets/css/FloatField.css'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const ProfileForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const editButtonClass = "text-primary text-decoration-underline f12-size position-absolute font-bold",
    editPosition = { top: "17px", right: "10px", cursor: "pointer" },
    fieldStyle="border-dark px-2 w-100 f12-size radius6 mt-2 h-35px"
    return (
        <React.Fragment>
            <h5 className="f16-size text-black font-bolder pb-3 border-bottom">General</h5>
            <Col xs={12} md={8} lg={6}>
                <div className="pr-data-fields mt-3">
                    <label className="f12-size text-grey font-bold">First Name</label>
                    <div className="position-relative">
                        <input type="text" value="Talal" className={fieldStyle} />
                        <span className={editButtonClass} style={editPosition}>edit</span>
                    </div>  
                </div>
                <div className="pr-data-fields mt-3">
                    <label className="f12-size text-grey font-bold">Last Name</label>
                    <div className="position-relative">
                        <input type="text" value="Tahir" className={fieldStyle} />
                        <span className={editButtonClass} style={editPosition}>edit</span>
                    </div>    
                </div>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <div className="pr-data-fields mt-3">
                    <label className="f12-size text-grey font-bold">Email</label>
                    <div className="position-relative">
                        <input type="email" value="abc@gmail.com" className={fieldStyle} />
                        <span className={editButtonClass} style={editPosition}>edit</span>
                    </div>    
                </div>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <h5 className="f16-size text-black font-bolder mt-4 pb-3 border-bottom">Security</h5>
                <div className="pr-data-fields mt-3">
                    <label className="f12-size text-grey font-bold">Password</label>
                    <div className="position-relative">
                        <input type="password" value="*******" className={fieldStyle} />
                        <span onClick={handleShow} className={editButtonClass} style={editPosition}>Change</span>
                    </div>
                </div>
                <h5 className="f16-size text-black font-bolder mt-4 pb-3 border-bottom">Professional Info</h5>
                <div className="pr-data-fields mt-3">
                    <label className="f12-size text-grey font-bold">Company</label>
                    <div className="position-relative">
                        <input type="text" value="Brandable" className={fieldStyle} />
                        <span className={editButtonClass} style={editPosition}>edit</span>
                    </div>  
                </div>
                <div className="pr-data-fields mt-3">
                <div className="position-relative">
                        <input type="text" value="Marketing Director" className={fieldStyle} />
                        <span className={editButtonClass} style={editPosition}>edit</span>
                    </div>  
                </div>
            </Col>
            <Modal centered id="profileModal" show={show} onHide={handleClose}>
                <Modal.Header style={{ borderBottom: "0" }}>
                    <Modal.Title className="text-center w-100 font-bold f20-size mt-3">Change Your Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="field-float-group">
                        <div className="input-group-float">
                            <input type="password" type="password" autocomplete="off" className="w-100 px-3" required />
                            <label className="px-2">Old Password</label>
                        </div>
                        <div className="text-end mt-2">
                            <Link to="#" className="text-blue f12-size text-decoration-underline">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="input-group-float mt-2">
                            <input type="password" type="password" autocomplete="off"  className="w-100 px-3" required />
                            <label className="px-2">New Password</label>
                        </div>
                        <div className="input-group-float mt-4">
                            <input type="password" type="password" autocomplete="off"  className="w-100 px-3" required />
                            <label className="px-2">Confirm Password</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center pb-4" style={{ borderTop: "0" }}>
                    <Button type="button" className="auth-btn border-0 bg-light-blue text-white" 
                        style={{height:"55px"}} onClick={handleClose}>
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}
export default ProfileForm