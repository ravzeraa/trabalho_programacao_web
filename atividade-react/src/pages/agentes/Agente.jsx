import React from "react";
import Agente from "./agente-atribuicao.jsx";
import "./Agente.css";

const agentes = [
  { nome: "Gekko", funcao: "Iniciador", img: "src/assets/gekko1.png" },
  { nome: "Chamber", funcao: "Sentinela", img: "src/assets/chamber.png" },
  { nome: "Clove", funcao: "Controlador", img: "src/assets/clove.png" },
  { nome: "Raze", funcao: "Duelista", img: "src/assets/raze.png" },
];

const Agentes = () => {
  return (
    <div className="agentes">
      <h1>Agentes</h1>
      {agentes.map((agente, index) => (
        <Agente key={index} {...agente} />
      ))}
    </div>
  );
};

export default Agentes;
