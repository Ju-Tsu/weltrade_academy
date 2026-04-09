// ─── Módulo 03: Gestión de Riesgo (ES) ───────────────────────────────────────
window.WT_MODULES_ES = window.WT_MODULES_ES || [];

window.WT_MODULES_ES.push({
  id: "mod_03",
  title: "Gestión de Riesgo",
  totalXP: 250,
  badge: { icon: "🛡️", name: "Gestor de Riesgo" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod03_card_last_demo_cta_es" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod03_complete_register_cta_es" }
  },
  cards: [
    {
      tag: "Regla #1", icon: "🛡️", accent: "#FF6B6B",
      title: "Nunca arriesgues más del 2%",
      body: "La regla del 2%: nunca pongas más del 2% de tu cuenta en una sola operación. En una cuenta de $1,000 son $20 por operación. Esto te mantiene en el juego incluso tras 10 pérdidas seguidas.",
      stat: { value: "2%", label: "riesgo máximo por operación — la regla de oro" }
    },
    {
      tag: "Stop-Loss", icon: "🚫", accent: "#FFB830",
      title: "¿Qué es un stop-loss?",
      body: "Un stop-loss es una orden de salida automática. La configuras antes de entrar en una operación. Si el precio se mueve en tu contra hasta ese nivel, la operación se cierra automáticamente.",
    },
    {
      tag: "Take-Profit", icon: "🎯", accent: "#00C896",
      title: "Asegura tus ganancias",
      body: "Una orden de take-profit cierra tu operación automáticamente cuando el precio alcanza tu objetivo. No necesitas estar frente a la pantalla. Configúrala y deja que el mercado trabaje.",
    },
    {
      tag: "Ratio R:R", icon: "⚖️", accent: "#6C63FF",
      title: "Ratio riesgo-recompensa",
      body: "Apunta siempre a un mínimo de 1:2 — arriesga $1 para ganar $2. Con un ratio 1:2 puedes estar equivocado la mitad del tiempo y seguir siendo rentable.",
      stat: { value: "1:2", label: "ratio riesgo-recompensa mínimo objetivo" }
    },
    {
      tag: "Tamaño", icon: "📏", accent: "#A78BFA",
      title: "Cómo calcular el tamaño de posición",
      body: "Tamaño = (Cuenta × % Riesgo) ÷ Distancia del stop-loss. Ejemplo: cuenta $1,000, riesgo 2%, stop 50 pips = $20 ÷ 50 = $0.40 por pip. Siempre calcula antes de entrar.",
    },
    {
      tag: "¿Listo?", icon: "🏁", accent: "#00C896",
      title: "Estás listo para operar con seguridad",
      body: "Stop-loss, take-profit, tamaño de posición, regla del 2% — esto separa a los traders que duran de los que quiebran su cuenta. Ahora tienes todas las herramientas.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "Tienes una cuenta de $500 y sigues la regla del 2%. ¿Cuál es el máximo que arriesgas en una operación?",
      options: [
        { text: "$2", correct: false },
        { text: "$10", correct: true },
        { text: "$50", correct: false },
        { text: "$100", correct: false },
      ],
      explanation: "$500 × 2% = $10. Esto mantiene las pérdidas lo suficientemente pequeñas para recuperarse sin daño emocional."
    },
    {
      question: "¿Qué hace una orden stop-loss?",
      options: [
        { text: "Asegura ganancias cuando el precio alcanza tu objetivo", correct: false },
        { text: "Cierra automáticamente una operación perdedora en un nivel predeterminado", correct: true },
        { text: "Evita que abras una operación", correct: false },
        { text: "Duplica tu posición cuando el precio cae", correct: false },
      ],
      explanation: "Un stop-loss sale de tu operación automáticamente si el precio se mueve en tu contra hasta un nivel prefijado, limitando tu pérdida."
    },
    {
      question: "Arriesgas $30 en una operación. ¿Cuál es el objetivo mínimo de ganancia para un ratio 1:2?",
      options: [
        { text: "$15", correct: false },
        { text: "$30", correct: false },
        { text: "$60", correct: true },
        { text: "$90", correct: false },
      ],
      explanation: "1:2 significa que apuntas al doble de lo que arriesgas. $30 × 2 = $60. Así, incluso con un 50% de aciertos eres rentable."
    },
  ]
});

// ─── Módulo 04: Tu Primera Operación (ES) ────────────────────────────────────
window.WT_MODULES_ES.push({
  id: "mod_04",
  title: "Tu Primera Operación",
  totalXP: 300,
  badge: { icon: "🚀", name: "Primer Trader" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod04_card_last_demo_cta_es" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod04_complete_register_cta_es" }
  },
  cards: [
    {
      tag: "Paso 1", icon: "🔍", accent: "#6C63FF",
      title: "Elige tu par",
      body: "Empieza con EUR/USD o GBP/USD — los pares más líquidos, menores spreads, comportamiento predecible. Evita los pares exóticos hasta tener 50+ operaciones de experiencia.",
    },
    {
      tag: "Paso 2", icon: "📋", accent: "#FFB830",
      title: "Verifica la tendencia principal",
      body: "Primero abre el gráfico D1 (diario). ¿El precio está en tendencia alcista o bajista? Opera solo en la dirección de la tendencia diaria. Este único hábito duplica tu tasa de aciertos.",
    },
    {
      tag: "Paso 3", icon: "📍", accent: "#FF6B6B",
      title: "Encuentra tu entrada",
      body: "Baja a H1. Busca el precio cerca de un soporte en tendencia alcista. Espera que cierre una vela verde por encima del nivel. Esa es tu señal de entrada.",
    },
    {
      tag: "Paso 4", icon: "🛡️", accent: "#00C896",
      title: "Configura tu SL y TP",
      body: "Coloca el stop-loss justo por debajo del soporte. Configura el take-profit al doble de la distancia del stop. Haz clic en Comprar. Tu operación ahora se gestiona automáticamente.",
    },
    {
      tag: "Paso 5", icon: "⏳", accent: "#A78BFA",
      title: "Ahora no hagas nada",
      body: "La parte más difícil del trading es esperar. No muevas el stop-loss. No cierres antes de tiempo. Deja que el precio alcance tu TP o SL. Interferir con operaciones abiertas es el error #1.",
    },
    {
      tag: "¿Listo?", icon: "🏁", accent: "#00C896",
      title: "Tienes un proceso de trading",
      body: "Elige par → verifica tendencia diaria → encuentra entrada en H1 → configura SL/TP → espera. Ese es un proceso completo. Repítelo 20 veces en demo antes de operar en real.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "¿Por qué los principiantes deben empezar con EUR/USD en lugar de pares exóticos?",
      options: [
        { text: "Los pares exóticos tienen menores spreads", correct: false },
        { text: "EUR/USD tiene mayor liquidez y menores spreads", correct: true },
        { text: "EUR/USD siempre sube", correct: false },
        { text: "Los pares exóticos son solo para instituciones", correct: false },
      ],
      explanation: "Alta liquidez = spreads ajustados = menor costo por operación. EUR/USD es el par más negociado del mundo — ideal para aprender."
    },
    {
      question: "Estás en tendencia alcista en D1. En H1 ves el precio retroceder al soporte. ¿Qué buscas?",
      options: [
        { text: "Una vela roja cerrando por debajo del soporte — ir corto", correct: false },
        { text: "Una vela verde cerrando por encima del soporte — ir largo", correct: true },
        { text: "Cambiar a M1 para una señal más rápida", correct: false },
        { text: "Esperar a que cierre la vela diaria primero", correct: false },
      ],
      explanation: "Operar con la tendencia + entrada en soporte = configuración de alta probabilidad. Una vela verde confirmatoria reduce las entradas falsas."
    },
    {
      question: "Tu operación está abierta y se mueve a tu favor. Sientes la tentación de mover el stop-loss más lejos. ¿Qué debes hacer?",
      options: [
        { text: "Moverlo — más espacio significa menos riesgo", correct: false },
        { text: "Cerrar la operación manualmente para asegurar ganancias", correct: false },
        { text: "No hacer nada — respeta tu plan original", correct: true },
        { text: "Añadir a la posición mientras está ganando", correct: false },
      ],
      explanation: "Mover el stop-loss más lejos aumenta el riesgo. Tu plan original se estableció sin emociones. Confía en el proceso."
    },
  ]
});

// ─── Módulo 05: Psicología del Trading (ES) ───────────────────────────────────
window.WT_MODULES_ES.push({
  id: "mod_05",
  title: "Psicología del Trading",
  totalXP: 350,
  badge: { icon: "👑", name: "Graduado de la Academia" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod05_card_last_demo_cta_es" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod05_complete_register_cta_es" }
  },
  cards: [
    {
      tag: "Enemigo #1", icon: "😱", accent: "#FF6B6B",
      title: "FOMO — miedo a quedarse fuera",
      body: "Ves un par que ya se movió 200 pips. Entras tarde, revierte, pierdes. El FOMO te hace perseguir movimientos que ya terminaron. El mercado siempre dará otra oportunidad — la paciencia es una ventaja.",
    },
    {
      tag: "Enemigo #2", icon: "😤", accent: "#FFB830",
      title: "Trading de venganza",
      body: "Acabas de perder una operación. Inmediatamente abres otra más grande para recuperarla. Esto es trading de venganza — la forma más rápida de quebrar una cuenta. Cierra la aplicación y aléjate.",
    },
    {
      tag: "Enemigo #3", icon: "🤑", accent: "#A78BFA",
      title: "Exceso de confianza tras racha ganadora",
      body: "Ganaste 5 operaciones seguidas. Te sientes invencible. Aumentas el tamaño. Rompes tus reglas. Luego una operación borra las últimas cinco. Las rachas ganadoras terminan. Las reglas existen para esos momentos.",
    },
    {
      tag: "La Ventaja", icon: "🧘", accent: "#6C63FF",
      title: "Proceso sobre resultado",
      body: "Una buena operación puede perder. Una mala operación puede ganar. Tu trabajo no es predecir el mercado — es ejecutar tu proceso correctamente cada vez. Juzga el proceso, no el resultado.",
      stat: { value: "Proceso", label: "es lo único que puedes controlar" }
    },
    {
      tag: "Hábito", icon: "📓", accent: "#00C896",
      title: "Mantén un diario de trading",
      body: "Después de cada operación escribe: razón de entrada, niveles de SL/TP, resultado y cómo te sentiste. Los patrones emergen después de 30 entradas. Verás qué configuraciones funcionan y qué estados emocionales llevan a malas decisiones.",
    },
    {
      tag: "Lo lograste", icon: "👑", accent: "#FFB830",
      title: "Ahora estás en el top 10%",
      body: "La mayoría de traders nunca estudia psicología. Tú sí. Entiendes el FOMO, el trading de venganza, el tamaño de posición, la gestión de riesgo y la lectura de gráficos. Tienes todo lo que necesitas — úsalo.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "EUR/USD acaba de moverse 150 pips en 30 minutos. No lo atrapaste. ¿Qué debes hacer?",
      options: [
        { text: "Entrar ahora — el impulso continuará", correct: false },
        { text: "Esperar la próxima oportunidad — no perseguir", correct: true },
        { text: "Abrir una posición más grande para compensar", correct: false },
        { text: "Cambiar inmediatamente a otro par", correct: false },
      ],
      explanation: "Perseguir movimientos es el FOMO en acción. Entrar tarde en un movimiento de 150 pips significa comprar en el techo. La próxima oportunidad llegará."
    },
    {
      question: "Acabas de perder dos operaciones seguidas. Sientes el impulso de abrir una tercera inmediatamente para recuperar. ¿Cómo se llama esto?",
      options: [
        { text: "Una estrategia de cobertura", correct: false },
        { text: "Trading de venganza", correct: true },
        { text: "Escalar la posición", correct: false },
        { text: "Promedio de costo en dólares", correct: false },
      ],
      explanation: "El trading de venganza es operar emocionalmente tras una pérdida. Lleva a sobredimensionar, romper reglas y pérdidas mayores. Mejor alejarse."
    },
    {
      question: "Seguiste tu plan de trading perfectamente pero la operación alcanzó tu stop-loss. ¿Cómo debes evaluar esta operación?",
      options: [
        { text: "Como un fracaso — perdiste dinero", correct: false },
        { text: "Como una buena operación — ejecutaste tu proceso correctamente", correct: true },
        { text: "Como señal para cambiar tu estrategia inmediatamente", correct: false },
        { text: "Como razón para saltarte la próxima oportunidad", correct: false },
      ],
      explanation: "Una pérdida no hace que una operación sea mala. Si seguiste tus reglas, fue una buena operación. Las pérdidas son parte de cualquier sistema. Juzga el proceso, no el resultado."
    },
  ]
});
