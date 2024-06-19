import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="button-container">
      <h1>BEM-VINDO AO <span className={isRed ? "red" : ""}>VALORANT</span>!</h1>
      <button onClick={handleClick}>✦ACE✦</button>
    </div>
  );
};

export default Button;
