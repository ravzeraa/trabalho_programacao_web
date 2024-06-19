import React, { useState } from "react";
import "./Home.css";
import Button from "../components/button-valorant/Button";
import Carrossel from "../components/carrossel/Carrossel";

const Home = () => {
  const [vejamais, setMessage] = useState("Veja mais das Skins e dos Agentes.");
  const titles = ['SKINS', 'AGENTES'];
  return (
    <div className="home-container">
      <div className="button-div">
        <Button />
      </div>
      <div className="state-div">
        <h2>{vejamais}</h2>
      </div>
      <div className="carrossel-div">
      <Carrossel>
                {titles.map((title, index) => (
                    <div key={index}>{title}</div>
                ))}
            </Carrossel>
      </div>
    </div>
  );
};

export default Home;
