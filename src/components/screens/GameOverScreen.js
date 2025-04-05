import React from 'react';
import { useGameContext } from '../../contexts/GameContext';
import './ResultScreen.css';

const GameOverScreen = () => {
  const { player, currentEnemy, restartGame } = useGameContext();

  return (
    <div className="result-screen game-over">
      <h2 className="result-title">遊戲結束</h2>
      
      <div className="result-summary">
        <p className="result-message">你被 {currentEnemy.name} 擊敗了！</p>
        <div className="character-stats">
          <div className="stat-row">
            <span className="stat-label">你的生命值:</span>
            <span className="stat-value">0 / {player.maxHealth}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">敵人生命值:</span>
            <span className="stat-value">{currentEnemy.currentHealth} / {currentEnemy.maxHealth}</span>
          </div>
        </div>
      </div>
      
      <button className="restart-button" onClick={restartGame}>
        重新開始
      </button>
    </div>
  );
};

export default GameOverScreen;
