import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../imagenes/logo.png"
import "./Nav.css"



const Menu = () => {
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="menu" >
              <Navbar.Brand href="/" className="logo">
              <img className = "imagen-nav" src={logo} alt={"logo"} ></img>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-responsive"/>
              <Navbar.Collapse id="responsive-navbar-nav" className="opmenu">
                <Nav className="mr-auto">
                  <Nav.Link href="Artistas">Artistas</Nav.Link>
                  <Nav.Link href="Fechas">Fechas</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="Entradas">Entradas</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </header>
    );
}

export default Menu;