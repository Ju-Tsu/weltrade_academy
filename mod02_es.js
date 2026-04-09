// ─── Módulo 02: Lectura de Gráficos (ES) ─────────────────────────────────────
window.WT_MODULES_ES = window.WT_MODULES_ES || [];

window.WT_MODULES_ES.push({
  id: "mod_02",
  title: "Lectura de Gráficos",
  totalXP: 200,
  badge: { icon: "📐", name: "Lector de Gráficos" },
  cta: {
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod02_card_last_demo_cta_es"
    },
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod02_complete_register_cta_es"
    }
  },
  cards: [
    {
      tag: "Velas",
      icon: "🕯️",
      accent: "#FF6B6B",
      title: "¿Qué es una vela japonesa?",
      body: "Cada vela muestra 4 precios para un período: Apertura, Máximo, Mínimo, Cierre. Una vela verde significa que el precio subió. Una roja significa que bajó. Es el lenguaje de todo trader.",
    },
    {
      tag: "Niveles",
      icon: "📐",
      accent: "#FFB830",
      title: "Soporte y resistencia",
      body: "El soporte es un nivel donde los compradores siguen entrando — el suelo. La resistencia es donde aparecen los vendedores — el techo. El precio rebota entre ellos hasta que rompe.",
      stat: { value: "S / R", label: "el concepto más usado en análisis técnico" }
    },
    {
      tag: "Tendencia",
      icon: "📈",
      accent: "#00C896",
      title: "La tendencia es tu amiga",
      body: "Tendencia alcista = máximos y mínimos más altos. Tendencia bajista = máximos y mínimos más bajos. Operar con la tendencia es más seguro — la mayoría de principiantes pierde yendo en contra.",
    },
    {
      tag: "Temporalidades",
      icon: "⏱️",
      accent: "#6C63FF",
      title: "¿Qué temporalidad usar?",
      body: "H1 y H4 son las mejores para principiantes — suficiente detalle sin ruido. M1 y M5 se mueven demasiado rápido. D1 es ideal para identificar la tendencia principal antes de entrar.",
    },
    {
      tag: "Volumen",
      icon: "📊",
      accent: "#A78BFA",
      title: "El volumen confirma los movimientos",
      body: "Una ruptura de precio con alto volumen es real. Una ruptura con bajo volumen a menudo falla y se revierte. Siempre verifica el volumen antes de entrar en una ruptura.",
    },
    {
      tag: "¿Listo?",
      icon: "🏁",
      accent: "#00C896",
      title: "Ya puedes leer un gráfico",
      body: "Velas, tendencias, soporte/resistencia, volumen — estos cuatro conceptos cubren el 80% de lo que usan los traders minoristas cada día. Abre un gráfico demo y encuéntralos tú mismo.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "Una vela japonesa verde significa que el precio...",
      options: [
        { text: "Cerró más alto de lo que abrió", correct: true },
        { text: "Cerró más bajo de lo que abrió", correct: false },
        { text: "No se movió durante el período", correct: false },
        { text: "Alcanzó un nuevo máximo histórico", correct: false },
      ],
      explanation: "Verde = cierre > apertura. El cuerpo de la vela muestra el rango apertura-cierre. Las mechas muestran el máximo y mínimo."
    },
    {
      question: "El precio rebota en el mismo nivel tres veces sin romperlo. Este nivel es probablemente...",
      options: [
        { text: "Una línea de tendencia", correct: false },
        { text: "Un nivel de soporte o resistencia", correct: true },
        { text: "Un pico de volumen", correct: false },
        { text: "Un límite de temporalidad", correct: false },
      ],
      explanation: "Cuantas más veces el precio respeta un nivel, más fuerte es. Tres toques lo convierten en una zona de S/R confirmada."
    },
    {
      question: "Ves una ruptura por encima de la resistencia. El volumen es muy bajo. ¿Qué debes hacer?",
      options: [
        { text: "Entrar inmediatamente — ruptura confirmada", correct: false },
        { text: "Esperar — las rupturas con bajo volumen suelen revertirse", correct: true },
        { text: "Cambiar a una temporalidad menor", correct: false },
        { text: "Buscar una señal bajista", correct: false },
      ],
      explanation: "El volumen valida las rupturas. Bajo volumen = poca convicción de los compradores. Alta probabilidad de un fallo y reversión."
    },
  ]
});
