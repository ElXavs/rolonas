import React from 'react';
import song from '../assets/images/lovely.png';
const menu = 'https://img.icons8.com/ios/50/000000/circled-chevron-down.png';

const ListItem = () => (
  <div className="list__listItem">
    <img src={song} className="list__listItem-img" />
    <div className="list__listItem-content">
      <h3>Titulo: Isn't She Lovely</h3>
      <h4>Album: Jazz Standards</h4>
      <h4>Artista: Milos Foreman</h4>
    </div>
    <div className="list__listItem-menu-container">
      <img className="list__listItem-menu" src={menu} alt="" />
    </div>
  </div>
);

export default ListItem;
