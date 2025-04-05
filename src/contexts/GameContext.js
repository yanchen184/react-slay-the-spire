import React, { createContext, useContext, useReducer } from 'react';
import { charactersData } from '../data/characters';
import { cardsData } from '../data/cards';
import { enemiesData } from '../data/enemies';
import { v4 as uuidv4 } from 'uuid';

// 遊戲狀態
const GAME_STATE = {
  START: 'start',
  COMBAT: 'combat',
  GAME_OVER: 'game_over',
  VICTORY: 'victory'
};

// 行動類型
const ACTION_TYPES = {
  INIT_GAME: 'INIT_GAME',
  START_GAME: 'START_GAME',
  SELECT_CHARACTER: 'SELECT_CHARACTER',
  START_COMBAT: 'START_COMBAT',
  END_TURN: 'END_TURN',
  PLAYER_DRAW_CARD: 'PLAYER_DRAW_CARD',
  PLAY_CARD: 'PLAY_CARD',
  DISCARD_CARD: 'DISCARD_CARD',
  APPLY_CARD_EFFECT: 'APPLY_CARD_EFFECT',
  UPDATE_PLAYER: 'UPDATE_PLAYER',
  UPDATE_ENEMY: 'UPDATE_ENEMY',
  ENEMY_INTENT: 'ENEMY_INTENT',
  ENEMY_ACTION: 'ENEMY_ACTION',
  END_COMBAT: 'END_COMBAT',
  GAME_OVER: 'GAME_OVER',
  VICTORY: 'VICTORY'
};

// 初始狀態
const initialState = {
  gameState: GAME_STATE.START,
  player: null,
  selectedCharacterId: null,
  energy: 0,
  maxEnergy: 3,
  deck: [],
  hand: [],
  drawPile: [],
  discardPile: [],
  currentEnemy: null,
  turn: 0,
  isPlayerTurn: true,
  combatLog: []
};

// 遊戲reducer
const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT_GAME:
      return {
        ...initialState,
        gameState: GAME_STATE.START
      };
    
    case ACTION_TYPES.SELECT_CHARACTER:
      const selectedCharacter = charactersData.find(char => char.id === action.payload);
      return {
        ...state,
        selectedCharacterId: action.payload,
        player: {
          ...selectedCharacter,
          currentHealth: selectedCharacter.maxHealth,
          block: 0
        },
        deck: selectedCharacter.startingDeck.map(cardId => {
          const cardData = cardsData.find(card => card.id === cardId);
          return { ...cardData, instanceId: uuidv4() };
        })
      };
    
    case ACTION_TYPES.START_GAME:
      return {
        ...state,
        gameState: GAME_STATE.COMBAT,
        energy: state.maxEnergy,
        drawPile: [...state.deck],
        hand: [],
        discardPile: []
      };
    
    case ACTION_TYPES.START_COMBAT:
      // 隨機選擇一個敵人
      const randomEnemyIndex = Math.floor(Math.random() * enemiesData.length);
      const enemy = { ...enemiesData[randomEnemyIndex], block: 0 };
      
      // 洗牌
      const shuffledDeck = [...state.deck].sort(() => Math.random() - 0.5);
      
      return {
        ...state,
        gameState: GAME_STATE.COMBAT,
        currentEnemy: enemy,
        drawPile: shuffledDeck,
        hand: [],
        discardPile: [],
        energy: state.maxEnergy,
        turn: 1,
        isPlayerTurn: true,
        combatLog: [{ message: `戰鬥開始！對戰 ${enemy.name}`, timestamp: Date.now() }]
      };
    
    case ACTION_TYPES.PLAYER_DRAW_CARD:
      const drawCount = action.payload || 1;
      let newHand = [...state.hand];
      let newDrawPile = [...state.drawPile];
      let newDiscardPile = [...state.discardPile];
      
      // 抽牌邏輯
      for (let i = 0; i < drawCount; i++) {
        if (newDrawPile.length === 0) {
          // 如果抽牌堆為空，則將棄牌堆洗牌作為新的抽牌堆
          if (newDiscardPile.length === 0) break;
          newDrawPile = [...newDiscardPile].sort(() => Math.random() - 0.5);
          newDiscardPile = [];
        }
        
        if (newDrawPile.length > 0) {
          const drawnCard = newDrawPile.shift();
          newHand.push(drawnCard);
        }
      }
      
      return {
        ...state,
        hand: newHand,
        drawPile: newDrawPile,
        discardPile: newDiscardPile
      };
    
    case ACTION_TYPES.PLAY_CARD:
      const { card, targetId } = action.payload;
      
      // 移除打出的牌
      const updatedHand = state.hand.filter(c => c.instanceId !== card.instanceId);
      
      return {
        ...state,
        hand: updatedHand,
        energy: state.energy - card.energy,
        discardPile: [...state.discardPile, card],
        combatLog: [
          { message: `玩家使用了 ${card.name}`, timestamp: Date.now() },
          ...state.combatLog
        ]
      };
    
    case ACTION_TYPES.UPDATE_PLAYER:
      return {
        ...state,
        player: {
          ...state.player,
          ...action.payload
        }
      };
    
    case ACTION_TYPES.UPDATE_ENEMY:
      return {
        ...state,
        currentEnemy: {
          ...state.currentEnemy,
          ...action.payload
        }
      };
    
    case ACTION_TYPES.END_TURN:
      return {
        ...state,
        isPlayerTurn: false,
        hand: [],
        discardPile: [...state.discardPile, ...state.hand],
        combatLog: [
          { message: "玩家結束回合", timestamp: Date.now() },
          ...state.combatLog
        ]
      };
    
    case ACTION_TYPES.ENEMY_INTENT:
      const intentTypes = ['attack', 'defend', 'buff'];
      const randomIntentType = intentTypes[Math.floor(Math.random() * intentTypes.length)];
      let intentValue;
      
      switch (randomIntentType) {
        case 'attack':
          intentValue = Math.floor(state.currentEnemy.damage * (0.8 + Math.random() * 0.4));
          break;
        case 'defend':
          intentValue = Math.floor(5 + Math.random() * 5);
          break;
        default:
          intentValue = 0;
      }
      
      return {
        ...state,
        currentEnemy: {
          ...state.currentEnemy,
          intent: {
            type: randomIntentType,
            value: intentValue
          }
        }
      };
    
    case ACTION_TYPES.ENEMY_ACTION:
      const { intent } = state.currentEnemy;
      let updatedPlayer = { ...state.player };
      let updatedEnemy = { ...state.currentEnemy };
      let actionLog = '';
      
      switch (intent.type) {
        case 'attack':
          const damage = Math.max(0, intent.value - updatedPlayer.block);
          if (updatedPlayer.block > 0) {
            const blockAbsorbed = Math.min(updatedPlayer.block, intent.value);
            updatedPlayer.block -= blockAbsorbed;
            actionLog = `敵人攻擊造成 ${intent.value} 點傷害，${blockAbsorbed} 點被格擋，玩家受到 ${damage} 點傷害`;
          } else {
            actionLog = `敵人攻擊造成 ${damage} 點傷害`;
          }
          updatedPlayer.currentHealth = Math.max(0, updatedPlayer.currentHealth - damage);
          break;
        
        case 'defend':
          updatedEnemy.block += intent.value;
          actionLog = `敵人獲得 ${intent.value} 點格擋`;
          break;
        
        case 'buff':
          actionLog = `敵人使用了增益效果`;
          break;
        
        default:
          actionLog = `敵人什麽都沒做`;
      }
      
      // 檢查玩家是否死亡
      if (updatedPlayer.currentHealth <= 0) {
        return {
          ...state,
          player: updatedPlayer,
          currentEnemy: updatedEnemy,
          isPlayerTurn: false,
          combatLog: [
            { message: actionLog, timestamp: Date.now() },
            ...state.combatLog
          ],
          gameState: GAME_STATE.GAME_OVER
        };
      }
      
      return {
        ...state,
        player: updatedPlayer,
        currentEnemy: updatedEnemy,
        isPlayerTurn: true,
        energy: state.maxEnergy,
        turn: state.turn + 1,
        combatLog: [
          { message: actionLog, timestamp: Date.now() },
          ...state.combatLog
        ]
      };
    
    case ACTION_TYPES.GAME_OVER:
      return {
        ...state,
        gameState: GAME_STATE.GAME_OVER
      };
    
    case ACTION_TYPES.VICTORY:
      return {
        ...state,
        gameState: GAME_STATE.VICTORY,
        combatLog: [
          { message: `戰鬥勝利！擊敗了 ${state.currentEnemy.name}`, timestamp: Date.now() },
          ...state.combatLog
        ]
      };
    
    default:
      return state;
  }
};

// 創建遊戲上下文
const GameContext = createContext();

// 遊戲提供者組件
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  // 初始化遊戲
  const initGame = () => {
    dispatch({ type: ACTION_TYPES.INIT_GAME });
  };
  
  // 選擇角色
  const selectCharacter = (characterId) => {
    dispatch({ type: ACTION_TYPES.SELECT_CHARACTER, payload: characterId });
  };
  
  // 開始遊戲
  const startGame = () => {
    dispatch({ type: ACTION_TYPES.START_GAME });
    dispatch({ type: ACTION_TYPES.START_COMBAT });
    // 設置敵人意圖
    dispatch({ type: ACTION_TYPES.ENEMY_INTENT });
    // 抽初始手牌(5張)
    dispatch({ type: ACTION_TYPES.PLAYER_DRAW_CARD, payload: 5 });
  };
  
  // 打出卡牌
  const playCard = (card, targetId) => {
    if (state.energy < card.energy) return;
    
    dispatch({ type: ACTION_TYPES.PLAY_CARD, payload: { card, targetId } });
    
    // 處理卡牌效果
    let updatedPlayer = { ...state.player };
    let updatedEnemy = { ...state.currentEnemy };
    
    switch (card.type) {
      case 'attack':
        // 攻擊邏輯
        const damage = Math.max(0, card.value - updatedEnemy.block);
        if (updatedEnemy.block > 0) {
          updatedEnemy.block = Math.max(0, updatedEnemy.block - card.value);
        }
        updatedEnemy.currentHealth = Math.max(0, updatedEnemy.currentHealth - damage);
        dispatch({ type: ACTION_TYPES.UPDATE_ENEMY, payload: updatedEnemy });
        
        // 檢查敵人是否被擊敗
        if (updatedEnemy.currentHealth <= 0) {
          dispatch({ type: ACTION_TYPES.VICTORY });
        }
        break;
      
      case 'skill':
        // 技能邏輯
        if (card.effect === 'block') {
          updatedPlayer.block += card.value;
          dispatch({ type: ACTION_TYPES.UPDATE_PLAYER, payload: updatedPlayer });
        }
        break;
      
      case 'power':
        // 能力邏輯
        break;
      
      default:
        break;
    }
  };
  
  // 結束回合
  const endTurn = () => {
    dispatch({ type: ACTION_TYPES.END_TURN });
    
    // 敵人行動
    setTimeout(() => {
      dispatch({ type: ACTION_TYPES.ENEMY_ACTION });
      
      // 敵人回合結束後抽牌
      setTimeout(() => {
        dispatch({ type: ACTION_TYPES.ENEMY_INTENT });
        dispatch({ type: ACTION_TYPES.PLAYER_DRAW_CARD, payload: 5 });
      }, 500);
    }, 1000);
  };
  
  // 重新開始遊戲
  const restartGame = () => {
    initGame();
  };
  
  return (
    <GameContext.Provider
      value={{
        ...state,
        initGame,
        selectCharacter,
        startGame,
        playCard,
        endTurn,
        restartGame,
        ACTION_TYPES,
        GAME_STATE
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// 自訂Hook，方便使用遊戲上下文
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
