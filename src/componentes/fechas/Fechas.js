import React  from "react";
import "./Fechas.css";
import Uno from "./uno";
import Dos from "./dos";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Fechas = () => {
    return(
        <article className="Fechas">
            <h4>fechas</h4>
            <h1>O1 de diciembre</h1>
            <Uno/>
            <h1>O8 de diciembre</h1>
            <Dos/>
        </article>
    );}

export default Fechas;