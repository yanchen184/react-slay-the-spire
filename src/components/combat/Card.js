import React, { useState } from 'react';
import { CARD_RARITY, CARD_TYPE } from '../../data/cards';
import './Card.css';

const Card = ({ card, onClick, disabled }) => {
  const [lastClickTime, setLastClickTime] = useState(0);
  
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

  // 處理雙擊事件
  const handleClick = () => {
    if (disabled) return;
    
    const now = new Date().getTime();
    const timeDiff = now - lastClickTime;
    
    // 如果是雙擊 (時間差小於 300ms)
    if (timeDiff < 300 && timeDiff > 0) {
      onClick();
    }
    
    setLastClickTime(now);
  };

  return (
    <div 
      className={`card ${card.type} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
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