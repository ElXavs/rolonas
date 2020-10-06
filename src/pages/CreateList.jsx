import React from 'react';
import './styles/CreateList.styl';
const back = '../assets/images/chevronLeft.png';

const CreateList = () => (
  <section className="createList">
    <div className="back">
      <img src={back} alt="" />
      <p>Regresar</p>
    </div>
    <form className="createList__form">
      <div className="form-group">
        <label>Nombre de la lista</label>
        <input className="form-control" type="text" name="Nombre de lista" />
      </div>
      <div className="form-group">
        <label>Autor de la lista</label>
        <input className="form-control" type="text" name="Autor" />
      </div>

      <button className="createList__btn">Crear</button>
    </form>
  </section>
);

export default CreateList;
