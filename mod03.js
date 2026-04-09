// ─── Module 03: Risk Management ───────────────────────────────────────────────
window.WT_MODULES = window.WT_MODULES || [];

window.WT_MODULES.push({
  id: "mod_03",
  title: "Risk Management",
  totalXP: 250,
  badge: { icon: "🛡️", name: "Risk Manager" },
  cta: {
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod03_card_last_demo_cta"
    },
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod03_complete_register_cta"
      // Этот модуль даёт самый высокий conversion rate —
      // юзер понял что не сольёт депозит и готов к реальному счёту
    }
  },
  cards: [
    {
      tag: "Rule #1",
      icon: "🛡️",
      accent: "#FF6B6B",
      title: "Never risk more than 2%",
      body: "The 2% rule: never put more than 2% of your account on a single trade. On a $1,000 account that's $20 per trade. This keeps you in the game even after 10 losses in a row.",
      stat: { value: "2%", label: "max risk per trade — the golden rule" }
    },
    {
      tag: "Stop-Loss",
      icon: "🚫",
      accent: "#FFB830",
      title: "What is a stop-loss?",
      body: "A stop-loss is an automatic exit order. You set it before entering a trade. If price moves against you to that level, the trade closes automatically — limiting your loss.",
    },
    {
      tag: "Take-Profit",
      icon: "🎯",
      accent: "#00C896",
      title: "Lock in your gains",
      body: "A take-profit order closes your trade automatically when price hits your target. You don't need to watch the screen. Set it, walk away, let the market do the work.",
    },
    {
      tag: "R:R Ratio",
      icon: "⚖️",
      accent: "#6C63FF",
      title: "Risk-to-reward ratio",
      body: "Always aim for at least 1:2 — risk $1 to make $2. With a 1:2 ratio you can be wrong half the time and still be profitable. Most beginners ignore this and lose long-term.",
      stat: { value: "1:2", label: "minimum risk-to-reward ratio to target" }
    },
    {
      tag: "Position Size",
      icon: "📏",
      accent: "#A78BFA",
      title: "How to size your position",
      body: "Position size = (Account × Risk%) ÷ Stop-loss distance. Example: $1,000 account, 2% risk, 50 pip stop = $20 ÷ 50 = $0.40 per pip. Always calculate before entering.",
    },
    {
      tag: "Ready?",
      icon: "🏁",
      accent: "#00C896",
      title: "You're ready to trade safely",
      body: "Stop-loss, take-profit, position sizing, the 2% rule — this is what separates traders who last from those who blow up their accounts. You now have the full toolkit.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "You have a $500 account and follow the 2% rule. What is the maximum you risk on one trade?",
      options: [
        { text: "$2", correct: false },
        { text: "$10", correct: true },
        { text: "$50", correct: false },
        { text: "$100", correct: false },
      ],
      explanation: "$500 × 2% = $10. This keeps losses small enough to recover from without emotional damage."
    },
    {
      question: "What does a stop-loss order do?",
      options: [
        { text: "Locks in profit when price reaches your target", correct: false },
        { text: "Automatically closes a losing trade at a set level", correct: true },
        { text: "Prevents you from opening a trade", correct: false },
        { text: "Doubles your position when price drops", correct: false },
      ],
      explanation: "A stop-loss exits your trade automatically if price moves against you to a pre-set level, capping your loss."
    },
    {
      question: "You risk $30 on a trade. What is the minimum profit target for a 1:2 risk-to-reward ratio?",
      options: [
        { text: "$15", correct: false },
        { text: "$30", correct: false },
        { text: "$60", correct: true },
        { text: "$90", correct: false },
      ],
      explanation: "1:2 means you target twice what you risk. $30 risk × 2 = $60 target. This way even a 50% win rate is profitable."
    },
  ]
});
