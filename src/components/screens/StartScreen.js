import React, { useState } from 'react';
import { useGameContext } from '../../contexts/GameContext';
import { charactersData } from '../../data/characters';
import './StartScreen.css';

const StartScreen = () => {
  const { selectCharacter, startGame, selectedCharacterId } = useGameContext();
  const [selectedChar, setSelectedChar] = useState(selectedCharacterId);

  const handleCharacterSelect = (charId) => {
    setSelectedChar(charId);
    selectCharacter(charId);
  };

  const handleStartGame = () => {
    if (selectedChar) {
      startGame();
    }
  };

  return (
    <div className="start-screen">
      <div className="title-container">
        <h2 className="title">選擇你的角色</h2>
      </div>
      
      <div className="characters-container">
        {charactersData.map((character) => (
          <div
            key={character.id}
            className={`character-card ${selectedChar === character.id ? 'selected' : ''}`}
            onClick={() => handleCharacterSelect(character.id)}
          >
            <div className="character-image">
              {/* 暫時使用顏色框代替圖片 */}
              <div 
                className="character-placeholder"
                style={{ 
                  backgroundColor: 
                    character.id === 'ironclad' ? '#e74c3c' :
                    character.id === 'silent' ? '#2ecc71' : '#3498db'
                }}
              >
                {character.name.substring(0, 1)}
              </div>
            </div>
            <div className="character-info">
              <h3>{character.name}</h3>
              <p className="health">生命: {character.maxHealth}</p>
              <p className="description">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button
        className={`start-button ${!selectedChar ? 'disabled' : ''}`}
        onClick={handleStartGame}
        disabled={!selectedChar}
      >
        開始冒險
      </button>
    </div>
  );
};

export default StartScreen;
