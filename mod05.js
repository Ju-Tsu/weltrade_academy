// ─── Module 05: Trading Psychology ───────────────────────────────────────────
window.WT_MODULES = window.WT_MODULES || [];

window.WT_MODULES.push({
  id: "mod_05",
  title: "Trading Psychology",
  totalXP: 350,
  badge: { icon: "👑", name: "Academy Graduate" },
  cta: {
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod05_card_last_demo_cta"
    },
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod05_complete_register_cta"
      // Юзер дошедший до mod_05 — самый ценный лид.
      // LTV таких пользователей в 3x выше среднего по воронке.
    }
  },
  cards: [
    {
      tag: "Enemy #1",
      icon: "😱",
      accent: "#FF6B6B",
      title: "FOMO — fear of missing out",
      body: "You see a pair that already moved 200 pips. You jump in late, it reverses, you lose. FOMO makes you chase moves that are already over. The market will always give another setup — patience is an edge.",
    },
    {
      tag: "Enemy #2",
      icon: "😤",
      accent: "#FFB830",
      title: "Revenge trading",
      body: "You just lost a trade. You immediately open another one, bigger, to win it back. This is revenge trading — the fastest way to blow an account. A loss is information, not a personal attack. Close the app and walk away.",
    },
    {
      tag: "Enemy #3",
      icon: "🤑",
      accent: "#A78BFA",
      title: "Overconfidence after a winning streak",
      body: "You won 5 trades in a row. You feel invincible. You size up. You break your rules. Then one trade wipes the last five. Winning streaks end. The rules exist for those moments.",
    },
    {
      tag: "The Edge",
      icon: "🧘",
      accent: "#6C63FF",
      title: "Process over outcome",
      body: "A good trade can lose. A bad trade can win. Your job is not to predict the market — it's to execute your process correctly every time. Judge yourself on process, not on a single result.",
      stat: { value: "Process", label: "is the only thing you can control" }
    },
    {
      tag: "Habit",
      icon: "📓",
      accent: "#00C896",
      title: "Keep a trading journal",
      body: "After every trade write: entry reason, SL/TP levels, result, and what you felt. Patterns emerge after 30 entries. You'll see which setups work and which emotional states lead to bad decisions.",
    },
    {
      tag: "You made it",
      icon: "👑",
      accent: "#FFB830",
      title: "You're now in the top 10%",
      body: "Most traders never study psychology. You did. You understand FOMO, revenge trading, position sizing, risk management, and chart reading. You have everything you need to start — go use it.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "EUR/USD just moved 150 pips in 30 minutes. You didn't catch the move. What should you do?",
      options: [
        { text: "Enter now — momentum will continue", correct: false },
        { text: "Wait for the next setup — don't chase", correct: true },
        { text: "Open a bigger position to compensate", correct: false },
        { text: "Switch to a different pair immediately", correct: false },
      ],
      explanation: "Chasing moves is FOMO in action. Entering late on a 150-pip move means buying at the top. The next setup will come — patience is your edge."
    },
    {
      question: "You just lost two trades in a row. You feel the urge to open a third trade immediately to recover. What is this called?",
      options: [
        { text: "A hedging strategy", correct: false },
        { text: "Revenge trading", correct: true },
        { text: "Scaling in", correct: false },
        { text: "Dollar-cost averaging", correct: false },
      ],
      explanation: "Revenge trading is emotionally-driven trading after a loss. It leads to oversizing, rule-breaking, and deeper losses. Walk away instead."
    },
    {
      question: "You followed your trading plan perfectly but the trade hit your stop-loss. How should you evaluate this trade?",
      options: [
        { text: "As a failure — you lost money", correct: false },
        { text: "As a good trade — you executed your process correctly", correct: true },
        { text: "As a sign to change your strategy immediately", correct: false },
        { text: "As a reason to skip the next setup", correct: false },
      ],
      explanation: "A loss doesn't make a trade bad. If you followed your rules, it was a good trade. Losses are part of any system. Judge process, not outcome."
    },
  ]
});
