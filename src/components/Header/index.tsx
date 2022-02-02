import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import { QuemChamouContext } from "../../hooks/global";
import { Container } from "./style";
const Header: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {quemChamou,setquemChamou} = useContext(QuemChamouContext)
  const toggle = () => setIsOpen(!isOpen);
  return (


    <Container>
      <Navbar
        style={{
          background: "#ffbb04"
        }}
        expand="md"
        light
      >
        <NavbarBrand href="/">
          <div>
            <img src={require("../../img/logo1.png")} alt="" />
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{float: "right"}}>
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <NavLink>
                <Link to={"/"}>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=> setquemChamou("CA")}>
              <Link to={"/formulario"}>Cadastra</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=> setquemChamou("ED")}>
              <Link to={"/lista"}>Lista de Matriculados</Link>
              </NavLink>
            </NavItem>
            
           
          </Nav>
         
        </Collapse>
      </Navbar>
    </Container>
   
  )
}

export default Header;