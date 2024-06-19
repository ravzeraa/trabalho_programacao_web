import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Carrossel.css';

const Carrossel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const card = [
        { id: 1, image: './src/assets/skins.png', alt: 'Skins', link: '/skin' },
        { id: 2, image: './src/assets/gekko.png', alt: 'Agentes', link: '/agente' },
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? card.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === card.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <div className="card-grid" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {card.map((card, index) => (
                    <div key={card.id} className="card">
                        <Link to={card.link}>
                            <img src={card.image} alt={card.alt} />
                        </Link>
                        {children && <div className="card-title">{children[index]}</div>}
                    </div>
                ))}
            </div>
            <div className='button-carrossel'>
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Carrossel;
