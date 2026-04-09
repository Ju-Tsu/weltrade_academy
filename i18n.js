// ─── Weltrade Academy i18n v2 ─────────────────────────────────────────────────
// EN + ES + PT-BR
// Добавить язык: 1) новый блок в WT_I18N, 2) mod0X_XX.js файлы
// PT = Português Brasileiro (Brasil)

window.WT_I18N = {

  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    brand: "Weltrade", home_title: "Academy",
    home_subtitle: "Master trading, one module at a time.",
    total_xp: "Total XP earned", completed: "Completed",
    cards_label: "cards", questions: "questions",
    progress: "PROGRESS", back: "← Back",
    next_btn: "Next →", quiz_btn: "Take the quiz 🎯",
    demo_btn: "Try demo account first →",
    question_of: "QUESTION", of: "OF",
    correct: "Correct! ", not_quite: "Not quite. ",
    next_question: "Next question →", finish_quiz: "Finish quiz 🏁",
    great_result: "Great result!", keep_going: "Keep going!",
    complete_sub: "complete", retake_sub: "You can retake the quiz",
    earned: "EARNED", badge: "BADGE",
    create_account: "Create free account 🚀",
    next_module: "Next module →",
    back_academy: "Back to Academy", try_again: "Try again",
    your_bonus: "🎁 Your bonus code", copy_code: "Copy code",
    copied: "✓ Copied!", promo_hint: "Use this code when registering on Weltrade",
    lang_switcher: "Language",
  },

  // ─── Español ───────────────────────────────────────────────────────────────
  es: {
    brand: "Weltrade", home_title: "Academia",
    home_subtitle: "Domina el trading, un módulo a la vez.",
    total_xp: "XP total ganado", completed: "Completado",
    cards_label: "tarjetas", questions: "preguntas",
    progress: "PROGRESO", back: "← Atrás",
    next_btn: "Siguiente →", quiz_btn: "Hacer el quiz 🎯",
    demo_btn: "Probar cuenta demo primero →",
    question_of: "PREGUNTA", of: "DE",
    correct: "¡Correcto! ", not_quite: "No del todo. ",
    next_question: "Siguiente pregunta →", finish_quiz: "Terminar quiz 🏁",
    great_result: "¡Excelente resultado!", keep_going: "¡Sigue adelante!",
    complete_sub: "completado", retake_sub: "Puedes repetir el quiz",
    earned: "GANADO", badge: "INSIGNIA",
    create_account: "Crear cuenta gratis 🚀",
    next_module: "Siguiente módulo →",
    back_academy: "Volver a la Academia", try_again: "Intentar de nuevo",
    your_bonus: "🎁 Tu código de bono", copy_code: "Copiar código",
    copied: "✓ ¡Copiado!", promo_hint: "Usa este código al registrarte en Weltrade",
    lang_switcher: "Idioma",
  },

  // ─── Português Brasileiro ──────────────────────────────────────────────────
  pt: {
    brand: "Weltrade", home_title: "Academia",
    home_subtitle: "Domine o trading, um módulo por vez.",
    total_xp: "XP total ganho", completed: "Concluído",
    cards_label: "cartões", questions: "perguntas",
    progress: "PROGRESSO", back: "← Voltar",
    next_btn: "Próximo →", quiz_btn: "Fazer o quiz 🎯",
    demo_btn: "Experimentar conta demo primeiro →",
    question_of: "QUESTÃO", of: "DE",
    correct: "Correto! ", not_quite: "Não exatamente. ",
    next_question: "Próxima pergunta →", finish_quiz: "Terminar quiz 🏁",
    great_result: "Ótimo resultado!", keep_going: "Continue assim!",
    complete_sub: "concluído", retake_sub: "Você pode refazer o quiz",
    earned: "GANHO", badge: "EMBLEMA",
    create_account: "Criar conta grátis 🚀",
    next_module: "Próximo módulo →",
    back_academy: "Voltar à Academia", try_again: "Tentar novamente",
    your_bonus: "🎁 Seu código de bônus", copy_code: "Copiar código",
    copied: "✓ Copiado!", promo_hint: "Use este código ao se registrar na Weltrade",
    lang_switcher: "Idioma",
  },

};

// ─── Language Detection ───────────────────────────────────────────────────────
// Приоритет: 1) сохранённый выбор юзера → 2) startapp параметр → 3) Telegram → 4) браузер → 5) EN

window.WT_LANG = (function() {
  try {
    // 1. Юзер вручную выбрал язык ранее
    const saved = localStorage.getItem("wt_lang");
    if (saved && window.WT_I18N[saved]) return saved;

    // 2. Форсированный язык через startapp параметр инфлюенсера
    const startParam = window.Telegram?.WebApp?.initDataUnsafe?.start_param || "";
    if (startParam.endsWith("_es")) return "es";
    if (startParam.endsWith("_pt")) return "pt";
    if (startParam.endsWith("_en")) return "en";

    // 3. Язык Telegram
    const tgLang = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code || "";
    if (tgLang.startsWith("es")) return "es";
    if (tgLang.startsWith("pt")) return "pt";

    // 4. Язык браузера (fallback для тестов вне Telegram)
    const bl = navigator.language || "";
    if (bl.startsWith("es")) return "es";
    if (bl.startsWith("pt")) return "pt";

  } catch (e) {}
  return "en";
})();

// ─── t() — функция перевода ───────────────────────────────────────────────────
window.t = function(key) {
  const lang = window.WT_LANG;
  return (window.WT_I18N[lang]?.[key])
    || (window.WT_I18N["en"]?.[key])
    || key;
};

// ─── setLang() — ручное переключение языка ────────────────────────────────────
window.setLang = function(lang) {
  if (!window.WT_I18N[lang]) return;
  try { localStorage.setItem("wt_lang", lang); } catch (e) {}
  window.WT_LANG = lang;
  // Перезагружаем модули под новый язык и рендерим home
  const key = `WT_MODULES_${lang.toUpperCase()}`;
  if (lang !== "en" && window[key]?.length) {
    // Пересобираем MODULES — engine.js читает его как const,
    // поэтому патчим через глобальный флаг
    window._WT_ACTIVE_MODULES = window[key];
  } else {
    window._WT_ACTIVE_MODULES = window.WT_MODULES;
  }
  window.renderHome?.();
};

console.log("WT Lang:", window.WT_LANG);
