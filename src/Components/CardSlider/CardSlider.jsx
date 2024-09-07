import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardData = [
  { id: 1, title: "Pump.Fun Integrated Into DEXTools", description: "Track Pump Fun Tokens On DEXTools!", new: false },
  { id: 2, title: "10 Things You Should Never On DEXTools!", description: "Learn More Here!", new: true },
  { id: 3, title: "TOP TRADERS", description: "Track Smart Money And Early Buyers", new: false },
  { id: 4, title: "Tron Is Finally Here!", description: "Explore Tron On DEXTools Today.", new: false },
  { id: 5, title: "The Ultimate TRON Guide", description: "Everything You Need To Know To", new: false },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cardData.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (cardData.length - 3)) % (cardData.length - 3));
  };

  return (
    <div className="card-slider">
      <button className="nav-button prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <div className="card-viewport">
        <div 
          className="card-container" 
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {cardData.map((card) => (
            <div key={card.id} className="card">
              {card.new && <span className="new-badge">NEW</span>}
              <img src={`/api/placeholder/300/150?text=Image ${card.id}`} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>
      <style jsx>{`
        .card-slider {
          position: relative;
          width: 100%;
          height: 300px;
          background-color: #0f1723;
          padding: 20px 0;
          overflow: hidden;
        }
        .card-viewport {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .card-container {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }
        .card {
          flex: 0 0 calc(25% - 20px);
          margin: 0 10px;
          background-color: #1e2a3a;
          color: white;
          border-radius: 10px;
          padding: 10px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        .card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 5px;
        }
        .card h3 {
          font-size: 14px;
          margin: 10px 0 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card p {
          font-size: 12px;
          margin: 0;
          color: #a0a0a0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 10;
        }
        .prev { left: 10px; }
        .next { right: 10px; }
        .new-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #00b8d4;
          color: white;
          padding: 2px 6px;
          font-size: 10px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default CardSlider;