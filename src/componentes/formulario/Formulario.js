import React, { useState } from "react";
import './Formulario.css'
import { NavLink } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Home from '../home/Home';
import Artistas from '../artistas/Artistas';
import Compra from './Compra';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






const Prueba = () => {
  const [name, setName] = useState({ firstname: "" });
  const [last, setLast] = useState({ lastname: "" });
  const [ubi, setUbi] = useState({ ubicacion: "" });
  const [dia, setDia] = useState({ fecha: "" });
  const [ticket, setTicket] = useState({ entradas: "" });
  const [mail, setMail] = useState({ email: "" });
  return (
    <>
    <article className="caja">
    <h1 className="titulo">Entradas</h1>
      <form>
      <Container>
      <Row className="entradas">
        <Col sm><h3>Ubicacion</h3>
      <select name="Ubicacion" component="select" value={ubi.ubicacion} type="text"
          onChange={(e) => setUbi({ ubicacion: e.target.value })}>
        <option>Seleccionar</option>
        <option>$5000 - Campo</option>
        <option>$9000 - Tribuna</option>
        <option>$15000 - VIP</option>
     </select></Col>
     <Col sm><h3>Fecha</h3>
      <select name="Fecha" component="select" value={dia.ubicacion} type="text"
          onChange={(e) => setDia({ fecha: e.target.value })}>
        <option>Seleccionar</option>
        <option >01 de diciembre</option>
        <option >08 de diciembre</option>
     </select></Col>
        <Col sm><h3>Cantidad</h3>
     <select name="Ticket" component="select" value={ticket.entradas} type="text"
          onChange={(e) => setTicket({ entradas: e.target.value })}>
        <option>Seleccionar</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
     </select></Col>
      </Row>
      <Row className="datospersonales">
        <Col sm>
          <h4>Nombre</h4>
          <label>
        </label>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ firstname: e.target.value })}
        /></Col>
        <Col sm><h4>Apellido</h4><label></label>
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setLast({ lastname: e.target.value })}
        /></Col>
        <Col sm><h4>E-mail</h4><label></label>
        <input
          type="text"
          value={mail.email}
          onChange={(e) => setMail({ email: e.target.value })}
        /></Col>
      </Row>
    </Container>
        
        <div class="parent totalcont">
          <div class="div1"><p>Ubicación:</p></div>
          <div class="div2"><h4>{ubi.ubicacion}</h4></div>
          <div class="div3"><p>Fecha:</p></div>
          <div class="div4"><h4>{dia.fecha}</h4></div>
          <div class="div5"><p>Cantidad:</p></div>
          <div class="div6"><h4>{ticket.entradas}</h4></div>
          <div class="div7"><p>Nombre:</p></div>
          <div class="div8"><h4>{name.firstname}</h4></div>
          <div class="div9"><p>Apellido:</p></div>
          <div class="div10"><h4>{last.lastname}</h4></div>
          <div class="div11"><p>E-mail:</p></div>
          <div class="div12"><h4>{mail.email}</h4></div>
        </div>
        <div className="boton">
          <button type="submit"> Reiniciar </button>
          <Link to="/compra" relative="path">
          <button type="submit" > Siguiente </button>
          </Link>
          <Link to=".." relative="path">
          <button type="submit" > Cancelar </button>
          </Link>
        </div>
      </form>
      </article>
    </>
  );
};

export default Prueba;