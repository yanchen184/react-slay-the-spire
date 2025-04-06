import React from 'react';
import HealthBar from './HealthBar';
import './PlayerStats.css';

const PlayerStats = ({ player }) => {
  if (!player) return null;

  return (
    <div className="player-stats">
      <div className="player-info">
        <div className="player-avatar">
          {/* 使用角色首字母作為頭像 */}
          <div 
            className="avatar-placeholder"
            style={{ 
              backgroundColor: 
                player.id === 'ironclad' ? '#e74c3c' :
                player.id === 'silent' ? '#2ecc71' : '#3498db'
            }}
          >
            {player.name.substring(0, 1)}
          </div>
        </div>
        
        <div className="player-details">
          <h3 className="player-name">{player.name}</h3>
          <HealthBar 
            currentHealth={player.currentHealth} 
            maxHealth={player.maxHealth} 
            entity="player"
          />
        </div>
      </div>
      
      <div className="player-status-effects">
        {player.block > 0 && (
          <div className="status-effect block">
            <div className="effect-icon">🛡️</div>
            <span className="effect-value">{player.block}</span>
          </div>
        )}
        
        {/* 其他狀態效果將在這裡添加 */}
      </div>
    </div>
  );
};

export default PlayerStats;
