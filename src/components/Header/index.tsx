import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
const Header: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (


    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink>
                <Link to={"/"}>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to={"/formulario"}>Cadastra</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to={"/lista"}>Lista de Matriculados</Link>
              </NavLink>
            </NavItem>
            
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
    //         <div>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Features</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Pricing</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    //         </div>
  )
}

export default Header;