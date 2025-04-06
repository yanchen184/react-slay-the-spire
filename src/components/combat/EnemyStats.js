import React from 'react';
import HealthBar from './HealthBar';
import './EnemyStats.css';

const EnemyStats = ({ enemy }) => {
  if (!enemy) return null;

  // 渲染敵人意圖
  const renderIntent = () => {
    if (!enemy.intent) return null;

    let intentClass = '';
    let intentIcon = '';
    let intentText = '';

    switch (enemy.intent.type) {
      case 'attack':
        intentClass = 'attack';
        intentIcon = '⚔️';
        intentText = `攻擊 ${enemy.intent.value}`;
        break;
      case 'defend':
        intentClass = 'defend';
        intentIcon = '🛡️';
        intentText = `防禦 ${enemy.intent.value}`;
        break;
      case 'buff':
        intentClass = 'buff';
        intentIcon = '💪';
        intentText = '增益';
        break;
      default:
        intentClass = 'unknown';
        intentIcon = '❓';
        intentText = '未知';
    }

    return (
      <div className={`enemy-intent ${intentClass}`}>
        <div className="intent-icon">{intentIcon}</div>
        <div className="intent-text">{intentText}</div>
      </div>
    );
  };

  return (
    <div className="enemy-stats">
      <div className="enemy-info">
        <div className="enemy-avatar">
          {/* 使用敵人名稱首字母作為頭像 */}
          <div 
            className="avatar-placeholder"
            style={{ 
              backgroundColor: 
                enemy.difficulty === 'easy' ? '#3498db' :
                enemy.difficulty === 'elite' ? '#9b59b6' : '#e74c3c'
            }}
          >
            {enemy.name.substring(0, 1)}
          </div>
        </div>
        
        <div className="enemy-details">
          <div className="enemy-name-container">
            <h3 className="enemy-name">{enemy.name}</h3>
            {enemy.difficulty === 'elite' && <span className="enemy-tag elite">精英</span>}
            {enemy.difficulty === 'boss' && <span className="enemy-tag boss">BOSS</span>}
          </div>
          <HealthBar 
            currentHealth={enemy.currentHealth} 
            maxHealth={enemy.maxHealth} 
            entity="enemy"
          />
        </div>
      </div>
      
      <div className="enemy-status">
        {renderIntent()}
        
        {enemy.block > 0 && (
          <div className="status-effect block">
            <div className="effect-icon">🛡️</div>
            <span className="effect-value">{enemy.block}</span>
          </div>
        )}
        
        {/* 其他敵人狀態效果將在這裡添加 */}
      </div>
    </div>
  );
};

export default EnemyStats;
