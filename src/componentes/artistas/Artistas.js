import React, { Component } from "react";
import api from "../api.json"
import "./Artistas.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

{api.djs.map((item, i) => (
    <tr key={i}>
        <td>{item.nombre}</td>
        <td>{item.fecha}</td>
    </tr>
))}

export class artistas extends Component {
    render() {
        return (
            <>
            
                    <div className="caja">
                    <Container >
                <Row>
                    
{api.djs.map((item, i) =>(
    <Col  sm={6}>
    <div key={i} className="contenido"> 
    <h2>{item.nombre}</h2>
        <p>{item.fecha}</p>
        <p>{item.hora}</p>
    <div><img src={item.imagen} alt={item.nombre} className="imagen-art"></img></div>
    </div>
    </Col>
    ))}

                </Row>
            </Container>
                </div>

            </>
        );
    }
}

export default artistas;



