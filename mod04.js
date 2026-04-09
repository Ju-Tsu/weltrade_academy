// ─── Module 04: Your First Trade ─────────────────────────────────────────────
window.WT_MODULES = window.WT_MODULES || [];

window.WT_MODULES.push({
  id: "mod_04",
  title: "Your First Trade",
  totalXP: 300,
  badge: { icon: "🚀", name: "First Trader" },
  cta: {
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod04_card_last_demo_cta"
    },
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod04_complete_register_cta"
      // Самый практический модуль — юзер видел интерфейс платформы
      // и психологически готов к реальному счёту
    }
  },
  cards: [
    {
      tag: "Step 1",
      icon: "🔍",
      accent: "#6C63FF",
      title: "Pick your pair",
      body: "Start with EUR/USD or GBP/USD — the most liquid pairs, lowest spreads, predictable behaviour. Avoid exotic pairs until you have 50+ trades of experience. Boring is profitable.",
    },
    {
      tag: "Step 2",
      icon: "📋",
      accent: "#FFB830",
      title: "Check the bigger trend",
      body: "Open the D1 (daily) chart first. Is price in an uptrend or downtrend? Only trade in the direction of the daily trend. This single habit doubles your win rate vs random entries.",
    },
    {
      tag: "Step 3",
      icon: "📍",
      accent: "#FF6B6B",
      title: "Find your entry",
      body: "Drop to H1. Look for price near a support level in an uptrend (or resistance in a downtrend). Wait for a green candle to close above the level. That's your entry signal.",
    },
    {
      tag: "Step 4",
      icon: "🛡️",
      accent: "#00C896",
      title: "Set your SL and TP",
      body: "Place stop-loss just below the support level — if it breaks, you're wrong. Set take-profit at 2× your stop distance. Click Buy. Your trade is now managed automatically.",
    },
    {
      tag: "Step 5",
      icon: "⏳",
      accent: "#A78BFA",
      title: "Now do nothing",
      body: "The hardest part of trading is waiting. Don't move your stop-loss. Don't close early. Let price hit your TP or SL. Interfering with open trades is the #1 mistake beginners make.",
    },
    {
      tag: "Ready?",
      icon: "🏁",
      accent: "#00C896",
      title: "You have a trading process",
      body: "Pick pair → check daily trend → find entry on H1 → set SL/TP → wait. That's a complete trading process. Repeat it 20 times on demo before going live.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "Why should beginners start with EUR/USD instead of exotic pairs?",
      options: [
        { text: "Exotic pairs have lower spreads", correct: false },
        { text: "EUR/USD has higher liquidity and lower spreads", correct: true },
        { text: "EUR/USD always goes up", correct: false },
        { text: "Exotic pairs are only for institutions", correct: false },
      ],
      explanation: "High liquidity = tight spreads = less cost per trade. EUR/USD is the most traded pair in the world — ideal for learning."
    },
    {
      question: "You're in an uptrend on D1. On H1 you see price pull back to support. What should you look for?",
      options: [
        { text: "A red candle closing below support — go short", correct: false },
        { text: "A green candle closing above support — go long", correct: true },
        { text: "Switch to M1 for a faster signal", correct: false },
        { text: "Wait for the daily candle to close first", correct: false },
      ],
      explanation: "Trading with the trend + entry at support = high probability setup. A confirming green candle reduces false entries."
    },
    {
      question: "Your trade is open and moving in your favour. You feel tempted to move the stop-loss further away to avoid being stopped out. What should you do?",
      options: [
        { text: "Move it — more room means less risk", correct: false },
        { text: "Close the trade manually to lock in profit", correct: false },
        { text: "Do nothing — respect your original plan", correct: true },
        { text: "Add to the position while it's winning", correct: false },
      ],
      explanation: "Moving a stop-loss further away increases risk. Your original plan was set without emotion. Trust the process — let TP or SL decide."
    },
  ]
});
