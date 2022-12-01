import React from "react";
import "./Footer.css"
import logo from "../imagenes/logo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";



const Footer = () => {
    return(
        <footer> 
        <div className="contenedor" sm>
            <div className="caja">
            <img className = "imagen-footer" src={logo} alt={"logo"} ></img>
            </div>
         </div>
         <div className="alineado">
         <a href="https://twitter.com" target="_blank" rel="noreferrer"><h4 className="iconos"><AiOutlineTwitter /></h4></a>
         <a href="https://facebook.com" target="_blank" rel="noreferrer"><h4 className="iconos"><AiFillFacebook /></h4></a>
         <a href="https://instagram.com" target="_blank" rel="noreferrer"><h4 className="iconos"><AiOutlineInstagram /></h4></a>
         <a href="https://youtube.com" target="_blank" rel="noreferrer"><h4 className="iconos"><AiFillYoutube /></h4></a>
         <a href="https://spotify.com" target="_blank" rel="noreferrer"><h4 className="iconos"><FaSpotify /></h4></a>
         </div>
         <Container>
      <Row className="texto-footer">
        <Col sm><h4>Av. España 2330, Buenos Aires</h4></Col>
        <Col sm><h4>Alumno: Diego Vera</h4></Col>
        <Col sm><h4>Curso: FullStack inicial</h4></Col>
      </Row>
    </Container>
         
        </footer>
    );
}


export default Footer;