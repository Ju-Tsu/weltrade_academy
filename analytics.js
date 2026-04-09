// ─── Weltrade Academy Analytics — Amplitude ───────────────────────────────────
// 1. Зайди на amplitude.com → создай проект
// 2. Скопируй API Key из Settings → Projects
// 3. Замени 3e242237be5058e596a85ca238f9a9e0 на свой ключ

const AMPLITUDE_API_KEY = "3e242237be5058e596a85ca238f9a9e0";

// ─── Amplitude Init (через HTTP API, без SDK — не нужен npm) ─────────────────
// Используем Amplitude HTTP API v2 напрямую — работает в любом браузере
// без установки пакетов и сборки

let _deviceId = null;
let _userId = null;
let _sessionId = Date.now();

function getDeviceId() {
  if (_deviceId) return _deviceId;
  try {
    let id = localStorage.getItem("wt_amp_device_id");
    if (!id) {
      id = "wt_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem("wt_amp_device_id", id);
    }
    _deviceId = id;
    return id;
  } catch (e) {
    return "wt_unknown";
  }
}

// Достаём Telegram user_id если доступен
function initUserId() {
  try {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (tgUser?.id) {
      _userId = String(tgUser.id);
    }
  } catch (e) {}
}

initUserId();

// ─── Core track function ──────────────────────────────────────────────────────
function track(eventName, props = {}) {
  try {
    const event = {
      user_id:    _userId || undefined,
      device_id:  getDeviceId(),
      session_id: _sessionId,
      time:       Date.now(),
      event_type: eventName,
      event_properties: {
        platform: window.Telegram?.WebApp ? "telegram_tma" : "web_browser",
        ...props,
      },
    };

    // Amplitude HTTP API v2
    fetch("https://api2.amplitude.com/2/httpapi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: AMPLITUDE_API_KEY,
        events: [event],
      }),
      // keepalive позволяет отправить даже если страница закрывается
      keepalive: true,
    }).catch(() => {});
    // Тихий фейл — аналитика никогда не ломает приложение

  } catch (e) {}
}

// ─── Воронка: 5 ключевых событий ─────────────────────────────────────────────
// Именно эти события строят воронку в Amplitude → Charts → Funnel Analysis:
// academy_opened → module_started → quiz_started → module_completed → register_cta_clicked

// Шаг 1 воронки — открыл академию
window.trackAcademyOpened = function() {
  track("academy_opened");
};

// Шаг 2 воронки — начал модуль
window.trackModuleStarted = function(mod, index) {
  track("module_started", {
    module_id:    mod.id,
    module_title: mod.title,
    module_index: index,
  });
};

// Просмотр карточки — видим где люди останавливаются
window.trackCardViewed = function(mod, cardIndex, card) {
  track("card_viewed", {
    module_id:   mod.id,
    card_index:  cardIndex,
    card_tag:    card.tag,
  });
};

// Шаг 3 воронки — дошёл до квиза
window.trackQuizStarted = function(mod) {
  track("quiz_started", {
    module_id: mod.id,
  });
};

// Ответ на вопрос — видим какие вопросы срезают людей
window.trackQuizAnswer = function(mod, questionIndex, isCorrect) {
  track("quiz_answer_submitted", {
    module_id:      mod.id,
    question_index: questionIndex,
    is_correct:     isCorrect,
  });
};

// Шаг 4 воронки — завершил модуль
window.trackModuleCompleted = function(mod, score, total, totalXP) {
  track("module_completed", {
    module_id:    mod.id,
    module_title: mod.title,
    score_pct:    Math.round((score / total) * 100),
    xp_earned:    mod.totalXP,
    total_xp:     totalXP,
  });
};

// Провал квиза — видим где нужно упростить контент
window.trackModuleFailed = function(mod, score, total) {
  track("module_failed", {
    module_id:  mod.id,
    score_pct:  Math.round((score / total) * 100),
  });
};

// Шаг 5 воронки — нажал регистрацию
window.trackRegisterCTA = function(mod, totalXP) {
  track("register_cta_clicked", {
    module_id:   mod.id,
    total_xp:    totalXP,
    utm_content: mod.cta.register.utm_content,
  });
};

// Клик на демо
window.trackDemoCTA = function(mod) {
  track("demo_cta_clicked", {
    module_id:   mod.id,
    utm_content: mod.cta.demo.utm_content,
  });
};

// Клик "Next module"
window.trackNextModuleCTA = function(mod) {
  track("next_module_clicked", {
    module_id: mod.id,
  });
};
