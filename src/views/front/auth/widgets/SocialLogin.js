import React from 'react'
import {
    Google,
    Apple,
    Facebook
} from "../../components/AllImages";
import {Link} from "react-router-dom";
function SocialLogin() {
    return (
        <ul className="list-unstyled w-100 list-inline text-center mb-0">
            <li className="list-inline-item mt-2 me-md-4 me-lg-5 me-3">
                <Link to="#" className="text-decoration-none">
                    <img src={Facebook} alt="Facebook" />
                </Link>
            </li>
            <li className="list-inline-item mt-2 me-md-4 me-lg-5 me-3">
                <Link to="#" className="text-decoration-none">
                    <img src={Google} alt="Google" />
                </Link>
            </li>
            <li className="list-inline-item mt-2">
                <Link to="#" className="text-decoration-none">
                    <img src={Apple} alt="Apple" />
                </Link>
            </li>
        </ul>
    )
}

export default SocialLogin
