// ─── Telegram WebApp Init ─────────────────────────────────────────────────────
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }

// ─── Module Data ──────────────────────────────────────────────────────────────
const MODULE = {
  id: "mod_01",
  title: "Intro to Markets",
  subtitle: "Module 01 · 7 min",
  totalXP: 150,
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
      tag: "Players",
      icon: "🏦",
      accent: "#A78BFA",
      title: "Who trades the markets?",
      body: "Central banks move markets with policy decisions. Hedge funds are the big players. Retail traders — that's us — account for a growing share of daily volume.",
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
};

// ─── State ────────────────────────────────────────────────────────────────────
const STATE_KEY = "wt_state_mod01";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || {
      phase: "cards",   // cards | quiz | complete
      cardIndex: 0,
      quizIndex: 0,
      quizScore: 0,
      xpEarned: 0,
      completedAt: null,
    };
  } catch (e) { return { phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0, xpEarned: 0 }; }
}

function saveState(s) {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(s)); } catch (e) {}
}

let S = loadState();
let quizSelected = null;
let quizRevealed = false;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const TOTAL_STEPS = MODULE.cards.length + MODULE.quiz.length;

function currentStep() {
  if (S.phase === "cards") return S.cardIndex + 1;
  if (S.phase === "quiz")  return MODULE.cards.length + S.quizIndex + 1;
  return TOTAL_STEPS;
}

function currentAccent() {
  if (S.phase === "cards") return MODULE.cards[S.cardIndex].accent;
  if (S.phase === "quiz")  return "#FFB830";
  return "#00C896";
}

// ─── Render: shell ────────────────────────────────────────────────────────────
function renderShell() {
  const acc = currentAccent();
  const pct = Math.round((currentStep() / TOTAL_STEPS) * 100);
  const showHeader = S.phase !== "complete";

  $("root").innerHTML = `
    <div id="app" style="min-height:100vh;display:flex;flex-direction:column;background:#0a0a0f;position:relative;overflow:hidden;">

      <!-- ambient glow -->
      <div id="glow" style="
        position:absolute;top:-80px;right:-80px;width:280px;height:280px;
        border-radius:50%;background:${acc};opacity:.07;filter:blur(70px);
        pointer-events:none;transition:background .6s;
      "></div>

      <!-- header -->
      ${showHeader ? `
      <div style="padding:20px 20px 14px;position:relative;z-index:1;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.08em;text-transform:uppercase;">Weltrade Academy</div>
            <div style="font-size:16px;font-weight:700;color:#fff;margin-top:2px;">${MODULE.title}</div>
          </div>
          <div style="
            background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);
            border-radius:999px;padding:4px 12px;
            font-size:12px;color:rgba(255,255,255,.9);font-weight:700;
          ">⚡ ${MODULE.totalXP} XP</div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:7px;">
          <span style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;">PROGRESS</span>
          <span style="font-size:10px;color:rgba(255,255,255,.9);font-weight:700;">${currentStep()}/${TOTAL_STEPS}</span>
        </div>
        <div style="height:4px;background:rgba(255,255,255,.12);border-radius:999px;overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:${acc};border-radius:999px;transition:width .5s ease;box-shadow:0 0 10px ${acc}70;"></div>
        </div>
      </div>
      ` : ""}

      <!-- content slot -->
      <div id="content" style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:4px 20px 16px;position:relative;z-index:1;"></div>

      <!-- dots -->
      ${showHeader ? `
      <div style="display:flex;justify-content:center;align-items:center;gap:5px;padding-bottom:20px;z-index:1;">
        ${MODULE.cards.map((_, i) => `
          <div style="
            height:5px;border-radius:999px;transition:all .3s ease;
            width:${i === S.cardIndex && S.phase === "cards" ? 18 : 5}px;
            background:${i < S.cardIndex || S.phase !== "cards" ? acc : i === S.cardIndex && S.phase === "cards" ? acc : "rgba(255,255,255,.2)"};
            opacity:${i > S.cardIndex && S.phase === "cards" ? .4 : 1};
          "></div>
        `).join("")}
        <div style="
          height:5px;width:5px;border-radius:999px;transition:all .3s ease;
          background:${S.phase === "quiz" ? "#FFB830" : "rgba(255,255,255,.2)"};
        "></div>
      </div>
      ` : ""}
    </div>
  `;
}

// ─── Render: learning card ────────────────────────────────────────────────────
function renderCard() {
  renderShell();
  const card = MODULE.cards[S.cardIndex];
  const isLast = S.cardIndex === MODULE.cards.length - 1;

  $("content").innerHTML = `
    <div id="card-wrap" style="transform:translateX(60px);opacity:0;transition:transform .32s cubic-bezier(.4,0,.2,1),opacity .32s;">
      <div style="
        background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
        border-radius:18px;padding:20px;margin-bottom:14px;position:relative;overflow:hidden;
      ">
        <div style="
          position:absolute;top:-30px;right:-30px;width:120px;height:120px;
          border-radius:50%;background:${card.accent};opacity:.12;filter:blur(35px);
        "></div>

        <div style="
          display:inline-flex;align-items:center;gap:5px;
          background:${card.accent}22;border:1px solid ${card.accent}44;
          border-radius:999px;padding:3px 10px;margin-bottom:14px;
        ">
          <span style="font-size:12px;">${card.icon}</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:.06em;color:${card.accent};">${card.tag.toUpperCase()}</span>
        </div>

        <div style="font-size:20px;font-weight:800;color:#fff;line-height:1.25;margin-bottom:10px;letter-spacing:-.02em;">
          ${card.title}
        </div>
        <div style="font-size:14px;line-height:1.65;color:rgba(255,255,255,.6);">
          ${card.body}
        </div>

        ${card.stat ? `
        <div style="
          margin-top:14px;background:rgba(255,255,255,.06);
          border-radius:12px;padding:12px 14px;
          display:flex;align-items:center;gap:12px;
          border-left:3px solid ${card.accent};
        ">
          <span style="font-size:26px;font-weight:700;color:${card.accent};line-height:1;">${card.stat.value}</span>
          <span style="font-size:12px;color:rgba(255,255,255,.45);">${card.stat.label}</span>
        </div>` : ""}
      </div>

      <button onclick="nextCard()" style="
        width:100%;padding:15px 0;border:none;border-radius:14px;
        background:${card.accent};color:#0a0a0f;
        font-size:16px;font-weight:700;cursor:pointer;
        box-shadow:0 4px 18px ${card.accent}44;
        transition:transform .15s;
      ">${isLast ? "Take the quiz 🎯" : "Next →"}</button>
    </div>
  `;

  // animate in
  requestAnimationFrame(() => {
    const el = $("card-wrap");
    if (el) { el.style.transform = "translateX(0)"; el.style.opacity = "1"; }
  });
}

// ─── Render: quiz question ────────────────────────────────────────────────────
function renderQuiz() {
  renderShell();
  quizSelected = null;
  quizRevealed = false;
  const q = MODULE.quiz[S.quizIndex];
  const optLetters = ["A", "B", "C", "D"];

  $("content").innerHTML = `
    <div>
      <div style="
        display:inline-flex;align-items:center;gap:5px;
        background:rgba(255,184,48,.15);border:1px solid rgba(255,184,48,.3);
        border-radius:999px;padding:3px 10px;margin-bottom:12px;
      ">
        <span style="font-size:12px;">🎯</span>
        <span style="font-size:10px;font-weight:700;letter-spacing:.06em;color:#FFB830;">
          QUESTION ${S.quizIndex + 1} OF ${MODULE.quiz.length}
        </span>
      </div>

      <div style="font-size:19px;font-weight:800;color:#fff;line-height:1.3;margin-bottom:16px;letter-spacing:-.02em;">
        ${q.question}
      </div>

      <div id="options-wrap">
        ${q.options.map((opt, i) => `
          <div onclick="selectOption(${i})" id="opt-${i}" style="
            display:flex;align-items:center;gap:10px;
            padding:12px 14px;border-radius:12px;margin-bottom:8px;cursor:pointer;
            border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);
            transition:all .2s;
          ">
            <div id="opt-badge-${i}" style="
              width:26px;height:26px;border-radius:50%;flex-shrink:0;
              display:flex;align-items:center;justify-content:center;
              background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
              font-size:11px;font-weight:700;color:rgba(255,255,255,.6);
            ">${optLetters[i]}</div>
            <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.4;">${opt.text}</div>
          </div>
        `).join("")}
      </div>

      <div id="explanation" style="display:none;
        border-radius:12px;padding:10px 14px;margin-bottom:12px;
        font-size:12px;color:rgba(255,255,255,.65);line-height:1.5;
      "></div>

      <button id="quiz-next-btn" onclick="nextQuiz()" style="
        display:none;width:100%;padding:15px 0;border:none;border-radius:14px;
        background:#6C63FF;color:#fff;font-size:16px;font-weight:700;cursor:pointer;
        box-shadow:0 4px 18px #6C63FF44;transition:transform .15s;
      ">${S.quizIndex < MODULE.quiz.length - 1 ? "Next question →" : "Finish quiz 🏁"}</button>
    </div>
  `;
}

// ─── Quiz interaction ─────────────────────────────────────────────────────────
window.selectOption = function(idx) {
  if (quizRevealed) return;
  quizRevealed = true;
  quizSelected = idx;

  const q = MODULE.quiz[S.quizIndex];
  const isCorrect = q.options[idx].correct;
  if (isCorrect) S.quizScore++;
  saveState(S);

  q.options.forEach((opt, i) => {
    const el = $(`opt-${i}`);
    const badge = $(`opt-badge-${i}`);
    if (opt.correct) {
      el.style.background = "rgba(0,200,150,.15)";
      el.style.borderColor = "#00C896";
      badge.style.background = "rgba(0,200,150,.2)";
      badge.style.borderColor = "#00C896";
      badge.style.color = "#00C896";
    } else if (i === idx && !opt.correct) {
      el.style.background = "rgba(255,107,107,.15)";
      el.style.borderColor = "#FF6B6B";
      badge.style.background = "rgba(255,107,107,.2)";
      badge.style.borderColor = "#FF6B6B";
      badge.style.color = "#FF6B6B";
    }
    el.style.cursor = "default";
  });

  const expEl = $("explanation");
  expEl.style.display = "block";
  expEl.style.background = isCorrect ? "rgba(0,200,150,.1)" : "rgba(255,107,107,.1)";
  expEl.style.border = `1px solid ${isCorrect ? "rgba(0,200,150,.25)" : "rgba(255,107,107,.25)"}`;
  expEl.innerHTML = `<strong style="color:${isCorrect ? "#00C896" : "#FF6B6B"};">${isCorrect ? "Correct! " : "Not quite. "}</strong>${q.explanation}`;

  $("quiz-next-btn").style.display = "block";
};

// ─── Navigation ───────────────────────────────────────────────────────────────
window.nextCard = function() {
  const el = $("card-wrap");
  if (el) { el.style.transform = "translateX(-60px)"; el.style.opacity = "0"; }
  setTimeout(() => {
    if (S.cardIndex < MODULE.cards.length - 1) {
      S.cardIndex++;
      saveState(S);
      renderCard();
    } else {
      S.phase = "quiz";
      S.quizIndex = 0;
      S.quizScore = 0;
      saveState(S);
      renderQuiz();
    }
  }, 280);
};

window.nextQuiz = function() {
  if (S.quizIndex < MODULE.quiz.length - 1) {
    S.quizIndex++;
    saveState(S);
    renderQuiz();
  } else {
    S.phase = "complete";
    S.xpEarned = MODULE.totalXP;
    S.completedAt = Date.now();
    saveState(S);
    renderComplete();
  }
};

window.restartModule = function() {
  S = { phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0, xpEarned: 0 };
  saveState(S);
  renderCard();
};

window.openDemo = function() {
  const url = "https://weltrade.com/demo";
  if (tg) tg.openLink(url);
  else window.open(url, "_blank");
};

// ─── Render: complete screen ──────────────────────────────────────────────────
function renderComplete() {
  $("root").innerHTML = "";
  const total = MODULE.quiz.length;
  const score = S.quizScore;
  const passed = score / total >= 0.66;
  const pct = Math.round((score / total) * 100);

  $("root").innerHTML = `
    <div style="
      min-height:100vh;display:flex;flex-direction:column;
      align-items:center;justify-content:center;
      background:#0a0a0f;padding:32px 20px;text-align:center;
      position:relative;overflow:hidden;
    ">
      <!-- glow -->
      <div style="
        position:absolute;top:-60px;left:50%;transform:translateX(-50%);
        width:300px;height:300px;border-radius:50%;
        background:${passed ? "#00C896" : "#FF6B6B"};
        opacity:.07;filter:blur(80px);pointer-events:none;
      "></div>

      <div style="font-size:56px;margin-bottom:16px;">${passed ? "🏆" : "📚"}</div>

      <div style="
        font-size:26px;font-weight:800;color:#fff;
        letter-spacing:-.03em;margin-bottom:8px;
      ">${passed ? "Great result!" : "Keep going!"}</div>

      <div style="font-size:14px;color:rgba(255,255,255,.45);margin-bottom:28px;">
        ${passed ? "Module 01 complete" : "You can retake the quiz"}
      </div>

      <!-- Score ring -->
      <div style="
        width:110px;height:110px;border-radius:50%;
        border:3px solid ${passed ? "#00C896" : "#FF6B6B"};
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        margin-bottom:28px;
        box-shadow:0 0 30px ${passed ? "rgba(0,200,150,.25)" : "rgba(255,107,107,.25)"};
      ">
        <div style="
          font-size:28px;font-weight:800;
          color:${passed ? "#00C896" : "#FF6B6B"};line-height:1;
        ">${score}/${total}</div>
        <div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:3px;">${pct}% correct</div>
      </div>

      ${passed ? `
      <!-- Rewards -->
      <div style="
        display:flex;gap:16px;align-items:center;
        background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.1);
        border-radius:16px;padding:14px 24px;
        margin-bottom:20px;width:100%;max-width:320px;
        justify-content:center;
      ">
        <div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase;">Earned</div>
          <div style="font-size:22px;font-weight:800;color:#FFB830;margin-top:2px;">+${MODULE.totalXP} XP</div>
        </div>
        <div style="width:1px;background:rgba(255,255,255,.1);align-self:stretch;"></div>
        <div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase;">Badge</div>
          <div style="font-size:22px;margin-top:4px;">🗺️</div>
          <div style="font-size:10px;color:rgba(255,255,255,.5);margin-top:1px;">Explorer</div>
        </div>
      </div>

      <!-- CTA -->
      <button onclick="openDemo()" style="
        width:100%;max-width:320px;padding:15px 0;border:none;border-radius:14px;
        background:linear-gradient(135deg,#00C896,#6C63FF);
        color:#fff;font-size:16px;font-weight:700;cursor:pointer;
        margin-bottom:10px;
      ">Open a demo account 🚀</button>
      ` : ""}

      <button onclick="restartModule()" style="
        width:100%;max-width:320px;padding:13px 0;
        background:transparent;color:rgba(255,255,255,.4);
        border:1px solid rgba(255,255,255,.1);border-radius:14px;
        font-size:14px;cursor:pointer;
      ">${passed ? "Next module →" : "Try again"}</button>
    </div>
  `;
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
if (S.phase === "cards")    renderCard();
else if (S.phase === "quiz") renderQuiz();
else                         renderComplete();
