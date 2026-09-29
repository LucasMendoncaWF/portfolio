interface Translation {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

export interface WorkExperience {
  id: number;
  translations: Record<string, Translation>;
}

export const experiencesWithouIds = [
  {
    translations: {
      en: {
        title: 'Senior Front-End Developer',
        company: 'VML / Satalia',
        location: 'Remote - United Kingdom',
        startDate: 'Jul 2025',
        endDate: 'Present',
        responsibilities:
          'I develop and maintain Satalia Delivery, an enterprise logistics platform used by clients including Tesco, DFS and Woolworths to manage delivery operations, maps, routes, depots and real-time tracking with React and TypeScript. I own an ongoing initiative to improve overall frontend code quality through refactoring, pattern standardization, performance improvements, pull-request reviews and technical decisions. I resolved a backlog of 50+ defects in roughly two months, and newly reported issues are typically investigated and resolved the same day. I also migrated E2E coverage from Cypress to Playwright across roughly 15 complex application pages, and build accessible, responsive features with REST APIs, Vitest and React Testing Library while collaborating with backend engineers and onboarding frontend developers and QA engineers.',
      },
      pt: {
        title: 'Desenvolvedor Front-End Sênior',
        company: 'VML / Satalia',
        location: 'Remoto - Reino Unido',
        startDate: 'Jul 2025',
        endDate: 'Presente',
        responsibilities:
          'Desenvolvo e mantenho o Satalia Delivery, uma plataforma corporativa de logística usada por clientes como Tesco, DFS e Woolworths para gerenciar operações de entrega, mapas, rotas, depósitos e rastreamento em tempo real com React e TypeScript. Sou responsável por uma iniciativa contínua para melhorar a qualidade geral do front-end por meio de refatorações, padronização de padrões, melhorias de performance, pull-request reviews e decisões técnicas. Resolvi um backlog de mais de 50 defeitos em aproximadamente dois meses, e novos problemas reportados normalmente são investigados e resolvidos no mesmo dia. Também migrei a cobertura E2E de Cypress para Playwright em cerca de 15 páginas complexas da aplicação e desenvolvo funcionalidades acessíveis e responsivas com REST APIs, Vitest e React Testing Library, colaborando com engenheiros de backend e apoiando o onboarding de desenvolvedores front-end e profissionais de QA.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Founder and Full-Stack Developer',
        company: 'ToonFlip',
        location: 'Remote - Brazil',
        startDate: 'Feb 2025',
        endDate: 'Jun 2026',
        responsibilities:
          'I designed and built an end-to-end comics and animation ecosystem supporting 9 languages, with React and TypeScript web apps, an Android app in React Native, a management portal and a .NET/PostgreSQL backend. I architected a reusable C++/bgfx cinematic viewer shared across web and mobile to prevent platform drift and duplicated logic, with offline playback, in-session language switching and accessibility controls such as balloon-size adjustment. I also built a shared SDK for reusable UI components, interfaces, API contracts and URLs across the consumer web app, management portal and mobile app. I implemented personalized content discovery, social and art feeds, notifications, profile customization, digital collectibles and physical/digital storefronts, and established unit and E2E testing, linting, responsive design, caching and performance practices across the ecosystem.',
      },
      pt: {
        title: 'Fundador e Desenvolvedor Full Stack',
        company: 'ToonFlip',
        location: 'Remoto - Brasil',
        startDate: 'Fev 2025',
        endDate: 'Jun 2026',
        responsibilities:
          'Projetei e desenvolvi um ecossistema completo de quadrinhos e animações com suporte a 9 idiomas, incluindo aplicações web em React e TypeScript, um aplicativo Android em React Native, um portal de gerenciamento e um backend em .NET/PostgreSQL. Arquitetei um leitor cinematográfico reutilizável em C++/bgfx compartilhado entre web e mobile para evitar divergência entre plataformas e duplicação de lógica, com reprodução offline, troca de idioma durante a sessão e controles de acessibilidade, como ajuste do tamanho dos balões. Também criei um SDK compartilhado para componentes de UI, interfaces, contratos de API e URLs reutilizados entre a aplicação web, o portal de gerenciamento e o aplicativo mobile. Implementei descoberta personalizada de conteúdo, feeds sociais e de arte, notificações, personalização de perfil, colecionáveis digitais e lojas físicas/digitais, além de estabelecer testes unitários e E2E, linting, design responsivo, cache e práticas de performance em todo o ecossistema.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Senior Front-End Developer',
        company: 'Alto',
        location: 'Remote - USA',
        startDate: 'Jan 2023',
        endDate: 'Jul 2025',
        responsibilities:
          'I built and maintained the Anytime Fitness Coaching Dashboard with React and TypeScript, supporting coach-facing workflows within a global fitness brand. I implemented complex real-time chat and communication workflows with WebSockets and REST APIs, reusable components and Chart.js dashboards for coach and member data. I met directly with coaches to investigate bugs and evaluate product improvements, translating user feedback into technical solutions while contributing to solution design and pull-request reviews. I also applied React Query caching, accessibility, responsive and cross-browser practices, and performance improvements while working with CI/CD, Docker and AWS in a distributed English-speaking team.',
      },
      pt: {
        title: 'Desenvolvedor Front-End Sênior',
        company: 'Alto',
        location: 'Remoto - EUA',
        startDate: 'Jan 2023',
        endDate: 'Jul 2025',
        responsibilities:
          'Desenvolvi e mantive o Coaching Dashboard da Anytime Fitness com React e TypeScript, dando suporte aos fluxos de trabalho dos coaches de uma marca global de fitness. Implementei fluxos complexos de chat e comunicação em tempo real com WebSockets e REST APIs, componentes reutilizáveis e dashboards em Chart.js para dados de coaches e membros. Trabalhei diretamente com coaches para investigar bugs e avaliar melhorias de produto, transformando feedback de usuários em soluções técnicas e contribuindo para o desenho de soluções e pull-request reviews. Também apliquei cache com React Query, práticas de acessibilidade, responsividade e compatibilidade entre navegadores, além de melhorias de performance, trabalhando com CI/CD, Docker e AWS em uma equipe distribuída que se comunicava em inglês.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Front-End Developer',
        company: 'Jurema',
        location: 'Remote - Brazil',
        startDate: 'Jan 2020',
        endDate: 'Dec 2022',
        responsibilities:
          'I delivered React, TypeScript and Angular applications for clients including Banco BV and the Government of São Paulo, integrating REST APIs and meeting accessibility and client-specific compliance requirements. I built a JSON-driven dynamic form engine for Sampa Rural, allowing forms to be generated from configuration instead of implementing each form separately. I also contributed to the large Banco BV Na Pista platform and other banking and e-commerce products, including dashboards and data visualizations with Chart.js. I reviewed pull requests, pair-programmed and delivered short technical sessions to junior developers while contributing to architecture and troubleshooting.',
      },
      pt: {
        title: 'Desenvolvedor Front-End',
        company: 'Jurema',
        location: 'Remoto - Brasil',
        startDate: 'Jan 2020',
        endDate: 'Dez 2022',
        responsibilities:
          'Entreguei aplicações em React, TypeScript e Angular para clientes como Banco BV e Prefeitura de São Paulo, integrando REST APIs e atendendo requisitos de acessibilidade e conformidade específicos de cada cliente. Criei para o Sampa Rural um mecanismo de formulários dinâmicos orientado por JSON, permitindo gerar formulários a partir de configuração em vez de implementar cada um separadamente. Também contribuí para a grande plataforma Na Pista do Banco BV e outros produtos bancários e de e-commerce, incluindo dashboards e visualizações de dados com Chart.js. Realizei pull-request reviews, pair programming e pequenas sessões técnicas para desenvolvedores juniores, além de contribuir com arquitetura e troubleshooting.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Full-Stack Developer',
        company: 'Newton Marketing',
        location: 'Brazil',
        startDate: 'Apr 2017',
        endDate: 'Dec 2019',
        responsibilities:
          "I built responsive web products, internal systems and application prototypes for clients including Hershey's, Emccamp, Omint Seguros and Talento Engenharia using JavaScript frameworks, Node.js and MySQL. I developed systems that automated internal workflows and improved technical-team operations, alongside e-commerce, healthcare, institutional and SharePoint/AngularJS solutions.",
      },
      pt: {
        title: 'Desenvolvedor Full Stack',
        company: 'Newton Marketing',
        location: 'Brasil',
        startDate: 'Abr 2017',
        endDate: 'Dez 2019',
        responsibilities:
          "Desenvolvi produtos web responsivos, sistemas internos e protótipos de aplicações para clientes como Hershey's, Emccamp, Omint Seguros e Talento Engenharia usando frameworks JavaScript, Node.js e MySQL. Também desenvolvi sistemas que automatizaram fluxos internos e melhoraram a operação das equipes técnicas, além de soluções de e-commerce, saúde, sites institucionais e projetos em SharePoint/AngularJS.",
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Freelance Developer',
        company: 'Selected Projects',
        location: 'Global',
        startDate: 'Oct 2020',
        endDate: 'Dec 2022',
        responsibilities:
          'I delivered selected freelance projects including the Alamanda React/TypeScript/Node.js website, Banco BV insurance products in Angular 14, Sony web pages and Shopify storefront work for Luvieh.',
      },
      pt: {
        title: 'Desenvolvedor Freelance',
        company: 'Projetos Selecionados',
        location: 'Global',
        startDate: 'Out 2020',
        endDate: 'Dez 2022',
        responsibilities:
          'Entreguei projetos freelance selecionados, incluindo o site Alamanda em React/TypeScript/Node.js, produtos de seguros do Banco BV em Angular 14, páginas web para a Sony e trabalhos em lojas Shopify para a Luvieh.',
      },
    },
  },
];

export const experiences = experiencesWithouIds.map((item, index) => ({
  ...item,
  id: index,
}));
