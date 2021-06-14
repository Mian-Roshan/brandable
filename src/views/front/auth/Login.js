import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import '../../../assets/css/auth/Auth.css';
import '../../../assets/css/FloatField.css';
import {
    Logo,
    BannerAuth
} from "../components/AllImages";
import Button from 'react-bootstrap/Button';
import Footer from './widgets/Footer';
import SocialLogin from './widgets/SocialLogin';
import Header from './widgets/Header';
function Login() {
    const history = useHistory();
    const bannerStyle = {
        background:`url(${BannerAuth})`,
        backgroundSize:"cover"
    }
    const goNext = () =>{
      history.push('/client/myAssets');
    }
    return (
        <React.Fragment>
            <div className="position-relative overlay-black
               position-relative bg-slide-anim" style={bannerStyle}>
                <div className="position-relative px-md-5 px-3 py-4 d-flex flex-column h-100 justify-content-between flex-wrap">
                    <Header image={Logo} />
                    <div className="col-md-8 my-5 col-lg-7 col-12 col-xl-6 align-self-start mx-auto">
                        <div className="bg-white px-md-5 px-3 py-5 rounded-form">
                            <form action="" method="" autocomplete="on">
                                <h5 className="form-header mb-0 text-center">Log in to your account</h5>
                                <div className="field-float-group">
                                    <div className="input-group-float mt-4">
                                        <input type="email" className="w-100 px-3" autocomplete="off" readonly required />
                                        <label className="px-2">Email</label>
                                    </div>
                                    <div className="input-group-float mt-4">
                                        <input type="password" type="password" autocomplete="off" readonly className="w-100 px-3" required />
                                        <label className="px-2">Password</label>
                                    </div>
                                </div>
                                <div className="text-end mt-2">
                                    <Link to="#" className=" text-primary f12-size text-decoration-underline">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="text-center mt-3">
                                    <Button type="button" className="auth-btn border-0 bg-light-blue text-white" onClick={goNext}>
                                        Login
                                    </Button>
                                </div>
                                <div className="gotoRegister mt-3 text-center f13-size">
                                    <p className="mb-0 font-medium">Don't have an account? 
                                      <Link to="/register" className="text-primary font-medium"> Sign Up!</Link>
                                    </p>
                                </div>
                                <div className="seprator text-center">
                                    <p className="my-3 font-medium">OR</p>
                                    <hr />
                                </div>
                                <div className="d-flex w-100 flex-wrap other-options-login">
                                   <SocialLogin />
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
