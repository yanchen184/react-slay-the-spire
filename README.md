# React Slay the Spire
[![Deploy to GitHub Pages](https://github.com/yanchen184/react-slay-the-spire/actions/workflows/deploy.yml/badge.svg)](https://github.com/yanchen184/react-slay-the-spire/actions/workflows/deploy.yml)

基於《殺戮尖塔》(Slay the Spire) 的卡牌遊戲，使用 React 開發。這是一個結合了卡牌構築和 Roguelike 元素的回合制戰鬥遊戲。

## 版本信息

當前版本：**v0.2.0**

### 更新日誌

- **v0.2.0**：添加卡牌雙擊功能，解決卡牌點擊反應問題
- **v0.1.0**：初始版本，基本遊戲功能

## 在線演示

🎮 [開始遊戲](https://yanchen184.github.io/react-slay-the-spire/)

## 遊戲介紹

在這款遊戲中，你需要:
- 選擇一個角色（鐵甲戰士、沉默獵手或故障機器人）
- 使用卡牌戰鬥並擊敗敵人
- 在戰鬥中獲得新的卡牌來強化你的牌組
- 管理資源（生命值和能量）
- 做出策略選擇，打造強大的卡牌組合

## 功能特點

- 角色選擇系統
- 回合制戰鬥
- 卡牌系統（攻擊牌、技能牌、能力牌）
- **雙擊卡牌使用**（避免誤觸）
- 能量管理
- 敵人 AI
- 戰鬥日誌
- 多種遊戲結果（勝利/失敗）

## 操作說明

- **選擇角色**：點擊角色卡片
- **使用卡牌**：雙擊卡牌（需要足夠的能量）
- **結束回合**：點擊「結束回合」按鈕

## 技術棧

- React.js
- JavaScript (ES6+)
- CSS3
- GitHub Actions (CI/CD)
- GitHub Pages (部署)

## 開發指南

### 安裝與運行

克隆倉庫：
```
git clone https://github.com/yanchen184/react-slay-the-spire.git
cd react-slay-the-spire
```

安裝依賴：
```
npm install
```

本地運行：
```
npm start
```

構建生產版本：
```
npm run build
```

部署至 GitHub Pages：
```
npm run deploy
```

## 項目結構

```
/src
  /components          # UI 組件
    /screens           # 主要遊戲屏幕
    /combat            # 戰鬥相關組件
  /contexts            # React 上下文和狀態管理
  /data                # 遊戲數據
  /utils               # 實用工具函數
  App.js               # 應用程序主入口
  index.js             # React 入口點
```

## 遊戲設計

### 角色

- **鐵甲戰士**：專注於攻擊和力量增益，擁有較高的生命值
- **沉默獵手**：專注於靈巧和毒素技能，擅長多種戰術
- **故障機器人**：使用獨特的元素球體和能量操控

### 卡牌

卡牌分為三種類型：
- **攻擊牌**：造成傷害
- **技能牌**：提供格擋、抽牌等效果
- **能力牌**：提供持續增益效果

卡牌稀有度分為：
- 基礎
- 普通
- 稀有
- 罕見

## 致謝

靈感來源於 Mega Crit Games 開發的《殺戮尖塔》(Slay the Spire)。

## 許可證

MIT License