// ─── Module 01: Intro to Markets ─────────────────────────────────────────────
// Чтобы добавить модуль — скопируй этот файл, смени id и заполни cards/quiz.
// engine.js подхватит его автоматически через window.WT_MODULES.

window.WT_MODULES = window.WT_MODULES || [];

window.WT_MODULES.push({
  id: "mod_01",
  title: "Intro to Markets",
  totalXP: 150,
  badge: { icon: "🗺️", name: "Explorer" },
  cta: {
    // Точка воронки 1: демо (последняя карточка, до квиза)
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod01_card_last_demo_cta"
    },
    // Точка воронки 2: регистрация (финальный экран)
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod01_complete_register_cta"
    }
  },
  cards: [
    {
      tag: "Basics",
      icon: "🌐",
      accent: "#6C63FF",
      title: "What is a financial market?",
      body: "A financial market is a place where buyers and sellers exchange assets — currencies, stocks, commodities. Everything happens online, 24 hours a day.",
    },
    {
      tag: "Forex",
      icon: "📊",
      accent: "#00C896",
      title: "The world's biggest market",
      body: "Daily trading volume on Forex exceeds $7.5 trillion. Traders buy and sell currency pairs like EUR/USD, GBP/USD, and USD/JPY.",
      stat: { value: "$7.5T", label: "traded every day" }
    },
    {
      tag: "How it works",
      icon: "📈",
      accent: "#FF6B6B",
      title: "How do traders make money?",
      body: "Traders profit from price differences: buy low, sell high (long) — or sell high, buy back lower (short). The difference is your profit or loss.",
    },
    {
      tag: "Tools",
      icon: "⚖️",
      accent: "#FFB830",
      title: "What is leverage?",
      body: "Leverage lets you control more than you deposit. With 1:100 leverage, $100 controls a $10,000 position. It amplifies both gains and losses.",
    },
    {
      tag: "Ready?",
      icon: "🏁",
      accent: "#A78BFA",
      title: "You're ready for your first trade",
      body: "You've learned the basics. The next step is to practice on a demo account — zero risk, real market conditions.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "What does the EUR/USD price represent?",
      options: [
        { text: "How many US dollars buy 1 euro", correct: true },
        { text: "The euro's value in gold", correct: false },
        { text: "The broker's commission rate", correct: false },
        { text: "Total daily trading volume", correct: false },
      ],
      explanation: "EUR/USD = 1.08 means 1 euro costs $1.08. The base currency always comes first."
    },
    {
      question: "A trader opens a short on EUR/USD. When do they profit?",
      options: [
        { text: "When the price rises", correct: false },
        { text: "When the price falls", correct: true },
        { text: "When trading volume increases", correct: false },
        { text: "Regardless of price movement", correct: false },
      ],
      explanation: "A short is a bet on decline. You sell high and buy back lower — the difference is your profit."
    },
    {
      question: "A trader has $200 and uses 1:50 leverage. What position size do they control?",
      options: [
        { text: "$2,000", correct: false },
        { text: "$5,000", correct: false },
        { text: "$10,000", correct: true },
        { text: "$50,000", correct: false },
      ],
      explanation: "$200 × 50 = $10,000. Leverage multiplies your position — and your risk."
    },
  ]
});
