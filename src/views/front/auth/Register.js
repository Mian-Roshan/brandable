import React, {useState} from 'react';
import '../../../assets/css/auth/Auth.css';
import Footer from './widgets/Footer';
import Header from './widgets/Header';
import Button from 'react-bootstrap/Button';
import RegisterStep from './widgets/RegisterStep';
import {
    Logo,
    BannerAuth,
    Checkmark
} from "../components/AllImages";
import {Link} from 'react-router-dom';
const bannerStyle = {
    background:`url(${BannerAuth})`,
    backgroundSize:"cover"
}
function Register() {
    const [formShow, setDisplay] = useState(false);
    return (
        <React.Fragment>
            <div className="position-relative overlay-black
                position-relative bg-slide-anim" style={bannerStyle}>
                <div className="position-relative px-md-5 px-3 py-4 d-flex flex-column h-100 justify-content-between flex-wrap">
                    <Header image={Logo} />
                    <div className="col-md-8 my-5 col-lg-7 col-12 col-xl-6 align-self-start mx-auto">
                        {!formShow?
                        <div className="bg-white py-5 rounded-form">
                            <div className="w-100">
                                <h5 className="form-header mb-0 text-start px-md-5 px-3">Get started with Brandable</h5>
                                <div className="sub-heading-form mt-2 text-start f13-size px-md-5 px-3 mb-4">
                                    <p className="mb-0">Sign up to discover the full power of brands</p>
                                </div>
                                <div className="list-benifits">
                                    <ul className="list-unstyled">
                                        <li className="mt-2 px-md-5 px-3 bg-grey-light py-3">
                                            <img src={Checkmark} className="me-3" width="30px" alt="checkmark" />
                                            <span className="font-medium f14-size">Always Free</span>
                                        </li>
                                        <li className="mt-2 px-md-5 px-3 bg-white py-3">
                                            <img src={Checkmark} className="me-3" width="30px" alt="checkmark" />
                                            <span className="font-medium f14-size">Manage design assets in one place</span>
                                        </li>
                                        <li className="mt-2 px-md-5 px-3 bg-grey-light py-3">
                                            <img src={Checkmark} className="me-3" width="30px" alt="checkmark" />
                                            <span className="font-medium f14-size">Scale your brand on demand</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <Button type="Button" onClick={(()=>setDisplay(true))} className="auth-btn border-0 bg-light-blue text-white">
                                    Sign Up with Email
                                </Button>
                            </div>
                            <div className="gotoRegister mt-3 text-center f13-size">
                                <p className="mb-0 font-medium">Already have an account? 
                                   <Link to="/" className="text-primary font-medium">Log in</Link>
                                </p>
                            </div>
                        </div>
                        : <RegisterStep /> }
                    </div>
                    <Footer />
                </div>    
            </div>    
        </React.Fragment>
    )
}

export default Register
