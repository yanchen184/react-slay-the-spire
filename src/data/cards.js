/**
 * Card data for the game
 * Cards are divided into three types: Attack, Skill, and Power
 */
export const cardsData = [
  // 基礎牌 - 共用
  {
    id: 'strike',
    name: '打擊',
    type: 'attack',
    rarity: 'basic',
    energy: 1,
    value: 6,
    description: '造成 6 點傷害。',
    image: '/assets/cards/strike.png',
    target: 'enemy'
  },
  {
    id: 'defend',
    name: '防禦',
    type: 'skill',
    rarity: 'basic',
    energy: 1,
    value: 5,
    description: '獲得 5 點格擋。',
    image: '/assets/cards/defend.png',
    target: 'self',
    effect: 'block'
  },
  
  // 鐵甲戰士牌
  {
    id: 'bash',
    name: '重擊',
    type: 'attack',
    rarity: 'basic',
    energy: 2,
    value: 8,
    description: '造成 8 點傷害。給予目標 2 層易傷。',
    image: '/assets/cards/bash.png',
    target: 'enemy',
    effect: 'vulnerable',
    effectValue: 2
  },
  {
    id: 'anger',
    name: '憤怒',
    type: 'attack',
    rarity: 'common',
    energy: 0,
    value: 4,
    description: '造成 4 點傷害。將該牌的一張複製加入你的棄牌堆。',
    image: '/assets/cards/anger.png',
    target: 'enemy',
    effect: 'copy'
  },
  {
    id: 'bodyslam',
    name: '肉體撞擊',
    type: 'attack',
    rarity: 'common',
    energy: 1,
    value: 0,
    description: '造成等同於你當前格擋值的傷害。',
    image: '/assets/cards/bodyslam.png',
    target: 'enemy',
    effect: 'dynamic',
    dynamicStat: 'block'
  },
  {
    id: 'inflame',
    name: '憤怒',
    type: 'power',
    rarity: 'uncommon',
    energy: 2,
    description: '獲得 2 點力量。',
    image: '/assets/cards/inflame.png',
    target: 'self',
    effect: 'strength',
    effectValue: 2
  },
  
  // 沉默獵手牌
  {
    id: 'neutralize',
    name: '制敵',
    type: 'attack',
    rarity: 'basic',
    energy: 0,
    value: 3,
    description: '造成 3 點傷害。給予目標 1 層虛弱。',
    image: '/assets/cards/neutralize.png',
    target: 'enemy',
    effect: 'weak',
    effectValue: 1
  },
  {
    id: 'poisonedstab',
    name: '帶毒匕首',
    type: 'attack',
    rarity: 'common',
    energy: 1,
    value: 5,
    description: '造成 5 點傷害。給予目標 3 層中毒。',
    image: '/assets/cards/poisonedstab.png',
    target: 'enemy',
    effect: 'poison',
    effectValue: 3
  },
  {
    id: 'dodge',
    name: '閃躲',
    type: 'skill',
    rarity: 'uncommon',
    energy: 1,
    value: 8,
    description: '獲得 8 點格擋。下回合抽 1 張牌。',
    image: '/assets/cards/dodge.png',
    target: 'self',
    effect: 'block',
    secondaryEffect: 'draw',
    secondaryValue: 1
  },
  
  // 故障機器人牌
  {
    id: 'zap',
    name: '電擊',
    type: 'skill',
    rarity: 'basic',
    energy: 1,
    description: '生成 1 個閃電球。',
    image: '/assets/cards/zap.png',
    target: 'self',
    effect: 'channel',
    effectValue: 'lightning'
  },
  {
    id: 'dualcast',
    name: '二重施法',
    type: 'skill',
    rarity: 'basic',
    energy: 1,
    description: '釋放你最右側的充能球 2 次。',
    image: '/assets/cards/dualcast.png',
    target: 'self',
    effect: 'evoke',
    effectValue: 2
  },
  {
    id: 'ballLightning',
    name: '球形閃電',
    type: 'attack',
    rarity: 'uncommon',
    energy: 1,
    value: 7,
    description: '造成 7 點傷害。生成 1 個閃電球。',
    image: '/assets/cards/balllightning.png',
    target: 'enemy',
    effect: 'channel',
    effectValue: 'lightning'
  }
];

// 卡牌稀有度映射
export const CARD_RARITY = {
  basic: '基礎',
  common: '普通',
  uncommon: '稀有',
  rare: '罕見'
};

// 卡牌類型映射
export const CARD_TYPE = {
  attack: '攻擊',
  skill: '技能',
  power: '能力'
};
