import React from 'react';
import Card from './Card';
import './Hand.css';

const Hand = ({ cards, onCardPlay, energy }) => {
  if (!cards || cards.length === 0) {
    return <div className="empty-hand">沒有手牌</div>;
  }

  return (
    <div className="hand">
      {cards.map((card, index) => (
        <div 
          key={card.instanceId || `${card.id}-${index}`}
          className="card-container"
          style={{
            transform: `rotate(${-10 + (index * (20 / (cards.length - 1 || 1)))}deg)`,
            zIndex: index
          }}
        >
          <Card 
            card={card} 
            onClick={() => onCardPlay(card)} 
            disabled={energy < card.energy}
          />
        </div>
      ))}
    </div>
  );
};

export default Hand;
