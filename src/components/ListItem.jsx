import React from 'react';
const menu = '../assets/images/3dots.png';
const song = '../assets/images/lovely.png';

const ListItem = () => (
  <div className="listItem">
    <img src={song} alt="" />
    <div className="listItem__content">
      <h3>Titulo: Isn't She Lovely</h3>
      <h4>Album: Jazz Standards</h4>
      <h4>Artista: Milos Foreman</h4>
    </div>
    <img className="watch__listItem-menu" src={menu} alt="" />
  </div>
);

export default ListItem;
