import React from "react";
import Skin from "./skin-atribuicao.jsx";
import "./Skin.css";

const skins = [
  { nome: "Saqueadora", funcao: "Vandal", img: "src/assets/saqueadora.png" },
  { nome: "Sublime", funcao: "Vandal", img: "src/assets/sublime.png" },
  { nome: "Floreterea", funcao: "Phantom", img: "src/assets/floreterea.png" },
  { nome: "Dragao", funcao: "Operator", img: "src/assets/dragao.png" },
];

const Skins = () => {
  return (
    <div className="skins">
      <h1>Skins</h1>
      {skins.map((skin, index) => (
        <Skin key={index} {...skin} />
      ))}
    </div>
  );
};

export default Skins;
