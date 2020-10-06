import React from 'react';
import './styles/Home.styl';
import back from '../assets/images/back4.jpg';

const Home = () => (
  <section className="home">
    <img src={back} alt="" />
    <div className="content">
      <h1 className="home__title">
        Crea una lista con tus <strong>rolonas</strong> favoritas
      </h1>
      <div className="home__btns">
        <h3>Crea tu lista</h3>
        <button className="home__btns-create">Crear</button>
        <h3>Observa las listas ya creadas</h3>
        <button className="home__btns-watch">Ver listas</button>
      </div>
    </div>
  </section>
);

export default Home;
