// Dados do GRUPO MMB - Fonte de Verdade Institucional

export const APP_TITLE = "GRUPO MMB - Holding e Núcleo de Governança";
export const APP_DESCRIPTION = "Ecossistema integrado de proteção e serviços financeiros, estruturado em dois hubs operacionais com governança sólida e estratégia de crescimento sustentável";

// Pilares Estratégicos (Tese de Investimento)
export const PILARES_ESTRATEGICOS = [
  {
    id: "eficiencia",
    titulo: "Eficiência Operacional",
    descricao: "Estruturas compartilhadas no Hub Administrativo permitem diluição de custos fixos e ganhos de escala, viabilizando crescimento sem aumento proporcional de despesas estruturais."
  },
  {
    id: "mitigacao",
    titulo: "Mitigação de Riscos",
    descricao: "Segregação funcional entre hubs e unidades de negócio reduz riscos regulatórios e jurídicos, fortalecendo a governança e a aderência às exigências de fiscalização."
  },
  {
    id: "ltv",
    titulo: "Maximização do LTV",
    descricao: "Funil proprietário de aquisição e retenção direciona cada perfil de cliente para a entidade mais adequada, ampliando a captura de valor ao longo do tempo."
  }
];

// Marcas do Ecossistema (Nomenclatura Oficial)
export const MARCAS = [
  {
    nome: "MOVIMENTO MAIS SEGURO",
    papel: "Topo de Funil e Inteligência de Dados",
    descricao: "Agregador de leads e portal de conteúdo, sem subscrição de risco. Qualifica perfis e direciona ao hub comercial, reduzindo o custo global de aquisição.",
    url: "https://www.movimentomaisseguro.com.br/",
    logo: "/logos/movimento-mais-seguro.svg",
    categoria: "aquisicao"
  },
  {
    nome: "ALPHA PROTEÇÕES",
    papel: "Hub de Vendas e Conversão",
    descricao: "Opera a comercialização de todo o portfólio do grupo, priorizando produtos de decisão rápida e baixa fricção no canal digital para maximizar a conversão inicial.",
    url: "https://www.alphaprotecoes.com.br/",
    logo: "/logos/alpha-protecoes.png",
    categoria: "comercial"
  },
  {
    nome: "SOLUÇÕES CORRETORA",
    papel: "Braço Técnico e Regulado (SUSEP)",
    descricao: "Intermediação de riscos complexos e produtos de maior valor agregado (seguros tradicionais) para clientes B2B e B2C de alta renda. Foco em consultoria técnica.",
    url: "https://www.solucoescorretora.com/",
    logo: "/logos/solucoes-corretora.png",
    categoria: "produtos"
  },
  {
    nome: "POTERE SEGURO AUTO E CONSÓRCIO",
    papel: "Produtos Massificados e Planejamento Financeiro",
    descricao: "Seguro Auto com assinatura mensal e tecnologia (vistoria digital). Consórcio para planejamento financeiro e aquisição de bens, direcionado a público de maior capacidade contributiva.",
    url: "https://www.poterebpmensal.com.br/",
    logo: "/logos/potere.svg",
    categoria: "produtos"
  },
  {
    nome: "MOVIMENTO MAIS BRASIL",
    papel: "Braço Mutualista (Associação)",
    descricao: "Operação de proteção veicular e plataforma de benefícios com modelo baseado no rateio de despesas, direcionado a públicos sensíveis a preço.",
    url: "https://www.movimentomaisbrasil.org.br/",
    logo: "/logos/movimento-mais-brasil.png",
    categoria: "produtos"
  },
  {
    nome: "MAIS BRASIL MOTORCYCLE",
    papel: "Atuação em Nicho de Alto Valor",
    descricao: "Foco em motocicletas de maior valor, utilizando estratégia de comunidade e pertencimento para reduzir o churn e criar fidelização emocional.",
    url: "https://www.maisbrasilmotorcycle.com.br/",
    logo: "/logos/mais-brasil-motorcycle.png",
    categoria: "produtos"
  },
  {
    nome: "JUNTOS POD+",
    papel: "Mídia, Conteúdo e Brand Equity",
    descricao: "Canal de mídia e educação de mercado para fortalecer a marca GRUPO MMB, construir autoridade institucional e validar a competência técnica do grupo.",
    url: "https://www.juntospodmais.com.br/",
    logo: "/logos/juntos-pod.svg",
    categoria: "branding"
  }
];

// Pilares Operacionais (Hub Administrativo)
export const PILARES_OPERACIONAIS = [
  {
    id: "finops",
    titulo: "MMB FinOps",
    subtitulo: "Centralização Financeira e Controle de Riscos",
    descricao: "Responsável pela gestão financeira consolidada do ecossistema, incluindo contabilidade, fluxo de caixa, análise de risco, emissão de cobranças e relatórios regulatórios. A centralização permite diluição de custos e ganhos de escala.",
    destaques: [
      {
        titulo: "Gestão de Risco Centralizada",
        descricao: "Análise preditiva e controle de inadimplência em todas as unidades de negócio."
      },
      {
        titulo: "Conformidade Contábil",
        descricao: "Relatórios financeiros alinhados às normas regulatórias e auditoria externa."
      },
      {
        titulo: "Eficiência de Custos",
        descricao: "Diluição de despesas fixas por meio de estruturas compartilhadas."
      }
    ],
    imagem: "/images/finops-financial.png"
  },
  {
    id: "ops",
    titulo: "MMB Ops",
    subtitulo: "Operações e Pós-Venda Integrados",
    descricao: "Gerencia o fluxo operacional de sinistros, atendimento ao cliente, logística de prestadores e coordenação de fornecedores. Foco em eficiência operacional e qualidade de serviço para todas as marcas do ecossistema.",
    destaques: [
      {
        titulo: "Fluxo de Sinistro Padronizado",
        descricao: "Processos uniformes e rastreáveis em tempo real para todas as unidades."
      },
      {
        titulo: "Rede de Prestadores Auditados",
        descricao: "Gestão centralizada de parceiros com critérios de qualidade rigorosos."
      },
      {
        titulo: "Atendimento Multicanal",
        descricao: "Central de pós-venda unificada com treinamento contínuo das equipes."
      }
    ],
    imagem: "/images/ops-customer-service.png"
  },
  {
    id: "tech",
    titulo: "MMB Tech",
    subtitulo: "Tecnologia, Dados e Segurança da Informação",
    descricao: "Desenvolve e mantém a infraestrutura tecnológica crítica do grupo, incluindo integração de sistemas (CRM, SGA, Financeiro), análise de dados e conformidade com a LGPD. Prioriza segurança e disponibilidade.",
    destaques: [
      {
        titulo: "Integração de Sistemas",
        descricao: "APIs seguras conectando todas as unidades de negócio em tempo real."
      },
      {
        titulo: "Data Analytics e BI",
        descricao: "Uso de dados para otimizar processos e informar decisões estratégicas."
      },
      {
        titulo: "Segurança e Conformidade",
        descricao: "Proteção de dados pessoais (LGPD) e mitigação de ameaças cibernéticas."
      }
    ],
    imagem: "/images/tech-data-center.png"
  }
];

// Valores Institucionais
export const VALORES = [
  {
    titulo: "Governança",
    descricao: "Estrutura de controle e segregação funcional que garante conformidade regulatória e mitigação de riscos."
  },
  {
    titulo: "Transparência",
    descricao: "Comunicação clara e objetiva com stakeholders, investidores e órgãos reguladores."
  },
  {
    titulo: "Eficiência",
    descricao: "Otimização de processos e diluição de custos por meio de estruturas compartilhadas."
  },
  {
    titulo: "Sustentabilidade",
    descricao: "Crescimento responsável com foco em previsibilidade financeira e gestão de riscos."
  }
];

// Informações de Contato
export const CONTATO = {
  endereco: "Goiânia, Goiás - Brasil",
  telefone: "0800 604 8006",
  whatsapp: "5508006048006",
  email: "contato@grupommb.com",
  horario: "Segunda a Sexta, 8h às 18h"
};

// Arquitetura de Dois Hubs
export const HUBS = {
  administrativo: {
    nome: "GRUPO MMB",
    titulo: "Hub Administrativo",
    descricao: "Holding institucional e núcleo de governança do ecossistema. Não possui atuação comercial direta, concentrando-se exclusivamente na estabilidade financeira, controle de riscos e eficiência operacional.",
    responsabilidades: [
      "Finanças e Contabilidade",
      "Jurídico e Compliance",
      "Recursos Humanos",
      "Tecnologia e Dados",
      "Controles Internos e Auditoria",
      "Gestão de Pós-Venda"
    ]
  },
  comercial: {
    nome: "ALPHA PROTEÇÕES",
    titulo: "Hub Comercial",
    descricao: "Responsável pela tração, distribuição e inovação nos canais de venda. Atua de forma agnóstica em relação aos produtos, focando exclusivamente em conversão, tecnologia e eficiência comercial.",
    responsabilidades: [
      "Vendas B2B e B2C",
      "Marketing e Branding",
      "Canais Digitais e Físicos",
      "Parcerias Estratégicas",
      "Inovação Comercial"
    ]
  }
};
