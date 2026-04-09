// ─── Weltrade Academy Engine v2 ───────────────────────────────────────────────
// Этот файл не трогаем при добавлении новых модулей.
// Новый модуль = новый modXX.js файл + <script> в index.html.

// ─── Telegram Init ────────────────────────────────────────────────────────────
const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }

// ─── Module Registry ──────────────────────────────────────────────────────────
// Заполняется через window.WT_MODULES в каждом modXX.js
const MODULES = window.WT_MODULES || [];

if (!MODULES.length) {
  document.getElementById("root").innerHTML =
    `<div style="color:#fff;padding:40px;text-align:center">No modules found.</div>`;
  throw new Error("WT: no modules loaded");
}

// ─── Global State ─────────────────────────────────────────────────────────────
const GLOBAL_KEY = "wt_global_state";

function loadGlobal() {
  try {
    return JSON.parse(localStorage.getItem(GLOBAL_KEY)) || {
      currentModuleIndex: 0,  // какой модуль сейчас активен
      completedModules: [],   // массив id завершённых модулей
    };
  } catch (e) {
    return { currentModuleIndex: 0, completedModules: [] };
  }
}

function saveGlobal(g) {
  try { localStorage.setItem(GLOBAL_KEY, JSON.stringify(g)); } catch (e) {}
}

// ─── Module State ─────────────────────────────────────────────────────────────
function moduleKey(mod) { return `wt_state_${mod.id}`; }

function loadModuleState(mod) {
  try {
    return JSON.parse(localStorage.getItem(moduleKey(mod))) || {
      phase: "cards",     // cards | quiz | complete
      cardIndex: 0,
      quizIndex: 0,
      quizScore: 0,
    };
  } catch (e) {
    return { phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0 };
  }
}

function saveModuleState(mod, s) {
  try { localStorage.setItem(moduleKey(mod), JSON.stringify(s)); } catch (e) {}
}

// ─── UTM Builder ──────────────────────────────────────────────────────────────
function buildURL(baseUrl, utmContent) {
  // Партнёрские ссылки (track.gowt.me) уже имеют свои параметры —
  // просто добавляем UTM через & не перезаписывая bta/brand
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}utm_source=telegram_organic&utm_medium=tma&utm_campaign=${encodeURIComponent(utmContent.split("_")[0] + "_" + utmContent.split("_")[1])}&utm_content=${encodeURIComponent(utmContent)}`;
}

function openLink(url) {
  if (tg) tg.openLink(url);
  else window.open(url, "_blank");
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const TOTAL_STEPS = mod => mod.cards.length + mod.quiz.length;

function currentStep(mod, s) {
  if (s.phase === "cards")    return s.cardIndex + 1;
  if (s.phase === "quiz")     return mod.cards.length + s.quizIndex + 1;
  return TOTAL_STEPS(mod);
}

function currentAccent(mod, s) {
  if (s.phase === "cards") return mod.cards[s.cardIndex].accent;
  if (s.phase === "quiz")  return "#FFB830";
  return "#00C896";
}

// ─── Home Screen (список модулей) ─────────────────────────────────────────────
function renderHome() {
  const g = loadGlobal();

  document.getElementById("root").innerHTML = `
    <div style="min-height:100vh;background:#0a0a0f;padding:24px 20px 32px;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-60px;right:-60px;width:240px;height:240px;border-radius:50%;background:#6C63FF;opacity:.07;filter:blur(70px);pointer-events:none;"></div>

      <!-- Header -->
      <div style="margin-bottom:28px;">
        <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px;">Weltrade</div>
        <div style="font-size:24px;font-weight:800;color:#fff;letter-spacing:-.03em;line-height:1.2;">Academy</div>
        <div style="font-size:13px;color:rgba(255,255,255,.4);margin-top:6px;">Master trading, one module at a time.</div>
      </div>

      <!-- XP总计 -->
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px 16px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
        <span style="font-size:22px;">⚡</span>
        <div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase;">Total XP earned</div>
          <div style="font-size:22px;font-weight:800;color:#FFB830;">
            ${g.completedModules.reduce((acc, id) => {
              const m = MODULES.find(m => m.id === id);
              return acc + (m ? m.totalXP : 0);
            }, 0)} XP
          </div>
        </div>
        <div style="margin-left:auto;text-align:right;">
          <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase;">Completed</div>
          <div style="font-size:22px;font-weight:800;color:#fff;">${g.completedModules.length}/${MODULES.length}</div>
        </div>
      </div>

      <!-- Module list -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${MODULES.map((mod, idx) => {
          const done = g.completedModules.includes(mod.id);
          const active = idx === g.currentModuleIndex;
          const locked = idx > g.currentModuleIndex;
          const ms = loadModuleState(mod);
          const pct = done ? 100 : Math.round((currentStep(mod, ms) - 1) / TOTAL_STEPS(mod) * 100);

          const borderColor = done ? "#00C896" : active ? "#6C63FF" : "rgba(255,255,255,.08)";
          const numBg = done ? "rgba(0,200,150,.15)" : active ? "rgba(108,99,255,.15)" : "rgba(255,255,255,.04)";
          const numColor = done ? "#00C896" : active ? "#6C63FF" : "rgba(255,255,255,.3)";

          return `
          <div onclick="${locked ? "" : `startModule(${idx})`}" style="
            background:rgba(255,255,255,.04);
            border:1px solid ${borderColor};
            border-radius:16px;padding:16px;
            display:flex;align-items:center;gap:14px;
            cursor:${locked ? "default" : "pointer"};
            opacity:${locked ? .45 : 1};
            transition:opacity .2s;
          ">
            <div style="
              width:40px;height:40px;border-radius:50%;flex-shrink:0;
              background:${numBg};border:1.5px solid ${borderColor};
              display:flex;align-items:center;justify-content:center;
              font-size:${done ? "18px" : "13px"};font-weight:700;color:${numColor};
            ">${done ? "✓" : String(idx + 1).padStart(2, "0")}</div>

            <div style="flex:1;min-width:0;">
              <div style="font-size:14px;font-weight:700;color:${locked ? "rgba(255,255,255,.3)" : "#fff"};margin-bottom:3px;">${mod.title}</div>
              <div style="font-size:11px;color:rgba(255,255,255,.35);">${mod.cards.length} cards · ${mod.quiz.length} questions · +${mod.totalXP} XP</div>
              ${!done && !locked && pct > 0 ? `
              <div style="margin-top:8px;height:3px;background:rgba(255,255,255,.1);border-radius:999px;overflow:hidden;">
                <div style="height:100%;width:${pct}%;background:#6C63FF;border-radius:999px;"></div>
              </div>` : ""}
            </div>

            <div style="font-size:20px;flex-shrink:0;">
              ${done ? mod.badge.icon : locked ? "🔒" : "▶"}
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>
  `;
}

// ─── Start Module ─────────────────────────────────────────────────────────────
window.startModule = function(idx) {
  const g = loadGlobal();
  g.currentModuleIndex = idx;
  saveGlobal(g);
  const mod = MODULES[idx];
  const s = loadModuleState(mod);
  if (s.phase === "cards")     renderCard(mod, s);
  else if (s.phase === "quiz") renderQuiz(mod, s);
  else                         renderComplete(mod, s);
};

// ─── Shell ────────────────────────────────────────────────────────────────────
function renderShell(mod, s) {
  const acc = currentAccent(mod, s);
  const pct = Math.round((currentStep(mod, s) / TOTAL_STEPS(mod)) * 100);

  document.getElementById("root").innerHTML = `
    <div id="app" style="min-height:100vh;display:flex;flex-direction:column;background:#0a0a0f;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-80px;right:-80px;width:280px;height:280px;border-radius:50%;background:${acc};opacity:.07;filter:blur(70px);pointer-events:none;transition:background .6s;"></div>

      <!-- Header -->
      <div style="padding:16px 20px 14px;position:relative;z-index:1;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
          <button onclick="renderHome()" style="
            background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);
            border-radius:999px;padding:4px 12px;
            font-size:12px;color:rgba(255,255,255,.6);cursor:pointer;
          ">← Back</button>
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${mod.title}</div>
          <div style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:4px 10px;font-size:11px;color:rgba(255,255,255,.9);font-weight:700;flex-shrink:0;">⚡ ${mod.totalXP}</div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:7px;">
          <span style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;">PROGRESS</span>
          <span style="font-size:10px;color:rgba(255,255,255,.9);font-weight:700;">${currentStep(mod, s)}/${TOTAL_STEPS(mod)}</span>
        </div>
        <div style="height:4px;background:rgba(255,255,255,.12);border-radius:999px;overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:${acc};border-radius:999px;transition:width .5s ease;box-shadow:0 0 10px ${acc}70;"></div>
        </div>
      </div>

      <div id="content" style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:4px 20px 16px;position:relative;z-index:1;"></div>

      <!-- Dots -->
      <div style="display:flex;justify-content:center;align-items:center;gap:5px;padding-bottom:20px;z-index:1;">
        ${mod.cards.map((_, i) => `
          <div style="height:5px;border-radius:999px;transition:all .3s ease;
            width:${i === s.cardIndex && s.phase === "cards" ? 18 : 5}px;
            background:${i < s.cardIndex || s.phase !== "cards" ? acc : i === s.cardIndex && s.phase === "cards" ? acc : "rgba(255,255,255,.2)"};
            opacity:${i > s.cardIndex && s.phase === "cards" ? .4 : 1};
          "></div>`).join("")}
        <div style="height:5px;width:5px;border-radius:999px;transition:all .3s;background:${s.phase === "quiz" ? "#FFB830" : "rgba(255,255,255,.2)"};"></div>
      </div>
    </div>
  `;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function renderCard(mod, s) {
  renderShell(mod, s);
  const card = mod.cards[s.cardIndex];
  const isLast = s.cardIndex === mod.cards.length - 1;

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
        ${card.stat ? `
        <div style="margin-top:14px;background:rgba(255,255,255,.06);border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:12px;border-left:3px solid ${card.accent};">
          <span style="font-size:24px;font-weight:800;color:${card.accent};line-height:1;">${card.stat.value}</span>
          <span style="font-size:12px;color:rgba(255,255,255,.45);">${card.stat.label}</span>
        </div>` : ""}
      </div>

      <button onclick="nextCard()" style="width:100%;padding:15px 0;border:none;border-radius:14px;background:${card.accent};color:#0a0a0f;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 18px ${card.accent}44;${card.demoCTA ? "margin-bottom:10px;" : ""}">
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
let _quizRevealed = false;

function renderQuiz(mod, s) {
  renderShell(mod, s);
  _quizRevealed = false;
  const q = mod.quiz[s.quizIndex];
  const letters = ["A", "B", "C", "D"];

  $("content").innerHTML = `
    <div>
      <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(255,184,48,.15);border:1px solid rgba(255,184,48,.3);border-radius:999px;padding:3px 10px;margin-bottom:12px;">
        <span style="font-size:12px;">🎯</span>
        <span style="font-size:10px;font-weight:700;letter-spacing:.06em;color:#FFB830;">QUESTION ${s.quizIndex + 1} OF ${mod.quiz.length}</span>
      </div>
      <div style="font-size:19px;font-weight:800;color:#fff;line-height:1.3;margin-bottom:16px;letter-spacing:-.02em;">${q.question}</div>
      <div>
        ${q.options.map((opt, i) => `
          <div onclick="selectOption(${i})" id="opt-${i}" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;margin-bottom:8px;cursor:pointer;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);transition:all .2s;">
            <div id="ob-${i}" style="width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);font-size:11px;font-weight:700;color:rgba(255,255,255,.6);">${letters[i]}</div>
            <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.4;">${opt.text}</div>
          </div>`).join("")}
      </div>
      <div id="exp" style="display:none;border-radius:12px;padding:10px 14px;margin-bottom:12px;font-size:12px;color:rgba(255,255,255,.65);line-height:1.5;"></div>
      <button id="qnb" onclick="nextQuiz()" style="display:none;width:100%;padding:15px 0;border:none;border-radius:14px;background:#6C63FF;color:#fff;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 18px #6C63FF44;">
        ${s.quizIndex < mod.quiz.length - 1 ? "Next question →" : "Finish quiz 🏁"}
      </button>
    </div>
  `;
}

// ─── Complete ─────────────────────────────────────────────────────────────────
function renderComplete(mod, s) {
  const total = mod.quiz.length;
  const score = s.quizScore;
  const passed = score / total >= 0.66;
  const pct = Math.round((score / total) * 100);

  // Отмечаем модуль как завершённый
  if (passed) {
    const g = loadGlobal();
    if (!g.completedModules.includes(mod.id)) {
      g.completedModules.push(mod.id);
    }
    // Автоматически открываем следующий модуль
    const modIdx = MODULES.findIndex(m => m.id === mod.id);
    if (modIdx + 1 < MODULES.length) {
      g.currentModuleIndex = modIdx + 1;
    }
    saveGlobal(g);
  }

  document.getElementById("root").innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0a0a0f;padding:32px 20px;text-align:center;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:300px;height:300px;border-radius:50%;background:${passed ? "#00C896" : "#FF6B6B"};opacity:.07;filter:blur(80px);pointer-events:none;"></div>

      <div style="font-size:56px;margin-bottom:16px;">${passed ? mod.badge.icon : "📚"}</div>
      <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-.03em;margin-bottom:8px;">${passed ? "Great result!" : "Keep going!"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,.45);margin-bottom:28px;">${passed ? `${mod.title} complete` : "You can retake the quiz"}</div>

      <div style="width:110px;height:110px;border-radius:50%;border:3px solid ${passed ? "#00C896" : "#FF6B6B"};display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:28px;box-shadow:0 0 30px ${passed ? "rgba(0,200,150,.25)" : "rgba(255,107,107,.25)"};">
        <div style="font-size:28px;font-weight:800;color:${passed ? "#00C896" : "#FF6B6B"};line-height:1;">${score}/${total}</div>
        <div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:3px;">${pct}% correct</div>
      </div>

      ${passed ? `
      <div style="display:flex;gap:16px;align-items:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 24px;margin-bottom:20px;width:100%;max-width:320px;justify-content:center;">
        <div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase;">Earned</div>
          <div style="font-size:22px;font-weight:800;color:#FFB830;margin-top:2px;">+${mod.totalXP} XP</div>
        </div>
        <div style="width:1px;background:rgba(255,255,255,.1);align-self:stretch;"></div>
        <div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.05em;text-transform:uppercase;">Badge</div>
          <div style="font-size:22px;margin-top:4px;">${mod.badge.icon}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.5);margin-top:1px;">${mod.badge.name}</div>
        </div>
      </div>

      <!-- CTA: регистрация (главная конверсия) -->
      <button onclick="openRegister()" style="width:100%;max-width:320px;padding:15px 0;border:none;border-radius:14px;background:linear-gradient(135deg,#00C896,#6C63FF);color:#fff;font-size:16px;font-weight:700;cursor:pointer;margin-bottom:10px;">
        Create free account 🚀
      </button>

      <!-- CTA: следующий модуль (retention) -->
      <button onclick="goNextModule()" style="width:100%;max-width:320px;padding:13px 0;background:transparent;color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.15);border-radius:14px;font-size:14px;cursor:pointer;margin-bottom:10px;">
        Next module →
      </button>
      ` : ""}

      <button onclick="retryModule()" style="width:100%;max-width:320px;padding:13px 0;background:transparent;color:rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.08);border-radius:14px;font-size:13px;cursor:pointer;">
        ${passed ? "Back to Academy" : "Try again"}
      </button>
    </div>
  `;
}

// ─── Actions (вызываются из inline onclick) ───────────────────────────────────
function getCurrentMod() {
  const g = loadGlobal();
  return MODULES[g.currentModuleIndex];
}

function getCurrentState() {
  return loadModuleState(getCurrentMod());
}

window.nextCard = function() {
  const mod = getCurrentMod();
  const s = getCurrentState();
  const el = $("cw");
  if (el) { el.style.transform = "translateX(-60px)"; el.style.opacity = "0"; }
  setTimeout(() => {
    if (s.cardIndex < mod.cards.length - 1) {
      s.cardIndex++;
      saveModuleState(mod, s);
      renderCard(mod, s);
    } else {
      s.phase = "quiz"; s.quizIndex = 0; s.quizScore = 0;
      saveModuleState(mod, s);
      renderQuiz(mod, s);
    }
  }, 280);
};

window.selectOption = function(idx) {
  if (_quizRevealed) return;
  _quizRevealed = true;
  const mod = getCurrentMod();
  const s = getCurrentState();
  const q = mod.quiz[s.quizIndex];
  const ok = q.options[idx].correct;
  if (ok) s.quizScore++;
  saveModuleState(mod, s);

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

window.nextQuiz = function() {
  const mod = getCurrentMod();
  const s = getCurrentState();
  if (s.quizIndex < mod.quiz.length - 1) {
    s.quizIndex++;
    saveModuleState(mod, s);
    renderQuiz(mod, s);
  } else {
    s.phase = "complete";
    saveModuleState(mod, s);
    renderComplete(mod, s);
  }
};

window.goNextModule = function() {
  const g = loadGlobal();
  const nextIdx = Math.min(g.currentModuleIndex, MODULES.length - 1);
  if (nextIdx < MODULES.length) {
    startModule(nextIdx);
  } else {
    renderHome();
  }
};

window.retryModule = function() {
  const mod = getCurrentMod();
  const s = { phase: "cards", cardIndex: 0, quizIndex: 0, quizScore: 0 };
  saveModuleState(mod, s);
  renderCard(mod, s);
};

window.openDemo = function() {
  const mod = getCurrentMod();
  openLink(buildURL(mod.cta.demo.url, mod.cta.demo.utm_content));
};

window.openRegister = function() {
  const mod = getCurrentMod();
  openLink(buildURL(mod.cta.register.url, mod.cta.register.utm_content));
};

// ─── Boot ─────────────────────────────────────────────────────────────────────
renderHome();
