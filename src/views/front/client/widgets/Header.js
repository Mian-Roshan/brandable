import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Plus , Bell } from 'react-bootstrap-icons/';
import {NavLink, Link} from 'react-router-dom';
import {
  Logo,Profile
} from "../../components/AllImages";
function Header() {
  const ClassesLink = "font-semi text-black f14-size nav-link";
  return (
    <React.Fragment>
      <Navbar bg="white" expand="lg" className="px-5 nav-shadow-bottom">
        <Container fluid>
          <Navbar.Brand>
            <Link className="text-decoration-none text-black d-flex align-items-center" to="/client/dashboard">
              <img  src={Logo} width="40"  className="d-inline-block align-top me-3" alt="Brandable" />
              <span class="font-bolder">Brandable</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="brandable-nav" />
          <Navbar.Collapse id="brandable-nav">
            <Nav>
              <NavLink activeClassName="active"  to="/client/dashboard" className={ClassesLink}>My Assets</NavLink>
              <NavLink activeClassName="active"  to="/client/myKit" className={ClassesLink}>Brand Kit</NavLink>
              <NavLink activeClassName="active"  to="/client/myProjects" className={ClassesLink}>My Project</NavLink>
              <NavLink activeClassName="active"  to="/client/NewProjects" className={ClassesLink}>Analytics</NavLink>
            </Nav>
            <div className="right-nav-content ms-auto">
              <div className="right-content-btn d-flex align-items-center flex-wrap">
                <div className="me-3">
                  <Link to="/client/newProject" className="bg-brand-blue d-flex align-items-center
                    text-white btn f14-size btn-round-10 text-decoration-none">
                    <Plus color="#fff" size={25}  />
                       New Project
                  </Link>
                </div>
                <div className="notify-bell me-3">
                  <Bell size={20}></Bell>
                </div>
                <div class="user-avatar">
                  <img src={Profile} className="rounded-circle" width="40px" height="40px" /> 
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}
export default Header;
