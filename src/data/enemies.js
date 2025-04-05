/**
 * Enemy data for the game
 * Each enemy has unique stats and abilities
 */
export const enemiesData = [
  // 第一層敵人
  {
    id: 'jaw_worm',
    name: '顎蟲',
    description: '通過拱動顎部來恐嚇獵物。',
    maxHealth: 42,
    currentHealth: 42,
    damage: 11,
    image: '/assets/enemies/jaw_worm.png',
    actions: ['attack', 'defend', 'buff'],
    difficulty: 'easy'
  },
  {
    id: 'cultist',
    name: '邪教徒',
    description: '崇拜古老存在的狂熱信徒。',
    maxHealth: 48,
    currentHealth: 48,
    damage: 8,
    image: '/assets/enemies/cultist.png',
    actions: ['attack', 'ritual'],
    difficulty: 'easy'
  },
  {
    id: 'louse',
    name: '蝨虫',
    description: '通過偽裝來保護自己的大型寄生蟲。',
    maxHealth: 44,
    currentHealth: 44,
    damage: 10,
    image: '/assets/enemies/louse.png',
    actions: ['attack', 'defend', 'spit_web'],
    difficulty: 'easy'
  },
  {
    id: 'slime',
    name: '黏液',
    description: '由不明物質組成的生物。',
    maxHealth: 46,
    currentHealth: 46,
    damage: 9,
    image: '/assets/enemies/slime.png',
    actions: ['attack', 'split'],
    difficulty: 'easy'
  },
  
  // 精英敵人
  {
    id: 'gremlin_nob',
    name: '哥布林頭目',
    description: '最強大的哥布林。通過野蠻的力量統治著哥布林群體。',
    maxHealth: 85,
    currentHealth: 85,
    damage: 15,
    image: '/assets/enemies/gremlin_nob.png',
    actions: ['attack', 'bellow'],
    difficulty: 'elite'
  },
  {
    id: 'lagavulin',
    name: '拉格烏林',
    description: '休眠中的甲蟲，會在受到足夠騷擾後醒來。',
    maxHealth: 110,
    currentHealth: 110,
    damage: 18,
    image: '/assets/enemies/lagavulin.png',
    actions: ['attack', 'metallicize', 'debuff'],
    difficulty: 'elite'
  },
  
  // BOSS
  {
    id: 'hexaghost',
    name: '六火亡靈',
    description: '千年前被封印的靈體，它由6個火焰核心組成。',
    maxHealth: 250,
    currentHealth: 250,
    damage: 12,
    image: '/assets/enemies/hexaghost.png',
    actions: ['attack', 'inferno', 'activate'],
    difficulty: 'boss'
  },
  {
    id: 'slime_boss',
    name: '黏液首領',
    description: '由數百個黏液組成的龐大生物。',
    maxHealth: 140,
    currentHealth: 140,
    damage: 16,
    image: '/assets/enemies/slime_boss.png',
    actions: ['attack', 'split_big', 'prepare'],
    difficulty: 'boss'
  },
  {
    id: 'guardian',
    name: '守護者',
    description: '古老的守衛機器，保護高塔不受入侵者打擾。',
    maxHealth: 220,
    currentHealth: 220,
    damage: 12,
    image: '/assets/enemies/guardian.png',
    actions: ['attack', 'defensive_mode', 'charging'],
    difficulty: 'boss'
  }
];

// 敵人難度映射
export const ENEMY_DIFFICULTY = {
  easy: '普通',
  elite: '精英',
  boss: 'BOSS'
};
