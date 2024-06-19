import React from 'react';
import './Skin.css';

const Skin = ({ nome, funcao, img }) => {
  return (
    <div className="skin">
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <p>{funcao}</p>
    </div>
  );
};

export default Skin;
