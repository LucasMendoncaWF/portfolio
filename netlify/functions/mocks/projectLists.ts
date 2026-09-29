export interface Translation {
  name: string;
  description: string;
}

export interface Project {
  year: number;
  url?: string;
  technology: string;
  image: string;
  id: number;
  translations: Record<string, Translation>;
  isCurrent?: boolean;
}

export const devProjectsWithouIds = [
  {
    technology: 'React (TypeScript), React Native, C++ and C# (.NET)',
    year: 2026,
    image: '/images/toonflip.avif',
    translations: {
      en: {
        name: 'ToonFlip',
        description:
          'Designed and built an end-to-end comics and animation platform supporting 9 languages, with React/TypeScript web apps, a React Native Android app, a management portal and a .NET/PostgreSQL backend. Architected a reusable C++/bgfx cinematic viewer shared across web and mobile, with offline playback, in-session language switching and accessibility controls. Also built a shared SDK and features including personalized content discovery, social interactions, notifications, digital collectibles and physical/digital storefronts.',
      },
      pt: {
        name: 'ToonFlip',
        description:
          'Projetei e desenvolvi uma plataforma completa de quadrinhos e animações com suporte a 9 idiomas, incluindo aplicações web em React/TypeScript, aplicativo Android em React Native, portal de gerenciamento e backend em .NET/PostgreSQL. Arquitetuei um viewer cinematográfico reutilizável em C++/bgfx compartilhado entre web e mobile, com reprodução offline, troca de idioma durante a leitura e controles de acessibilidade. Também desenvolvi um SDK compartilhado e recursos como descoberta personalizada de conteúdo, interações sociais, notificações, colecionáveis digitais e lojas de produtos físicos e digitais.',
      },
    },
  },
  {
    technology: 'React and TypeScript',
    year: 2026,
    isCurrent: true,
    image: '/images/satalia.webp',
    translations: {
      en: {
        name: 'Satalia',
        description:
          'Develop and maintain Satalia Delivery, an enterprise logistics platform for delivery operations, maps, routes, depots and real-time tracking. Resolved a backlog of 50+ defects in roughly two months, migrated E2E coverage from Cypress to Playwright, and contribute to frontend code quality through refactoring, standards, code reviews and performance improvements.',
      },
      pt: {
        name: 'Satalia',
        description:
          'Desenvolvo e mantenho o Satalia Delivery, uma plataforma corporativa de logística para operações de entrega, mapas, rotas, depósitos e rastreamento em tempo real. Resolvi um backlog de mais de 50 defeitos em aproximadamente dois meses, migrei a cobertura E2E de Cypress para Playwright e contribuo para a qualidade do front-end por meio de refatorações, padronização, code reviews e melhorias de performance.',
      },
    },
  },
  {
    technology: 'React and TypeScript',
    year: 2025,
    url: 'https://vimeo.com/1074964819/672ee796f2',
    image: '/images/project-anytime.webp',
    translations: {
      en: {
        name: 'Anytime Fitness',
        description:
          'Built and maintained the Coaching Dashboard with React and TypeScript, including real-time communication with WebSockets and REST APIs, reusable components, Chart.js dashboards, React Query caching, accessibility and performance improvements.',
      },
      pt: {
        name: 'Anytime Fitness',
        description:
          'Desenvolvi e mantive o Coaching Dashboard com React e TypeScript, incluindo comunicação em tempo real com WebSockets e REST APIs, componentes reutilizáveis, dashboards em Chart.js, cache com React Query, acessibilidade e melhorias de performance.',
      },
    },
  },
  {
    technology: 'WordPress',
    year: 2023,
    url: 'https://barmethod.com/',
    image: '/images/project-barmethod.webp',
    translations: {
      en: {
        name: 'BarMethod',
        description: 'Did the maintenance, fixed bugs, adjusted content and developed features.',
      },
      pt: {
        name: 'BarMethod',
        description: 'Fiz a manutenção, corrigi bugs, ajustei conteudo e desenvolvi features.',
      },
    },
  },
  {
    technology: 'Angular 9',
    year: 2021,
    url: 'https://sampamaisrural.prefeitura.sp.gov.br/',
    image: '/images/project-samparural.webp',
    translations: {
      en: {
        name: 'SampaRural',
        description:
          'Built a JSON-driven dynamic form engine and contributed to the Sampa Rural application with Angular, REST API integrations and accessibility requirements.',
      },
      pt: {
        name: 'SampaRural',
        description:
          'Criei um mecanismo de formulários dinâmicos orientado por JSON e contribuí para a aplicação Sampa Rural com Angular, integrações REST API e requisitos de acessibilidade.',
      },
    },
  },
  {
    technology: 'Angular 7',
    year: 2020,
    url: 'https://napista.com.br/',
    image: '/images/project-napista.webp',
    translations: {
      en: {
        name: 'Na Pista',
        description:
          'Contributed to the Banco BV Na Pista platform with Angular, developing features, integrating APIs, fixing bugs and supporting dashboards and data visualization.',
      },
      pt: {
        name: 'Na Pista',
        description:
          'Contribuí para a plataforma Na Pista do Banco BV com Angular, desenvolvendo funcionalidades, integrando APIs, corrigindo bugs e apoiando dashboards e visualizações de dados.',
      },
    },
  },
  {
    technology: 'React, TypeScript and Node.js',
    year: 2022,
    url: 'https://vimeo.com/778621074',
    image: '/images/project-alamanda.webp',
    translations: {
      en: {
        name: 'Alamanda',
        description:
          'Freelance project designed and developed end to end with React, TypeScript and Node.js, including the website, administrative features and backend integration.',
      },
      pt: {
        name: 'Alamanda',
        description:
          'Projeto freelance projetado e desenvolvido de ponta a ponta com React, TypeScript e Node.js, incluindo o site, funcionalidades administrativas e integração com o backend.',
      },
    },
  },
  {
    technology: 'Wordpress',
    year: 2019,
    url: 'https://www.omint.com.br/en/',
    image: '/images/project-omint.webp',
    translations: {
      en: {
        name: 'Omint',
        description:
          'Created custom pages, edited the Wordpress theme with PHP, and did the maintenance.',
      },
      pt: {
        name: 'Omint',
        description:
          'Criei páginas customizadas, editei o tema do Wordpress com PHP e fiz a manutenção',
      },
    },
  },
  {
    technology: 'Shopify',
    year: 2021,
    url: 'https://luvieh.com/',
    image: '/images/project-luvieh.webp',
    translations: {
      en: {
        name: 'Luvieh Jewellery',
        description: 'E-commerce customization and theme editing on Shopify.',
      },
      pt: {
        name: 'Luvieh Jewellery',
        description: 'Customização e edição de tema em e-commerce na plataforma Shopify.',
      },
    },
  },
  {
    technology: 'React',
    year: 2022,
    url: 'https://diariosdoclima.org.br/',
    image: '/images/project-clima.webp',
    translations: {
      en: {
        name: 'Diário do Clima',
        description:
          'End to end website creation with API integrations, best practices setup, and automated tests.',
      },
      pt: {
        name: 'Diário do Clima',
        description:
          'Criação completa do site com integração de APIs, configuração de boas práticas e testes automáticos.',
      },
    },
  },
  {
    technology: 'Angular',
    year: 2022,
    url: 'https://queridodiario.ok.org.br/',
    image: '/images/project-diario.webp',
    translations: {
      en: {
        name: 'Querido Diário',
        description: 'Developed new pages, with new features and API integrations.',
      },
      pt: {
        name: 'Querido Diário',
        description: 'Desenvolvi novas páginas, com novas features e integrações de API.',
      },
    },
  },
  {
    technology: 'React',
    year: 2022,
    url: 'https://jurema.la/',
    image: '/images/project-jurema.webp',
    translations: {
      en: {
        name: 'Jurema Institutional',
        description:
          'Developed the complete website, with API integrations, translations and dynamic components.',
      },
      pt: {
        name: 'Jurema Institucional',
        description: 'Desenvolvi o site completo, com integração de api e tranduções.',
      },
    },
  },
  {
    technology: 'WordPress',
    year: 2019,
    url: 'https://emccamp.com.br/',
    image: '/images/project-emccamp.webp',
    translations: {
      en: {
        name: 'Emccamp',
        description: 'Maintenance, bug fixes and new page creation in WordPress with PHP.',
      },
      pt: {
        name: 'Emccamp',
        description:
          'Manutenção, correções de bugs e criação de novas páginas em WordPress com PHP.',
      },
    },
  },
  {
    technology: 'Angular 7',
    year: 2020,
    url: 'https://www.bv.com.br/seguro',
    image: '/images/project-bv.webp',
    translations: {
      en: {
        name: 'Banco BV',
        description:
          'Developed insurance product pages for Banco BV with Angular and API integrations.',
      },
      pt: {
        name: 'Banco BV',
        description:
          'Desenvolvi páginas de produtos de seguros para o Banco BV com Angular e integrações de API.',
      },
    },
  },
];

export const studyProjects: Project[] = [
  {
    id: 1,
    technology: 'React and GPT 4',
    year: 2025,
    url: 'https://mini-figma.netlify.app/',
    image: '/images/miniFigma.webp',
    translations: {
      en: {
        name: 'Mini Figma',
        description:
          'A simple recreation of Figma, using React, Zustand and GPT 4 for complex calculations (built in 2 days).',
      },
      pt: {
        name: 'Mini Figma',
        description:
          'Uma recriação simples do Figma, usando React, Zustand e GPT 4 para cálculos complexos (Desenvolvido em 2 dias)',
      },
    },
  },
  {
    id: 2,
    technology: 'NextJS',
    year: 2025,
    url: 'https://lucasmediaplayer.netlify.app/',
    image: '/images/mp5.webp',
    translations: {
      en: {
        name: 'Music Player',
        description:
          'A music streaming platform inspired by Spotify, using the Audius API, built fully with NexJS, Typescript and Tailwind CSS.',
      },
      pt: {
        name: 'Music Player',
        description:
          'Uma plataforma de streaming de música inspirada no Spotify, usando a API do Audius. [Next.js, Typescript e Tailwind CSS].',
      },
    },
  },
  {
    id: 3,
    technology: 'React and NodeJS',
    year: 2025,
    url: 'https://nintendostorebylucasmendonca.netlify.app/',
    image: '/images/project-nintendo.webp',
    translations: {
      en: {
        name: 'Nintendo Demo',
        description: 'E-commerce demo for my portfolio, developed with React and NodeJS.',
      },
      pt: {
        name: 'Nintendo Demo',
        description: 'Demonstração para o portfólio, desenvolvida com React e NodeJS.',
      },
    },
  },
  {
    id: 4,
    technology: 'React',
    year: 2019,
    url: 'https://eixo-lp.netlify.app/',
    image: '/images/project-eixo.webp',
    translations: {
      en: {
        name: 'Landing Page Eixo Platina',
        description: 'Developed a Landing page for a real estate launch in React.',
      },
      pt: {
        name: 'Landing Page Eixo Platina',
        description: 'Landing page para lançamento imobiliário em React.',
      },
    },
  },
  {
    id: 5,
    technology: 'AngularJS',
    year: 2018,
    url: 'https://taskdashboardlucas.netlify.app/',
    image: '/images/dashboard.webp',
    translations: {
      en: {
        name: 'DashBoard Demo',
        description: 'Task dashboard demo for portfolio, developed using AngularJS.',
      },
      pt: {
        name: 'DashBoard Demo',
        description:
          'Demonstração de painel de tarefas para o portfólio, desenvolvido com AngularJS.',
      },
    },
  },
];

export const devProjects: Project[] = devProjectsWithouIds.map((item, index) => ({
  ...item,
  id: index,
}));

export const designProjects: Project[] = [
  {
    id: 1,
    technology: 'Photoshop, AdobeXD',
    year: 2020,
    url: 'https://xd.adobe.com/view/2168ae57-7722-4175-7187-32285ced0798-5759/',
    image: '/images/project-lejour.webp',
    translations: {
      pt: {
        name: 'Le jour',
        description:
          'Protótipo de interface criado para uma competição na FIAP, durante minha graduação.',
      },
      en: {
        name: 'Le jour',
        description: 'UI concept designed for a competition at FIAP university.',
      },
    },
  },
  {
    id: 2,
    technology: 'Photoshop',
    year: 2022,
    url: 'https://www.behance.net/gallery/135246757/Nintendo-redesign',
    image: '/images/project-nintendo.webp',
    translations: {
      pt: {
        name: 'Redesign do site da Nintendo',
        description:
          'Conceito de redesign da loja da Nintendo, criado para aprimorar meu portfólio.',
      },
      en: {
        name: 'Nintendo Website Redesign',
        description: 'Redesign concept of the Nintendo store for portfolio improvement.',
      },
    },
  },
];

export const intranetProjects: Project[] = [
  {
    id: 1,
    technology: 'Sharepoint',
    year: 2017,
    image: '/images/intranet-tallento.jpg',
    translations: {
      pt: {
        name: 'Tallento',
        description: 'Criação de formulários e páginas internas usando SharePoint.',
      },
      en: {
        name: 'Tallento',
        description: 'Developed internal forms and SharePoint pages.',
      },
    },
  },
  {
    id: 2,
    technology: 'Sharepoint',
    year: 2018,
    image: '/images/intranet-nexa.jpg',
    translations: {
      pt: {
        name: 'Nexa',
        description: 'Desenvolvimento de formulários e páginas internas em SharePoint.',
      },
      en: {
        name: 'Nexa',
        description: 'Developed internal forms and SharePoint pages.',
      },
    },
  },
  {
    id: 3,
    technology: 'Sharepoint',
    year: 2018,
    image: '/images/intranet-hersheys.jpg',
    translations: {
      pt: {
        name: "Hershey's",
        description: 'Desenvolvimento de formulários e páginas internas no SharePoint.',
      },
      en: {
        name: "Hershey's",
        description: 'Developed internal forms and SharePoint pages.',
      },
    },
  },
  {
    id: 4,
    technology: 'React',
    year: 2019,
    image: '/images/intranet-newton.jpg',
    translations: {
      pt: {
        name: 'Newton',
        description: 'Desenvolvimento de dashboard e páginas internas com React.',
      },
      en: {
        name: 'Newton',
        description: 'Developed internal dashboard and pages using React.',
      },
    },
  },
  {
    id: 5,
    technology: 'Sharepoint',
    year: 2017,
    image: '/images/intranet-class.jpg',
    translations: {
      pt: {
        name: 'Class Solutions',
        description: 'Criação de formulários personalizados e páginas internas em SharePoint.',
      },
      en: {
        name: 'Class Solutions',
        description: 'Created custom internal forms and SharePoint pages.',
      },
    },
  },
];
