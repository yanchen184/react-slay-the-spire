/**
 * Character data for the game
 * Each character has unique stats and starting deck
 */
export const charactersData = [
  {
    id: 'ironclad',
    name: '鐵甲戰士',
    description: '曾是偉大的戰士，以靈魂交換不朽的力量。擅長力量型卡牌。',
    maxHealth: 80,
    image: '/assets/characters/ironclad.png',
    startingDeck: [
      'strike', 'strike', 'strike', 'strike', 'strike',  // 5張打擊
      'defend', 'defend', 'defend', 'defend',  // 4張防禦
      'bash'  // 1張特殊起始牌
    ]
  },
  {
    id: 'silent',
    name: '沉默獵手',
    description: '使用暗器、毒素與幻術的冷酷獵手。擅長靈巧與毒性技能。',
    maxHealth: 70,
    image: '/assets/characters/silent.png',
    startingDeck: [
      'strike', 'strike', 'strike', 'strike', 'strike', // 5張打擊
      'defend', 'defend', 'defend', 'defend', 'defend', // 5張防禦
      'neutralize'  // 1張特殊起始牌
    ]
  },
  {
    id: 'defect',
    name: '故障機器人',
    description: '曾是為高塔服務的自動機器，現在已脫離編程獨立思考。擅長元素球體與能量操控。',
    maxHealth: 75,
    image: '/assets/characters/defect.png',
    startingDeck: [
      'strike', 'strike', 'strike', 'strike', // 4張打擊
      'defend', 'defend', 'defend', 'defend', // 4張防禦
      'zap', 'dualcast' // 2張特殊起始牌
    ]
  }
];
