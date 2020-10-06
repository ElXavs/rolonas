import React from 'react';
import '../assets/styles/AddSong.styl';
const back = '../assets/images/chevronLeft.png';

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
