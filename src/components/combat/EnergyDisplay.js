import React from 'react';
import './EnergyDisplay.css';

const EnergyDisplay = ({ energy, maxEnergy }) => {
  // 生成能量球
  const energyOrbs = [];
  
  for (let i = 0; i < maxEnergy; i++) {
    const isFilled = i < energy;
    energyOrbs.push(
      <div 
        key={i} 
        className={`energy-orb ${isFilled ? 'filled' : 'empty'}`}
      >
        {isFilled ? '⚡' : '○'}
      </div>
    );
  }
  
  return (
    <div className="energy-display">
      <div className="energy-orbs">
        {energyOrbs}
      </div>
      <div className="energy-text">
        {energy} / {maxEnergy} 能量
      </div>
    </div>
  );
};

export default EnergyDisplay;
