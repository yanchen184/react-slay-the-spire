import React from 'react';
import './EndTurnButton.css';

const EndTurnButton = ({ onClick, disabled }) => {
  return (
    <button 
      className={`end-turn-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      結束回合
    </button>
  );
};

export default EndTurnButton;
