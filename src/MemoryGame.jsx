import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  useEffect(() => {
    const shuffledCards = [...images, ...images]
      .map((image, index) => ({ id: index, image, isFlipped: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, [images]);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index)) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex].image === cards[secondIndex].image) {
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
      }

      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${
            flippedIndices.includes(index) || matchedIndices.includes(index)
              ? "flipped"
              : ""
          }`}
          onClick={() => handleCardClick(index)}
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={`images/${card.image}`} alt={`Card ${index}`} />
            </div>
            <div className="card-back">
              <div className="placeholder"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
