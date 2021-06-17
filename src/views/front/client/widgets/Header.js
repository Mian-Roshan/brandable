import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Plus, Bell } from 'react-bootstrap-icons/';
import { NavLink, Link , useHistory } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import {
  Logo, Profile,
  createTheme,
  hirePerson
} from "../../components/AllImages";
function Header() {
  const ClassesLink = "font-semi text-black f14-size nav-link",
   DropdownStyle={
    border: "3px solid #376DF9",
    boxShadow:"3px 3px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    right:"0"
   }
  const history = useHistory();
  function PagePara(name){
    localStorage.setItem('namePara',name)
    history.push('/client/newProject')
  }
  return (
    <React.Fragment>
      <Navbar bg="white" expand="lg" className="px-5 nav-shadow-bottom">
        <Container fluid>
          <Navbar.Brand className="mr-4">
            <Link className="text-decoration-none text-black d-flex align-items-center" to="/client/myAssets">
              <img src={Logo} height="40px" className="d-inline-block align-top me-3" alt="Brandable" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="brandable-nav" />
          <Navbar.Collapse id="brandable-nav">
            <Nav>
              <NavLink activeClassName="active"  to="/client/home" className={ClassesLink}>Home</NavLink>
              <NavLink activeClassName="active"  to="/client/myProjects" className={ClassesLink}>Projects</NavLink>
              <NavLink activeClassName="active"  to="/client/myAssets" className={ClassesLink}>Assets</NavLink>
              <NavLink activeClassName="active"  to="/client/templates" className={ClassesLink}>Templates</NavLink>
              <NavLink activeClassName="active"  to="/client/myKit" className={ClassesLink}>Brand Kit</NavLink>
              <NavLink activeClassName="active" to="/client/analytics" className={ClassesLink}>Analytics</NavLink>
            </Nav>
            <div className="right-nav-content ms-auto">
              <div className="right-content-btn d-flex align-items-center flex-wrap">
                <div className="me-3">
                  <Dropdown className="no-icon custiom-dropdown dropdown-hover-item">
                    <Dropdown.Toggle variant="none" className="py-0">
                      <div className="bg-brand-blue d-flex align-items-center
                        text-white btn f14-size btn-round-10 text-decoration-none">
                        <Plus color="#fff" size={25} />
                        New Project
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={DropdownStyle}>
                      <div className="dropdown-item bg-white px-2">
                        <button  className="text-decoration-none 
                            border-0 bg-transparent d-block text-black f14-size font-bolder"
                            onClick={() => {
                            PagePara('template');
                          }}>
                          <span className="me-2">
                            <img src={createTheme} width="50px" />
                          </span>
                          Create from template
                        </button>
                      </div>
                      <div className="dropdown-item bg-white px-2">
                        <button to="/client/newProject" className="text-decoration-none d-block 
                          border-0 bg-transparent text-black f14-size font-bolder"
                          onClick={() => {
                            PagePara('designer');
                          }}>
                          <span className="me-2">
                            <img src={hirePerson} width="50px" />
                          </span>
                          Hire a Designer
                        </button>
                      </div>  
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="notify-bell me-3">
                  <Link to="/client/notifications" className="text-black">
                    <Bell size={20}></Bell>
                  </Link>
                </div>
                <Dropdown className="no-icon custiom-dropdown">
                  <Dropdown.Toggle variant="none" className="py-0">
                    <div className="user-avatar">
                      <img src={Profile} className="rounded-circle" width="40px" height="40px" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ right: "0" }}>
                    <div className="dropdown-item py-0">
                      <Link to="/client/settings" className="text-decoration-none text-black f14-size font-bolder py-2 d-block">Settings</Link>
                    </div>
                    <div className="dropdown-item py-0">
                      <Link to="/client/plans" className="text-decoration-none text-black f14-size font-bolder py-2 d-block">Upgrade Plan</Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}
export default Header;
