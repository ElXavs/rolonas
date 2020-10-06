import React from 'react';
import './styles/Watch.styl';

const listCover = '../assets/images/listCover.png';
const menu = '../assets/images/3dots.png';
const back = '../assets/images/chevronLeft.png';

const Watch = () => (
  <section className="watch">
    <div className="back">
      <img src={back} alt="" />
      <p>Regresar</p>
    </div>
    <h1 className="watch__title">Listas disponibles</h1>
    <div className="watch__listItem">
      <div className="watch__listItem-img-container">
        <img className="watch__listItem-img" src={listCover} alt="" />
      </div>
      <h3 className="watch__listItem-title">Lo-fi Vibes</h3>
      <h4 className="watch__listItem-author">elxavs</h4>
      <img className="watch__listItem-menu" src={menu} alt="" />
    </div>
  </section>
);

export default Watch;
