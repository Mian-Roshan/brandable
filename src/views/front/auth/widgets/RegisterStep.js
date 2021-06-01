import React from 'react'
import Button from 'react-bootstrap/Button';
import SocialLogin from './SocialLogin';
import {Link} from 'react-router-dom';
function RegisterStep() {
    return (
        <React.Fragment>
            <div className="bg-white px-md-5 px-3 py-5 rounded-form">
                <form action="" method="" autocomplete="on">
                    <h5 className="form-header mb-0 font-bolder text-center" style={{fontSize:"25px"}}>Sign Up!</h5>
                    <div className="px-3">
                        <div className="border-custom mt-4 br-radius6">
                            <div className="radiobtn-group">
                                <ul className="list-inline list-unstyled d-flex mb-0 radio-ele-list">
                                    <li className="list-inline-item col-4 text-center">
                                        <input className="d-none" type="radio" id="res1"  name="register_for" required />
                                        <label className="px-3 py-2" for="res1">
                                            Client
                                        </label>
                                    </li>
                                    <li className="list-inline-item col-4 text-center">
                                        <input className="d-none" id="res2" type="radio" name="register_for" required />
                                        <label className="px-3 py-2" for="res2">
                                            Designer
                                        </label>
                                    </li>
                                    <li className="list-inline-item col-4 text-center">
                                        <input id="res3" className="d-none" type="radio" name="register_for" required />
                                        <label for="res3" className="px-3 py-2">
                                            Admin
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="field-float-group">
                        <div className="input-group-float mt-4">
                            <input type="email" className="w-100 px-3" autocomplete="off" readonly required />
                            <label className="px-2">Email</label>
                        </div>
                        <div className="input-group-float mt-4">
                            <input type="password" type="password" autocomplete="off" readonly className="w-100 px-3" required />
                            <label className="px-2">Password</label>
                        </div>
                        <div className="input-group-float mt-4">
                            <input type="password" type="password" autocomplete="off" readonly className="w-100 px-3" required />
                            <label className="px-2">Confirm Password</label>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Button type="submit" className="auth-btn border-0 bg-light-blue text-white">
                           Signup
                        </Button>
                    </div>
                    <div className="gotoRegister mt-3 text-center f13-size">
                        <p className="mb-0 font-medium">Already have an account? <Link to="/"
                        className="text-primary font-medium">Log in</Link></p>
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
        </React.Fragment>
    )
}

export default RegisterStep
