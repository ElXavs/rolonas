import React from 'react';
import ListItem from '../components/ListItem';
import './styles/List.styl';
const back = '../assets/images/chevronLeft.png';

const List = () => (
  <section className="list">
    <div className="back">
      <img src={back} alt="" />
      <p>Regresar</p>
    </div>
    <header className="list__header">
      <h1>Lo-fi Vibes</h1>
      <h1>By elxavs</h1>
    </header>
    <div className="list__items">
      <ListItem />
    </div>
  </section>
);

export default List;
