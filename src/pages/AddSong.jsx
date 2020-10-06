import React from 'react';
import './styles/AddSong.styl';
const back = 'https://img.icons8.com/ios/50/000000/circled-chevron-left.png';

const AddSong = () => {
  <section className="addSong">
    <div className="back">
      <img src={back} alt="" />
      <p>Regresar</p>
    </div>
    <form className="addSong__form">
      <div className="form-group">
        <label>Titulo de la canción</label>
        <input className="form-control" type="email" name="email" />
      </div>
      <div className="form-group">
        <label>Nombre del artista</label>
        <input className="form-control" type="text" name="Artista" />
      </div>
      <div className="form-group">
        <label>Album de procedencia</label>
        <input className="form-control" type="text" name="autor" />
      </div>
      <button className="addSong__btn">Añadir</button>
    </form>
  </section>;
};

export default AddSong;
