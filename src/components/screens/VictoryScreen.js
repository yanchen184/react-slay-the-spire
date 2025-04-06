import React from 'react';
import { useGameContext } from '../../contexts/GameContext';
import './ResultScreen.css';

const VictoryScreen = () => {
  const { player, currentEnemy, restartGame } = useGameContext();

  return (
    <div className="result-screen victory">
      <h2 className="result-title">勝利！</h2>
      
      <div className="result-summary">
        <p className="result-message">你擊敗了 {currentEnemy.name}！</p>
        <div className="character-stats">
          <div className="stat-row">
            <span className="stat-label">你的生命值:</span>
            <span className="stat-value">{player.currentHealth} / {player.maxHealth}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">敵人生命值:</span>
            <span className="stat-value">0 / {currentEnemy.maxHealth}</span>
          </div>
        </div>
      </div>
      
      <div className="rewards-section">
        <h3 className="rewards-title">獎勵</h3>
        <div className="rewards-list">
          <div className="reward-item">
            <div className="reward-icon gold"></div>
            <span className="reward-description">25 金幣</span>
          </div>
          <div className="reward-item">
            <div className="reward-icon card"></div>
            <span className="reward-description">獲得新卡牌</span>
          </div>
        </div>
      </div>
      
      <button className="continue-button" onClick={restartGame}>
        繼續冒險
      </button>
    </div>
  );
};

export default VictoryScreen;
