// ─── Telegram WebApp Init ─────────────────────────────────────────────────────
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }

// ─── UTM Builder ──────────────────────────────────────────────────────────────
// utm_content меняется на каждой точке воронки — так видно где именно кликнул юзер
function buildURL(baseUrl, content) {
  const p = new URLSearchParams({
    utm_source:   "telegram_organic",
    utm_medium:   "tma",
    utm_campaign: "academy_mod01",
    utm_content:  content,
  });
  return `${baseUrl}?${p.toString()}`;
}

function openLink(url) {
  if (tg) tg.openLink(url);
  else window.open(url, "_blank");
}

// ─── Three funnel CTAs ────────────────────────────────────────────────────────
// Точка 1: последняя карточка → демо (низкое трение, до квиза)
window.openDemo = function() {
  openLink(buildURL("https://weltrade.com/demo", "card_last_demo_cta"));
};

// Точка 2: финальный экран → регистрация (главная конверсия)
window.openRegister = function() {
  openLink(buildURL("https://weltrade.com/register", "quiz_complete_register_cta"));
};

// Точка 3: финальный экран → следующий модуль (retention)
window.openNextModule = function() {
  openLink(buildURL("https://weltrade.com", "next_module_retention_cta"));
};

// ─── Module Data ──────────────────────────────────────────────────────────────
const MODULE = {
  id: "mod_01",
  title: "Intro to Markets",
  totalXP: 150,
  cards: [
    {
      tag: "Basics", icon: "🌐", accent: "#6C63FF",
      title: "What is a financial market?",
      body: "A financial market is a place where buyers and sellers exchange assets — currencies, stocks, commodities. Everything happens online, 24 hours a day.",
    },
    {
      tag: "Forex", icon: "📊", accent: "#00C896",
      title: "The world's biggest market",
      body: "Daily trading volume on Forex exceeds $7.5 trillion. Traders buy and sell currency pairs like EUR/USD, GBP/USD, and USD/JPY.",
      stat: { value: "$7.5T", label: "traded every day" }
    },
    {
      tag: "How it works", icon: "📈", accent: "#FF6B6B",
      title: "How do traders make money?",
      body: "Traders profit from price differences: buy low, sell high (long) — or sell high, buy back lower (short). The difference is your profit or loss.",
    },
    {
      tag: "Tools", icon: "⚖️", accent: "#FFB830",
      title: "What is leverage?",
      body: "Leverage lets you control more than you deposit. With 1:100 leverage, $100 controls a $10,000 position. It amplifies both gains and losses.",
    },
    {
      tag: "Ready?", icon: "🏁", accent: "#A78BFA",
      title: "You're ready for your first trade",
      body: "You've learned the basics. The next step is to practice on a demo account — zero risk, real market conditions.",
      demoCTA: true, // показывает вторую кнопку "Try demo first"
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
      phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0, xpEarned: 0,
    };
  } catch (e) {
    return { phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0, xpEarned: 0 };
  }
}

function saveState(s) {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(s)); } catch (e) {}
}

let S = loadState();
let quizRevealed = false;

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

// ─── Shell ────────────────────────────────────────────────────────────────────
function renderShell() {
  const acc = currentAccent();
  const pct = Math.round((currentStep() / TOTAL_STEPS) * 100);
  const showHeader = S.phase !== "complete";

  $("root").innerHTML = `
    <div id="app" style="min-height:100vh;display:flex;flex-direction:column;background:#0a0a0f;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-80px;right:-80px;width:280px;height:280px;border-radius:50%;background:${acc};opacity:.07;filter:blur(70px);pointer-events:none;transition:background .6s;"></div>

      ${showHeader ? `
      <div style="padding:20px 20px 14px;position:relative;z-index:1;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
          <div>
            <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.08em;text-transform:uppercase;">Weltrade Academy</div>
            <div style="font-size:16px;font-weight:700;color:#fff;margin-top:2px;">${MODULE.title}</div>
          </div>
          <div style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:4px 12px;font-size:12px;color:rgba(255,255,255,.9);font-weight:700;">⚡ ${MODULE.totalXP} XP</div>
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

      <div id="content" style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:4px 20px 16px;position:relative;z-index:1;"></div>

      ${showHeader ? `
      <div style="display:flex;justify-content:center;align-items:center;gap:5px;padding-bottom:20px;z-index:1;">
        ${MODULE.cards.map((_, i) => `<div style="height:5px;border-radius:999px;transition:all .3s ease;width:${i === S.cardIndex && S.phase === "cards" ? 18 : 5}px;background:${i < S.cardIndex || S.phase !== "cards" ? acc : i === S.cardIndex && S.phase === "cards" ? acc : "rgba(255,255,255,.2)"};opacity:${i > S.cardIndex && S.phase === "cards" ? .4 : 1};"></div>`).join("")}
        <div style="height:5px;width:5px;border-radius:999px;background:${S.phase === "quiz" ? "#FFB830" : "rgba(255,255,255,.2)"};transition:all .3s;"></div>
      </div>
      ` : ""}
    </div>
  `;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function renderCard() {
  renderShell();
  const card = MODULE.cards[S.cardIndex];
  const isLast = S.cardIndex === MODULE.cards.length - 1;

  $("content").innerHTML = `
    <div id="cw" style="transform:translateX(60px);opacity:0;transition:transform .32s cubic-bezier(.4,0,.2,1),opacity .32s;">
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:20px;margin-bottom:14px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:${card.accent};opacity:.12;filter:blur(35px);"></div>
        <div style="display:inline-flex;align-items:center;gap:5px;background:${card.accent}22;border:1px solid ${card.accent}44;border-radius:999px;padding:3px 10px;margin-bottom:14px;">
          <span style="font-size:12px;">${card.icon}</span>
          <span style="font-size:10px;font-weight:700;letter-spacing:.06em;color:${card.accent};">${card.tag.toUpperCase()}</span>
        </div>
        <div style="font-size:20px;font-weight:800;color:#fff;line-height:1.25;margin-bottom:10px;letter-spacing:-.02em;">${card.title}</div>
        <div style="font-size:14px;line-height:1.65;color:rgba(255,255,255,.6);">${card.body}</div>
        ${card.stat ? `<div style="margin-top:14px;background:rgba(255,255,255,.06);border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:12px;border-left:3px solid ${card.accent};"><span style="font-size:26px;font-weight:700;color:${card.accent};line-height:1;">${card.stat.value}</span><span style="font-size:12px;color:rgba(255,255,255,.45);">${card.stat.label}</span></div>` : ""}
      </div>

      <button onclick="nextCard()" style="width:100%;padding:15px 0;border:none;border-radius:14px;background:${card.accent};color:#0a0a0f;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 18px ${card.accent}44;transition:transform .15s;${card.demoCTA ? "margin-bottom:10px;" : ""}">
        ${isLast ? "Take the quiz 🎯" : "Next →"}
      </button>

      ${card.demoCTA ? `
      <button onclick="openDemo()" style="width:100%;padding:13px 0;border:1px solid rgba(255,255,255,.15);border-radius:14px;background:transparent;color:rgba(255,255,255,.6);font-size:14px;cursor:pointer;">
        Try demo account first →
      </button>` : ""}
    </div>
  `;

  requestAnimationFrame(() => {
    const el = $("cw");
    if (el) { el.style.transform = "translateX(0)"; el.style.opacity = "1"; }
  });
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────
function renderQuiz() {
  renderShell();
  quizRevealed = false;
  const q = MODULE.quiz[S.quizIndex];
  const letters = ["A", "B", "C", "D"];

  $("content").innerHTML = `
    <div>
      <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(255,184,48,.15);border:1px solid rgba(255,184,48,.3);border-radius:999px;padding:3px 10px;margin-bottom:12px;">
        <span style="font-size:12px;">🎯</span>
        <span style="font-size:10px;font-weight:700;letter-spacing:.06em;color:#FFB830;">QUESTION ${S.quizIndex + 1} OF ${MODULE.quiz.length}</span>
      </div>
      <div style="font-size:19px;font-weight:800;color:#fff;line-height:1.3;margin-bottom:16px;letter-spacing:-.02em;">${q.question}</div>
      <div>
        ${q.options.map((opt, i) => `
          <div onclick="selectOption(${i})" id="opt-${i}" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;margin-bottom:8px;cursor:pointer;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);transition:all .2s;">
            <div id="ob-${i}" style="width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);font-size:11px;font-weight:700;color:rgba(255,255,255,.6);">${letters[i]}</div>
            <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.4;">${opt.text}</div>
          </div>
        `).join("")}
      </div>
      <div id="exp" style="display:none;border-radius:12px;padding:10px 14px;margin-bottom:12px;font-size:12px;color:rgba(255,255,255,.65);line-height:1.5;"></div>
      <button id="qnb" onclick="nextQuiz()" style="display:none;width:100%;padding:15px 0;border:none;border-radius:14px;background:#6C63FF;color:#fff;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 18px #6C63FF44;">
        ${S.quizIndex < MODULE.quiz.length - 1 ? "Next question →" : "Finish quiz 🏁"}
      </button>
    </div>
  `;
}

window.selectOption = function(idx) {
  if (quizRevealed) return;
  quizRevealed = true;
  const q = MODULE.quiz[S.quizIndex];
  const ok = q.options[idx].correct;
  if (ok) S.quizScore++;
  saveState(S);

  q.options.forEach((opt, i) => {
    const el = $(`opt-${i}`), b = $(`ob-${i}`);
    if (opt.correct) {
      el.style.background = "rgba(0,200,150,.15)"; el.style.borderColor = "#00C896";
      b.style.background = "rgba(0,200,150,.2)"; b.style.borderColor = "#00C896"; b.style.color = "#00C896";
    } else if (i === idx) {
      el.style.background = "rgba(255,107,107,.15)"; el.style.borderColor = "#FF6B6B";
      b.style.background = "rgba(255,107,107,.2)"; b.style.borderColor = "#FF6B6B"; b.style.color = "#FF6B6B";
    }
    el.style.cursor = "default";
  });

  const exp = $("exp");
  exp.style.display = "block";
  exp.style.background = ok ? "rgba(0,200,150,.1)" : "rgba(255,107,107,.1)";
  exp.style.border = `1px solid ${ok ? "rgba(0,200,150,.25)" : "rgba(255,107,107,.25)"}`;
  exp.innerHTML = `<strong style="color:${ok ? "#00C896" : "#FF6B6B"};">${ok ? "Correct! " : "Not quite. "}</strong>${q.explanation}`;
  $("qnb").style.display = "block";
};

window.nextCard = function() {
  const el = $("cw");
  if (el) { el.style.transform = "translateX(-60px)"; el.style.opacity = "0"; }
  setTimeout(() => {
    if (S.cardIndex < MODULE.cards.length - 1) {
      S.cardIndex++; saveState(S); renderCard();
    } else {
      S.phase = "quiz"; S.quizIndex = 0; S.quizScore = 0; saveState(S); renderQuiz();
    }
  }, 280);
};

window.nextQuiz = function() {
  if (S.quizIndex < MODULE.quiz.length - 1) {
    S.quizIndex++; saveState(S); renderQuiz();
  } else {
    S.phase = "complete"; S.xpEarned = MODULE.totalXP; S.completedAt = Date.now();
    saveState(S); renderComplete();
  }
};

window.restartModule = function() {
  S = { phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0, xpEarned: 0 };
  saveState(S); renderCard();
};

// ─── Complete ─────────────────────────────────────────────────────────────────
function renderComplete() {
  const total = MODULE.quiz.length;
  const score = S.quizScore;
  const passed = score / total >= 0.66;
  const pct = Math.round((score / total) * 100);

  $("root").innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0a0a0f;padding:32px 20px;text-align:center;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:300px;height:300px;border-radius:50%;background:${passed ? "#00C896" : "#FF6B6B"};opacity:.07;filter:blur(80px);pointer-events:none;"></div>

      <div style="font-size:56px;margin-bottom:16px;">${passed ? "🏆" : "📚"}</div>
      <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-.03em;margin-bottom:8px;">${passed ? "Great result!" : "Keep going!"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,.45);margin-bottom:28px;">${passed ? "Module 01 complete" : "You can retake the quiz"}</div>

      <div style="width:110px;height:110px;border-radius:50%;border:3px solid ${passed ? "#00C896" : "#FF6B6B"};display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:28px;box-shadow:0 0 30px ${passed ? "rgba(0,200,150,.25)" : "rgba(255,107,107,.25)"};">
        <div style="font-size:28px;font-weight:800;color:${passed ? "#00C896" : "#FF6B6B"};line-height:1;">${score}/${total}</div>
        <div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:3px;">${pct}% correct</div>
      </div>

      ${passed ? `
      <div style="display:flex;gap:16px;align-items:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 24px;margin-bottom:20px;width:100%;max-width:320px;justify-content:center;">
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

      <!-- Точка воронки 2: регистрация -->
      <button onclick="openRegister()" style="width:100%;max-width:320px;padding:15px 0;border:none;border-radius:14px;background:linear-gradient(135deg,#00C896,#6C63FF);color:#fff;font-size:16px;font-weight:700;cursor:pointer;margin-bottom:10px;">
        Create free account 🚀
      </button>

      <!-- Точка воронки 3: retention -->
      <button onclick="openNextModule()" style="width:100%;max-width:320px;padding:13px 0;background:transparent;color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.1);border-radius:14px;font-size:14px;cursor:pointer;margin-bottom:10px;">
        Next module →
      </button>
      ` : ""}

      <button onclick="restartModule()" style="width:100%;max-width:320px;padding:13px 0;background:transparent;color:rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.08);border-radius:14px;font-size:13px;cursor:pointer;">
        ${passed ? "Retake module" : "Try again"}
      </button>
    </div>
  `;
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
if (S.phase === "cards")     renderCard();
else if (S.phase === "quiz") renderQuiz();
else                         renderComplete();
