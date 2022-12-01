import React from 'react';
import "./App.css";
import "./componentes/navbar/Navbar.css";
import Home from './componentes/home/Home';
import Footer from './componentes/footer/Footer';
import Fechas from './componentes/fechas/Fechas';
import Nav from './componentes/nav/Nav';
import Artistas, { artistas } from './componentes/artistas/Artistas'
import Formulario from './componentes/formulario/Formulario'
import Compra from './componentes/formulario/Compra'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './componentes/navbar/Navbar';
import logo from "./componentes/imagenes/logo.png"



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artistas" element={<Artistas />}/>
        <Route path="fechas" element={<Fechas />}/>
        <Route path="Entradas" element={<Formulario />}/>
        <Route path="Compra" element={<Compra />}/>
        </Routes>
    <Footer/>
      </div>
    </Router>
  );
}

export default App;