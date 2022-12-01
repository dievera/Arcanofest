import React, { Component } from "react";
import api from "../dos.json"
import "./Fechas.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


{api.djs.map((item, i) => (
    <tr key={i}>
        <td>{item.nombre}</td>
    </tr>
    
))}


export class Dos extends Component {
    
    render() {
       
        return (
            <>
                    <div className="caja">
                    <Container >
                <Row>
                    
{api.djs.map((item, i) =>(
    <Col  sm={6}>
    <div key={i} className="contenido"> 
    <h2>{item.nombre} </h2>
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

export default Dos;