import {
    Globe,
    Privacy,
} from "../../components/AllImages";
const Footer = () => {
    return(
    <footer className="w-100 auth-footer text-end">
        <ul className="list-inline list-unstyled mb-0">
            <li className="list-inline-item pe-4">
                <span className="me-2"><img src={Privacy} width="18px" alt="privacy" /></span>
                <a href="#" className="text-white text-decoration-none f14-size">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
                <div className="position-relative language_dropdown">
                    <select className="border-0 transparent-bg-black text-white py-2 ps-4 b4radius f14-size" id="language_dropdown">
                        <option>English (US)</option>
                        <option>French</option>
                    </select>
                    <img className="position-absolute" src={Globe} width="18px" alt="Globe" style={{left:"5px",top:"8px"}} />
                </div>
            </li>
        </ul>
    </footer>
    )
}
export default  Footer;