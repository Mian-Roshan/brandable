function Header(props) {
    return (
        <div className="col-12 align-self-start">
            <div className="d-flex flex-wrap">
                <a href="#" className="text-decoration-none topBar-brand d-flex align-items-center">
                    <img src={props.image} className="me-3" height="50px" alt="Brandable" />
                    {/* <span className="brand-name font-bolderall align-self-center text-white">Brandable</span> */}
                </a>
                <div className="home-btn align-self-end ms-5">
                    <a href="#" className="text-white d-flex b4radius align-items-center text-decoration-none px-3 py-2 transparent-bg-black">
                        <i className="ri-home-4-line me-2 f-19-size"></i> <span>Home</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
