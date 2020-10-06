import React from 'react';
import './styles/CreateList.styl';
import backg from '../assets/images/back2.jpg';
const back = 'https://img.icons8.com/ios/50/000000/circled-chevron-left.png';

const CreateList = () => (
  <section className="createList">
    <img src={backg} className="backg" />
    <div className="content">
      <div className="back">
        <img src={back} alt="" />
        <p>Regresar</p>
      </div>
      <h1>Crea tu lista</h1>
      <form className="createList__form">
        <div className="name-group">
          <label>Nombre de la lista</label>
          <input className="form-control" type="text" name="Nombre de lista" />
        </div>
        <div className="author-group">
          <label>Autor de la lista</label>
          <input className="form-control" type="text" name="Autor" />
        </div>

        <button className="createList__btn">Crear</button>
      </form>
    </div>
  </section>
);

export default CreateList;
