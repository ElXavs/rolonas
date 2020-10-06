import React from 'react';
import '../assets/styles/Home.styl';

const Home = () => (
  <section className="home">
    <h1 className="home__title">
      Crea una lista con tus <strong>rolonas</strong>
    </h1>
    <div className="home__btns">
      <h3>Crea tu lista</h3>
      <button className="home__btns-create">Crear</button>
      <h3>Observa las listas ya creadas</h3>
      <button className="home__btns-watch">Ver listas</button>
    </div>
  </section>
);

export default Home;
