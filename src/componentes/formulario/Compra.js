import React from "react";
import './Formulario.css'
import Formulario from './Formulario'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const Compra = () => {

    
    return(

        <article className="compra">
            
            <h1>finalizar</h1>
            <Form>
                <h4>Opciones de pago</h4>
                <Container>
      <Row className="entradas">
        <Col sm><h3>Modo de pago</h3>
      <select name="Ubicacion" component="select" >
        <option>Seleccionar</option>
        <option>Efectivo</option>
        <option>Mercado Pago</option>
        <option>Tarjeta</option>
        <option>Debito</option>
     </select></Col>
    
        <Col sm><h3>Cuotas</h3>
     <select name="Ticket" component="select" >
        <option>Seleccionar</option>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="12">12</option>
     </select></Col>
      </Row>
      <Row className="datospersonales">
        <Col sm>
          <h4>Nombre tarjeta</h4>
          <label>
        </label>
        <input
          type="text"
          
        /></Col>
        <Col sm><h4>Numero tarjeta</h4><label></label>
        <input
          type="num"
          
        /></Col>
        <Col sm><h4>Vencimiento</h4><label></label>
        <input
          type="num"
          
        /></Col>
      </Row>
      </Container>
      <div className="boton">
        <Link to="/entradas" relative="path">
            <button type="submit" > Volver </button>
        </Link>
        <button type="submit" > Finalizar compra </button>
      </div>
    </Form>

        </article>
        
    );
}

export default Compra;