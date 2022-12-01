import React from "react";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import promo from "../imagenes/promo.png";
import Img1 from "../imagenes/2017.png";
import Img2 from "../imagenes/2018.png";
import Img3 from "../imagenes/2019.png";

import ReactPlayer from 'react-player';




const Home = () => {
    return(
    <article className="contenedor">
        <div className="promo">
                <h1>A   r   c   a   n   o</h1>
                <h2>Festival de musica electronica</h2>
        </div>
        <Carousel className="slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>2019</h3>
          <p>Más de 100 mil personas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>2018</h3>
          <p>Más de 100 mil personas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>2017</h3>
          <p>
          Más de 100 mil personas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=iwopRzkxCTU&ab_channel=SoundMix'
          className='react-player'
          
          width='100%'
          height='100%'
        />
      </div>
    </article>
    );}

export default Home;