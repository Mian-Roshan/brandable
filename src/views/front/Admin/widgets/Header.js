import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Plus , Bell } from 'react-bootstrap-icons/';
import {NavLink, Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import {
  Logo,Profile
} from "../../components/AllImages";
function Header() {
  const ClassesLink = "font-semi text-black f14-size nav-link";
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
              {/* <NavLink activeClassName="active"  to="/admin/myProjects" className={ClassesLink}>My Projects</NavLink>
              <NavLink activeClassName="active"  to="/admin/myKit" className={ClassesLink}>My Kit</NavLink>
              <NavLink activeClassName="active"  to="/admin/myAssets" className={ClassesLink}>My Assets</NavLink> */}

              <NavLink activeClassName="active"  to="/admin/myProjects" className={ClassesLink}>Home</NavLink>
              <NavLink activeClassName="active"  to="/admin/myProjects" className={ClassesLink}>Projects</NavLink>
              <NavLink activeClassName="active"  to="/admin/myAssets" className={ClassesLink}>Assets</NavLink>
              <NavLink activeClassName="active"  to="/admin/templates" className={ClassesLink}>Templates</NavLink>
              <NavLink activeClassName="active"  to="/admin/myKit" className={ClassesLink}>Brand Kit</NavLink>
              <NavLink activeClassName="active" to="/admin/analytics" className={ClassesLink}>Analytics</NavLink>
            </Nav>
            <div className="right-nav-content ms-auto">
              <div className="right-content-btn d-flex align-items-center flex-wrap">
                <div className="me-3">
                  <Link to="/admin/newProject" className="bg-brand-blue d-flex align-items-center
                    text-white btn f14-size btn-round-10 text-decoration-none">
                    <Plus color="#fff" size={25}  />
                      New Project
                  </Link>
                </div>
                <div className="notify-bell me-3">
                  <Link to="/client/notifications" className="text-black">
                    <Bell size={20}></Bell>
                  </Link>  
                </div>
                <Dropdown className="no-icon custiom-dropdown">
                  <Dropdown.Toggle  variant="none"  className="py-0">
                    <div className="user-avatar">
                      <img src={Profile} className="rounded-circle" width="40px" height="40px" /> 
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{right:"0"}}>
                    <div className="dropdown-item">
                      <Link to="/client/settings" className="text-decoration-none text-black f14-size font-bolder">Settings</Link>
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
