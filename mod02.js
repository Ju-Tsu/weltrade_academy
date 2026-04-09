// ─── Module 02: Reading Charts ────────────────────────────────────────────────
window.WT_MODULES = window.WT_MODULES || [];

window.WT_MODULES.push({
  id: "mod_02",
  title: "Reading Charts",
  totalXP: 200,
  badge: { icon: "📐", name: "Chart Reader" },
  cta: {
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod02_card_last_demo_cta"
    },
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod02_complete_register_cta"
    }
  },
  cards: [
    {
      tag: "Candles",
      icon: "🕯️",
      accent: "#FF6B6B",
      title: "What is a candlestick?",
      body: "Every candle shows 4 prices for a time period: Open, High, Low, Close. A green candle means price went up. A red candle means price went down. This is the language of every trader.",
    },
    {
      tag: "Levels",
      icon: "📐",
      accent: "#FFB830",
      title: "Support and resistance",
      body: "Support is a price level where buyers keep stepping in — the floor. Resistance is where sellers appear — the ceiling. Price bounces between them until it breaks out.",
      stat: { value: "S / R", label: "most-used concept in technical analysis" }
    },
    {
      tag: "Trend",
      icon: "📈",
      accent: "#00C896",
      title: "Trend is your friend",
      body: "An uptrend = higher highs and higher lows. A downtrend = lower highs and lower lows. Trading with the trend is safer than fighting it — most beginners lose by trading against it.",
    },
    {
      tag: "Timeframes",
      icon: "⏱️",
      accent: "#6C63FF",
      title: "Which timeframe to use?",
      body: "H1 and H4 are best for beginners — enough detail without noise. M1 and M5 move too fast. D1 is great for spotting the bigger trend before you enter a trade.",
    },
    {
      tag: "Volume",
      icon: "📊",
      accent: "#A78BFA",
      title: "Volume confirms moves",
      body: "A price breakout with high volume is real. A breakout with low volume often fakes out and reverses. Always check volume before entering on a breakout.",
    },
    {
      tag: "Ready?",
      icon: "🏁",
      accent: "#00C896",
      title: "You can now read a chart",
      body: "Candles, trends, support/resistance, volume — these four concepts cover 80% of what retail traders use every day. Open a demo chart and spot them yourself.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "A green candlestick means the price...",
      options: [
        { text: "Closed higher than it opened", correct: true },
        { text: "Closed lower than it opened", correct: false },
        { text: "Didn't move during the period", correct: false },
        { text: "Hit a new all-time high", correct: false },
      ],
      explanation: "Green = close > open. The candle body shows the open-to-close range. The wicks show the high and low."
    },
    {
      question: "Price bounces off the same level three times without breaking it. This level is most likely...",
      options: [
        { text: "A trend line", correct: false },
        { text: "A support or resistance level", correct: true },
        { text: "A volume spike", correct: false },
        { text: "A timeframe boundary", correct: false },
      ],
      explanation: "The more times price respects a level, the stronger it is. Three touches make it a confirmed S/R zone."
    },
    {
      question: "You see a breakout above resistance. Volume is very low. What should you do?",
      options: [
        { text: "Enter immediately — breakout confirmed", correct: false },
        { text: "Wait — low volume breakouts often reverse", correct: true },
        { text: "Switch to a lower timeframe", correct: false },
        { text: "Look for a downtrend signal", correct: false },
      ],
      explanation: "Volume validates breakouts. Low volume = weak conviction. High probability of a fakeout back below resistance."
    },
  ]
});
