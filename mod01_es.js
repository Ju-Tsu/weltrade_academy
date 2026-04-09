// ─── Módulo 01: Introducción a los Mercados (ES) ─────────────────────────────
window.WT_MODULES_ES = window.WT_MODULES_ES || [];

window.WT_MODULES_ES.push({
  id: "mod_01",
  title: "Introducción a los Mercados",
  totalXP: 150,
  badge: { icon: "🗺️", name: "Explorador" },
  cta: {
    demo: {
      url: "https://www.weltrade.com/education/account/",
      utm_content: "mod01_card_last_demo_cta_es"
    },
    register: {
      url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade",
      utm_content: "mod01_complete_register_cta_es"
    }
  },
  cards: [
    {
      tag: "Básicos",
      icon: "🌐",
      accent: "#6C63FF",
      title: "¿Qué es un mercado financiero?",
      body: "Un mercado financiero es un lugar donde compradores y vendedores intercambian activos — divisas, acciones, materias primas. Todo ocurre en línea, las 24 horas del día.",
    },
    {
      tag: "Forex",
      icon: "📊",
      accent: "#00C896",
      title: "El mercado más grande del mundo",
      body: "El volumen diario de operaciones en Forex supera los $7.5 billones. Los traders compran y venden pares de divisas como EUR/USD, GBP/USD y USD/JPY.",
      stat: { value: "$7.5T", label: "operados cada día" }
    },
    {
      tag: "Cómo funciona",
      icon: "📈",
      accent: "#FF6B6B",
      title: "¿Cómo ganan dinero los traders?",
      body: "Los traders ganan con la diferencia de precios: comprar barato y vender caro (largo), o vender caro y recomprar más barato (corto). La diferencia es tu ganancia o pérdida.",
    },
    {
      tag: "Herramientas",
      icon: "⚖️",
      accent: "#FFB830",
      title: "¿Qué es el apalancamiento?",
      body: "El apalancamiento te permite controlar más de lo que depositas. Con apalancamiento 1:100, $100 controla una posición de $10,000. Amplifica tanto las ganancias como las pérdidas.",
    },
    {
      tag: "¿Listo?",
      icon: "🏁",
      accent: "#A78BFA",
      title: "Estás listo para tu primera operación",
      body: "Aprendiste los fundamentos. El siguiente paso es practicar en una cuenta demo — sin riesgo, con condiciones reales del mercado.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "¿Qué representa el precio del par EUR/USD?",
      options: [
        { text: "Cuántos dólares se necesitan para comprar 1 euro", correct: true },
        { text: "El valor del euro en oro", correct: false },
        { text: "La comisión del broker", correct: false },
        { text: "El volumen total de operaciones diarias", correct: false },
      ],
      explanation: "EUR/USD = 1.08 significa que 1 euro cuesta $1.08. La divisa base siempre va primero."
    },
    {
      question: "Un trader abre una posición corta en EUR/USD. ¿Cuándo gana?",
      options: [
        { text: "Cuando el precio sube", correct: false },
        { text: "Cuando el precio baja", correct: true },
        { text: "Cuando el volumen de operaciones aumenta", correct: false },
        { text: "Independientemente del movimiento del precio", correct: false },
      ],
      explanation: "Un corto es una apuesta a la baja. Vendes caro y recompras más barato — la diferencia es tu ganancia."
    },
    {
      question: "Un trader tiene $200 y usa apalancamiento 1:50. ¿Qué tamaño de posición controla?",
      options: [
        { text: "$2,000", correct: false },
        { text: "$5,000", correct: false },
        { text: "$10,000", correct: true },
        { text: "$50,000", correct: false },
      ],
      explanation: "$200 × 50 = $10,000. El apalancamiento multiplica tu posición — y tu riesgo."
    },
  ]
});
