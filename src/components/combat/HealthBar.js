import React from 'react';
import './HealthBar.css';

const HealthBar = ({ currentHealth, maxHealth, entity }) => {
  // 計算生命百分比
  const healthPercentage = Math.max(0, Math.min(100, (currentHealth / maxHealth) * 100));
  
  // 根據生命百分比確定顏色
  const getHealthColor = () => {
    if (healthPercentage <= 25) return 'low';
    if (healthPercentage <= 50) return 'medium';
    return 'high';
  };
  
  return (
    <div className={`health-bar ${entity}`}>
      <div className="health-info">
        <span className="health-text">{currentHealth} / {maxHealth}</span>
      </div>
      <div className="health-bar-container">
        <div 
          className={`health-bar-fill ${getHealthColor()}`} 
          style={{ width: `${healthPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HealthBar;
