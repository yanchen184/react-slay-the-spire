import React from 'react';
import { useGameContext } from '../../contexts/GameContext';
import PlayerStats from '../combat/PlayerStats';
import EnemyStats from '../combat/EnemyStats';
import Hand from '../combat/Hand';
import CombatLog from '../combat/CombatLog';
import EndTurnButton from '../combat/EndTurnButton';
import EnergyDisplay from '../combat/EnergyDisplay';
import './CombatScreen.css';

const CombatScreen = () => {
  const { 
    player, 
    currentEnemy, 
    hand, 
    energy, 
    maxEnergy,
    isPlayerTurn, 
    combatLog,
    playCard,
    endTurn
  } = useGameContext();

  // 確保數據載入
  if (!player || !currentEnemy) {
    return <div className="loading">載入戰鬥中...</div>;
  }

  // 處理卡牌點擊
  const handleCardPlay = (card) => {
    // 如果不是玩家回合或能量不足，則不能打出卡牌
    if (!isPlayerTurn || energy < card.value) return;
    
    // 確定目標 (對於攻擊牌是敵人，對於技能牌是自己)
    const targetId = card.target === 'enemy' ? currentEnemy.id : player.id;
    playCard(card, targetId);
  };

  // 處理結束回合
  const handleEndTurn = () => {
    if (isPlayerTurn) {
      endTurn();
    }
  };

  return (
    <div className="combat-screen">
      <div className="combat-header">
        <div className="turn-info">
          <span className="turn-label">當前回合: </span>
          <span className="turn-value">{isPlayerTurn ? '玩家' : '敵人'}</span>
        </div>
        <EnergyDisplay energy={energy} maxEnergy={maxEnergy} />
      </div>

      <div className="battlefield">
        <div className="player-area">
          <PlayerStats player={player} />
        </div>
        
        <div className="enemy-area">
          <EnemyStats enemy={currentEnemy} />
        </div>
      </div>
      
      <div className="combat-footer">
        <div className="log-container">
          <CombatLog log={combatLog} />
        </div>
        
        <div className="hand-container">
          <Hand cards={hand} onCardPlay={handleCardPlay} energy={energy} />
        </div>
        
        <div className="actions-container">
          <EndTurnButton onClick={handleEndTurn} disabled={!isPlayerTurn} />
        </div>
      </div>
    </div>
  );
};

export default CombatScreen;
