import React from 'react';
import './styles/Watch.styl';

import listCover from '../assets/images/listCover.png';
import backg from '../assets/images/back.jpg';
const menu = 'https://img.icons8.com/ios/50/000000/circled-chevron-down.png';
const back = 'https://img.icons8.com/ios/50/000000/circled-chevron-left.png';

const Watch = () => (
  <section className="watch">
    <img src={backg} className="backg" />
    <div className="content">
      <div className="back">
        <img src={back} />
        <p>Regresar</p>
      </div>
      <h1 className="watch__title">Listas disponibles</h1>
      <div className="watch__listItem">
        <div className="watch__listItem-img-container">
          <img className="watch__listItem-img" src={listCover} alt="" />
        </div>
        <div className="watch__listItem-content">
          <h3 className="watch__listItem-content-title">Nombre: Lo-fi Vibes</h3>
          <h4 className="watch__listItem-content-author">Autor: elxavs</h4>
        </div>
        <div className="watch__listItem-menu-container">
          <img className="watch__listItem-menu" src={menu} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Watch;
