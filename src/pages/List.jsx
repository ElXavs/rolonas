import React from 'react';
import ListItem from '../components/ListItem';
import './styles/List.styl';
import backg from '../assets/images/back3.jpg';
const back = 'https://img.icons8.com/ios/50/000000/circled-chevron-left.png';

const List = () => (
  <section className="list">
    <img src={backg} className="backg" />
    <div className="content">
      <div className="back">
        <img src={back} alt="" />
        <p>Regresar</p>
      </div>
      <header className="list__header">
        <h1>Lo-fi Vibes - elxavs</h1>
      </header>
      <div className="list__items">
        <ListItem />
      </div>
    </div>
  </section>
);

export default List;
