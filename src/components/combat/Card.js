import React from 'react';
import { CARD_RARITY, CARD_TYPE } from '../../data/cards';
import './Card.css';

const Card = ({ card, onClick, disabled }) => {
  // 卡牌類型背景顏色
  const getCardTypeColor = () => {
    switch (card.type) {
      case 'attack':
        return 'var(--health-color)';
      case 'skill':
        return 'var(--block-color)';
      case 'power':
        return '#9b59b6';
      default:
        return '#7f8c8d';
    }
  };
  
  // 卡牌稀有度邊框顏色
  const getRarityBorderColor = () => {
    switch (card.rarity) {
      case 'basic':
        return '#bdc3c7';
      case 'common':
        return '#3498db';
      case 'uncommon':
        return '#2ecc71';
      case 'rare':
        return '#f1c40f';
      default:
        return '#bdc3c7';
    }
  };
  
  // 能量顯示
  const renderEnergyCost = () => {
    return (
      <div className="card-energy">
        {card.energy}
      </div>
    );
  };

  return (
    <div 
      className={`card ${card.type} ${disabled ? 'disabled' : ''}`}
      onClick={disabled ? null : onClick}
      style={{
        backgroundColor: getCardTypeColor(),
        borderColor: getRarityBorderColor()
      }}
    >
      <div className="card-header">
        <h3 className="card-name">{card.name}</h3>
        {renderEnergyCost()}
      </div>
      
      <div className="card-body">
        <div className="card-type">
          {CARD_TYPE[card.type]} • {CARD_RARITY[card.rarity]}
        </div>
        <div className="card-description">
          {card.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
