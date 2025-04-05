import React, { useEffect } from 'react';
import { useGameContext } from './contexts/GameContext';
import StartScreen from './components/screens/StartScreen';
import CombatScreen from './components/screens/CombatScreen';
import GameOverScreen from './components/screens/GameOverScreen';
import VictoryScreen from './components/screens/VictoryScreen';
import './App.css';

// 遊戲狀態枚舉
const GAME_STATE = {
  START: 'start',
  COMBAT: 'combat',
  GAME_OVER: 'game_over',
  VICTORY: 'victory'
};

function App() {
  const { gameState, initGame } = useGameContext();
  
  // 初始化遊戲
  useEffect(() => {
    initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 根據不同的遊戲狀態渲染不同的畫面
  const renderGameScreen = () => {
    switch (gameState) {
      case GAME_STATE.START:
        return <StartScreen />;
      case GAME_STATE.COMBAT:
        return <CombatScreen />;
      case GAME_STATE.GAME_OVER:
        return <GameOverScreen />;
      case GAME_STATE.VICTORY:
        return <VictoryScreen />;
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Slay the Spire</h1>
        <span className="version">v0.1.0</span>
      </header>
      
      <main className="game-container">
        {renderGameScreen()}
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2025 | React Implementation of Slay the Spire | <a href="https://github.com/yanchen184/react-slay-the-spire" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;
