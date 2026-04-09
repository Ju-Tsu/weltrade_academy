// ─── Módulo 01: Introdução aos Mercados (PT-BR) ───────────────────────────────
window.WT_MODULES_PT = window.WT_MODULES_PT || [];

window.WT_MODULES_PT.push({
  id: "mod_01",
  title: "Introdução aos Mercados",
  totalXP: 150,
  badge: { icon: "🗺️", name: "Explorador" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod01_card_last_demo_cta_pt" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod01_complete_register_cta_pt" }
  },
  cards: [
    {
      tag: "Básico", icon: "🌐", accent: "#6C63FF",
      title: "O que é um mercado financeiro?",
      body: "Um mercado financeiro é onde compradores e vendedores trocam ativos — moedas, ações, commodities. Tudo acontece online, 24 horas por dia.",
    },
    {
      tag: "Forex", icon: "📊", accent: "#00C896",
      title: "O maior mercado do mundo",
      body: "O volume diário de negociações no Forex supera $7,5 trilhões. Os traders compram e vendem pares de moedas como EUR/USD, GBP/USD e USD/JPY.",
      stat: { value: "$7.5T", label: "negociados todos os dias" }
    },
    {
      tag: "Como funciona", icon: "📈", accent: "#FF6B6B",
      title: "Como os traders ganham dinheiro?",
      body: "Os traders lucram com a diferença de preços: comprar barato e vender caro (compra), ou vender caro e recomprar mais barato (venda). A diferença é seu lucro ou prejuízo.",
    },
    {
      tag: "Ferramentas", icon: "⚖️", accent: "#FFB830",
      title: "O que é alavancagem?",
      body: "A alavancagem permite controlar mais do que você deposita. Com alavancagem 1:100, $100 controla uma posição de $10.000. Amplifica tanto os ganhos quanto as perdas.",
    },
    {
      tag: "Pronto?", icon: "🏁", accent: "#A78BFA",
      title: "Você está pronto para sua primeira operação",
      body: "Você aprendeu o básico. O próximo passo é praticar em uma conta demo — sem risco, com condições reais do mercado.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "O que representa o preço do par EUR/USD?",
      options: [
        { text: "Quantos dólares são necessários para comprar 1 euro", correct: true },
        { text: "O valor do euro em ouro", correct: false },
        { text: "A comissão do corretor", correct: false },
        { text: "O volume total de negociações diárias", correct: false },
      ],
      explanation: "EUR/USD = 1,08 significa que 1 euro custa $1,08. A moeda base sempre vem primeiro."
    },
    {
      question: "Um trader abre uma posição vendida no EUR/USD. Quando ele lucra?",
      options: [
        { text: "Quando o preço sobe", correct: false },
        { text: "Quando o preço cai", correct: true },
        { text: "Quando o volume de negociações aumenta", correct: false },
        { text: "Independentemente do movimento do preço", correct: false },
      ],
      explanation: "Uma venda é uma aposta na queda. Você vende caro e recompra mais barato — a diferença é seu lucro."
    },
    {
      question: "Um trader tem $200 e usa alavancagem 1:50. Qual o tamanho da posição que ele controla?",
      options: [
        { text: "$2.000", correct: false },
        { text: "$5.000", correct: false },
        { text: "$10.000", correct: true },
        { text: "$50.000", correct: false },
      ],
      explanation: "$200 × 50 = $10.000. A alavancagem multiplica sua posição — e seu risco."
    },
  ]
});
