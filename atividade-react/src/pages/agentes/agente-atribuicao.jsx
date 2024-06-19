import React from 'react';
import './Agente.css';

const Agente = ({ nome, funcao, img }) => {
  return (
    <div className="agente">
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <p>{funcao}</p>
    </div>
  );
};

export default Agente;
