// ─── Módulo 02: Leitura de Gráficos (PT-BR) ──────────────────────────────────
window.WT_MODULES_PT = window.WT_MODULES_PT || [];

window.WT_MODULES_PT.push({
  id: "mod_02",
  title: "Leitura de Gráficos",
  totalXP: 200,
  badge: { icon: "📐", name: "Leitor de Gráficos" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod02_card_last_demo_cta_pt" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod02_complete_register_cta_pt" }
  },
  cards: [
    {
      tag: "Candles", icon: "🕯️", accent: "#FF6B6B",
      title: "O que é um candle?",
      body: "Cada candle mostra 4 preços de um período: Abertura, Máxima, Mínima, Fechamento. Um candle verde significa que o preço subiu. Um vermelho significa que caiu. É a linguagem de todo trader.",
    },
    {
      tag: "Níveis", icon: "📐", accent: "#FFB830",
      title: "Suporte e resistência",
      body: "Suporte é um nível onde os compradores continuam entrando — o chão. Resistência é onde os vendedores aparecem — o teto. O preço oscila entre eles até romper.",
      stat: { value: "S / R", label: "conceito mais usado na análise técnica" }
    },
    {
      tag: "Tendência", icon: "📈", accent: "#00C896",
      title: "A tendência é sua amiga",
      body: "Tendência de alta = máximas e mínimas cada vez mais altas. Tendência de baixa = máximas e mínimas cada vez mais baixas. Operar com a tendência é mais seguro — a maioria dos iniciantes perde indo contra ela.",
    },
    {
      tag: "Timeframes", icon: "⏱️", accent: "#6C63FF",
      title: "Qual timeframe usar?",
      body: "H1 e H4 são os melhores para iniciantes — detalhes suficientes sem ruído. M1 e M5 se movem rápido demais. D1 é ótimo para identificar a tendência principal antes de entrar.",
    },
    {
      tag: "Volume", icon: "📊", accent: "#A78BFA",
      title: "Volume confirma movimentos",
      body: "Um rompimento com alto volume é real. Com baixo volume costuma falhar e reverter. Sempre verifique o volume antes de entrar em um rompimento.",
    },
    {
      tag: "Pronto?", icon: "🏁", accent: "#00C896",
      title: "Você já sabe ler um gráfico",
      body: "Candles, tendências, suporte/resistência, volume — esses quatro conceitos cobrem 80% do que traders usam todo dia. Abra um gráfico demo e encontre-os você mesmo.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "Um candle verde significa que o preço...",
      options: [
        { text: "Fechou mais alto do que abriu", correct: true },
        { text: "Fechou mais baixo do que abriu", correct: false },
        { text: "Não se moveu durante o período", correct: false },
        { text: "Atingiu uma nova máxima histórica", correct: false },
      ],
      explanation: "Verde = fechamento > abertura. O corpo do candle mostra o intervalo abertura-fechamento. As sombras mostram máxima e mínima."
    },
    {
      question: "O preço rebate no mesmo nível três vezes sem rompê-lo. Esse nível é provavelmente...",
      options: [
        { text: "Uma linha de tendência", correct: false },
        { text: "Um nível de suporte ou resistência", correct: true },
        { text: "Um pico de volume", correct: false },
        { text: "Um limite de timeframe", correct: false },
      ],
      explanation: "Quanto mais vezes o preço respeita um nível, mais forte ele é. Três toques confirmam uma zona de S/R."
    },
    {
      question: "Você vê um rompimento acima da resistência. O volume está muito baixo. O que fazer?",
      options: [
        { text: "Entrar imediatamente — rompimento confirmado", correct: false },
        { text: "Aguardar — rompimentos com baixo volume costumam reverter", correct: true },
        { text: "Mudar para um timeframe menor", correct: false },
        { text: "Procurar sinal de baixa", correct: false },
      ],
      explanation: "Volume valida rompimentos. Baixo volume = pouca convicção dos compradores. Alta probabilidade de falha e reversão."
    },
  ]
});

// ─── Módulo 03: Gestão de Risco (PT-BR) ──────────────────────────────────────
window.WT_MODULES_PT.push({
  id: "mod_03",
  title: "Gestão de Risco",
  totalXP: 250,
  badge: { icon: "🛡️", name: "Gestor de Risco" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod03_card_last_demo_cta_pt" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod03_complete_register_cta_pt" }
  },
  cards: [
    {
      tag: "Regra #1", icon: "🛡️", accent: "#FF6B6B",
      title: "Nunca arrisque mais de 2%",
      body: "A regra dos 2%: nunca coloque mais de 2% da sua conta em uma única operação. Em uma conta de $1.000, isso é $20 por operação. Isso mantém você no jogo mesmo após 10 perdas seguidas.",
      stat: { value: "2%", label: "risco máximo por operação — a regra de ouro" }
    },
    {
      tag: "Stop-Loss", icon: "🚫", accent: "#FFB830",
      title: "O que é um stop-loss?",
      body: "Um stop-loss é uma ordem de saída automática. Você define antes de entrar na operação. Se o preço se mover contra você até esse nível, a operação fecha automaticamente — limitando sua perda.",
    },
    {
      tag: "Take-Profit", icon: "🎯", accent: "#00C896",
      title: "Garanta seus lucros",
      body: "Uma ordem take-profit fecha sua operação automaticamente quando o preço atinge seu alvo. Você não precisa ficar na tela. Configure e deixe o mercado trabalhar.",
    },
    {
      tag: "Ratio R:R", icon: "⚖️", accent: "#6C63FF",
      title: "Relação risco-retorno",
      body: "Sempre mire no mínimo 1:2 — arrisque $1 para ganhar $2. Com ratio 1:2, você pode errar metade das vezes e ainda ser lucrativo.",
      stat: { value: "1:2", label: "relação risco-retorno mínima a buscar" }
    },
    {
      tag: "Tamanho", icon: "📏", accent: "#A78BFA",
      title: "Como calcular o tamanho da posição",
      body: "Tamanho = (Conta × % Risco) ÷ Distância do stop-loss. Exemplo: conta $1.000, risco 2%, stop 50 pips = $20 ÷ 50 = $0,40 por pip. Sempre calcule antes de entrar.",
    },
    {
      tag: "Pronto?", icon: "🏁", accent: "#00C896",
      title: "Você está pronto para operar com segurança",
      body: "Stop-loss, take-profit, tamanho de posição, regra dos 2% — isso separa traders que duram dos que quebram a conta. Agora você tem o kit completo.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "Você tem uma conta de $500 e segue a regra dos 2%. Qual o máximo que arrisca em uma operação?",
      options: [
        { text: "$2", correct: false },
        { text: "$10", correct: true },
        { text: "$50", correct: false },
        { text: "$100", correct: false },
      ],
      explanation: "$500 × 2% = $10. Isso mantém as perdas pequenas o suficiente para se recuperar sem dano emocional."
    },
    {
      question: "O que uma ordem stop-loss faz?",
      options: [
        { text: "Garante lucro quando o preço atinge seu alvo", correct: false },
        { text: "Fecha automaticamente uma operação perdedora em um nível pré-definido", correct: true },
        { text: "Impede você de abrir uma operação", correct: false },
        { text: "Dobra sua posição quando o preço cai", correct: false },
      ],
      explanation: "Um stop-loss sai da sua operação automaticamente se o preço se mover contra você até um nível pré-fixado, limitando sua perda."
    },
    {
      question: "Você arrisca $30 em uma operação. Qual o alvo mínimo de lucro para ratio 1:2?",
      options: [
        { text: "$15", correct: false },
        { text: "$30", correct: false },
        { text: "$60", correct: true },
        { text: "$90", correct: false },
      ],
      explanation: "1:2 significa mirar no dobro do que você arrisca. $30 × 2 = $60. Assim, mesmo com 50% de acerto você é lucrativo."
    },
  ]
});

// ─── Módulo 04: Sua Primeira Operação (PT-BR) ─────────────────────────────────
window.WT_MODULES_PT.push({
  id: "mod_04",
  title: "Sua Primeira Operação",
  totalXP: 300,
  badge: { icon: "🚀", name: "Primeiro Trader" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod04_card_last_demo_cta_pt" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod04_complete_register_cta_pt" }
  },
  cards: [
    {
      tag: "Passo 1", icon: "🔍", accent: "#6C63FF",
      title: "Escolha seu par",
      body: "Comece com EUR/USD ou GBP/USD — os pares mais líquidos, menores spreads, comportamento previsível. Evite pares exóticos até ter 50+ operações de experiência.",
    },
    {
      tag: "Passo 2", icon: "📋", accent: "#FFB830",
      title: "Verifique a tendência principal",
      body: "Primeiro abra o gráfico D1 (diário). O preço está em tendência de alta ou baixa? Opere apenas na direção da tendência diária. Esse único hábito dobra sua taxa de acerto.",
    },
    {
      tag: "Passo 3", icon: "📍", accent: "#FF6B6B",
      title: "Encontre sua entrada",
      body: "Desça para H1. Procure o preço perto de um suporte em tendência de alta. Aguarde um candle verde fechar acima do nível. Esse é seu sinal de entrada.",
    },
    {
      tag: "Passo 4", icon: "🛡️", accent: "#00C896",
      title: "Defina seu SL e TP",
      body: "Coloque o stop-loss logo abaixo do suporte. Defina o take-profit no dobro da distância do stop. Clique em Comprar. Sua operação agora é gerenciada automaticamente.",
    },
    {
      tag: "Passo 5", icon: "⏳", accent: "#A78BFA",
      title: "Agora não faça nada",
      body: "A parte mais difícil do trading é esperar. Não mova o stop-loss. Não feche antes do tempo. Deixe o preço atingir seu TP ou SL. Interferir com operações abertas é o erro #1.",
    },
    {
      tag: "Pronto?", icon: "🏁", accent: "#00C896",
      title: "Você tem um processo de trading",
      body: "Escolha par → verifique tendência diária → encontre entrada no H1 → defina SL/TP → espere. Esse é um processo completo. Repita 20 vezes no demo antes de operar de verdade.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "Por que iniciantes devem começar com EUR/USD em vez de pares exóticos?",
      options: [
        { text: "Pares exóticos têm spreads menores", correct: false },
        { text: "EUR/USD tem maior liquidez e spreads menores", correct: true },
        { text: "EUR/USD sempre sobe", correct: false },
        { text: "Pares exóticos são só para instituições", correct: false },
      ],
      explanation: "Alta liquidez = spreads pequenos = menor custo por operação. EUR/USD é o par mais negociado do mundo — ideal para aprender."
    },
    {
      question: "Você está em tendência de alta no D1. No H1 vê o preço recuar para o suporte. O que buscar?",
      options: [
        { text: "Candle vermelho fechando abaixo do suporte — vender", correct: false },
        { text: "Candle verde fechando acima do suporte — comprar", correct: true },
        { text: "Mudar para M1 para sinal mais rápido", correct: false },
        { text: "Aguardar o candle diário fechar primeiro", correct: false },
      ],
      explanation: "Operar com a tendência + entrada no suporte = setup de alta probabilidade. Um candle verde confirmatório reduz entradas falsas."
    },
    {
      question: "Sua operação está aberta e indo a seu favor. Você sente vontade de mover o stop-loss mais longe. O que fazer?",
      options: [
        { text: "Mover — mais espaço significa menos risco", correct: false },
        { text: "Fechar manualmente para garantir lucro", correct: false },
        { text: "Não fazer nada — respeite seu plano original", correct: true },
        { text: "Adicionar à posição enquanto está ganhando", correct: false },
      ],
      explanation: "Mover o stop-loss aumenta o risco. Seu plano original foi definido sem emoção. Confie no processo."
    },
  ]
});

// ─── Módulo 05: Psicologia do Trading (PT-BR) ─────────────────────────────────
window.WT_MODULES_PT.push({
  id: "mod_05",
  title: "Psicologia do Trading",
  totalXP: 350,
  badge: { icon: "👑", name: "Graduado da Academia" },
  cta: {
    demo: { url: "https://www.weltrade.com/education/account/", utm_content: "mod05_card_last_demo_cta_pt" },
    register: { url: "https://track.gowt.me/visit/?bta=66558&brand=weltrade", utm_content: "mod05_complete_register_cta_pt" }
  },
  cards: [
    {
      tag: "Inimigo #1", icon: "😱", accent: "#FF6B6B",
      title: "FOMO — medo de ficar de fora",
      body: "Você vê um par que já subiu 200 pips. Entra tarde, reverte, perde. O FOMO te faz perseguir movimentos que já terminaram. O mercado sempre dará outra oportunidade — paciência é uma vantagem.",
    },
    {
      tag: "Inimigo #2", icon: "😤", accent: "#FFB830",
      title: "Trading de vingança",
      body: "Você acabou de perder uma operação. Abre imediatamente outra maior para recuperar. Isso é trading de vingança — a forma mais rápida de quebrar uma conta. Feche o app e se afaste.",
    },
    {
      tag: "Inimigo #3", icon: "🤑", accent: "#A78BFA",
      title: "Excesso de confiança após sequência vencedora",
      body: "Você ganhou 5 operações seguidas. Se sente invencível. Aumenta o tamanho. Quebra suas regras. Então uma operação apaga as últimas cinco. Sequências vencedoras terminam. As regras existem para esses momentos.",
    },
    {
      tag: "A Vantagem", icon: "🧘", accent: "#6C63FF",
      title: "Processo acima do resultado",
      body: "Uma boa operação pode perder. Uma má operação pode ganhar. Seu trabalho não é prever o mercado — é executar seu processo corretamente toda vez. Julgue o processo, não o resultado.",
      stat: { value: "Processo", label: "é a única coisa que você pode controlar" }
    },
    {
      tag: "Hábito", icon: "📓", accent: "#00C896",
      title: "Mantenha um diário de trading",
      body: "Após cada operação escreva: razão da entrada, níveis de SL/TP, resultado e como se sentiu. Padrões emergem após 30 entradas. Você verá quais setups funcionam e quais estados emocionais levam a más decisões.",
    },
    {
      tag: "Conseguiu!", icon: "👑", accent: "#FFB830",
      title: "Você está no top 10%",
      body: "A maioria dos traders nunca estuda psicologia. Você estudou. Entende FOMO, trading de vingança, tamanho de posição, gestão de risco e leitura de gráficos. Você tem tudo que precisa — use.",
      demoCTA: true,
    },
  ],
  quiz: [
    {
      question: "EUR/USD acabou de se mover 150 pips em 30 minutos. Você não pegou o movimento. O que fazer?",
      options: [
        { text: "Entrar agora — o impulso vai continuar", correct: false },
        { text: "Aguardar o próximo setup — não perseguir", correct: true },
        { text: "Abrir posição maior para compensar", correct: false },
        { text: "Mudar imediatamente para outro par", correct: false },
      ],
      explanation: "Perseguir movimentos é o FOMO em ação. Entrar tarde em um movimento de 150 pips significa comprar no topo. O próximo setup vai aparecer."
    },
    {
      question: "Você acabou de perder duas operações seguidas. Sente vontade de abrir uma terceira imediatamente para recuperar. Como se chama isso?",
      options: [
        { text: "Uma estratégia de hedge", correct: false },
        { text: "Trading de vingança", correct: true },
        { text: "Escalar a posição", correct: false },
        { text: "Custo médio em dólar", correct: false },
      ],
      explanation: "Trading de vingança é operar emocionalmente após uma perda. Leva a aumentar o tamanho, quebrar regras e perdas maiores. Melhor se afastar."
    },
    {
      question: "Você seguiu seu plano de trading perfeitamente mas a operação atingiu seu stop-loss. Como avaliar essa operação?",
      options: [
        { text: "Como um fracasso — você perdeu dinheiro", correct: false },
        { text: "Como uma boa operação — você executou seu processo corretamente", correct: true },
        { text: "Como sinal para mudar sua estratégia imediatamente", correct: false },
        { text: "Como motivo para pular o próximo setup", correct: false },
      ],
      explanation: "Uma perda não torna uma operação ruim. Se seguiu suas regras, foi uma boa operação. Perdas fazem parte de qualquer sistema. Julgue o processo."
    },
  ]
});
