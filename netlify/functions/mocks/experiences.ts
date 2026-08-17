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
        company: 'Satalia',
        location: 'Remote - United Kingdom',
        startDate: 'Jul 2025',
        endDate: 'Present',
        responsibilities:
          'In the Delivery project, a delivery management system built with React and Java involving maps, routing, depots, and logistics, I developed new features, resolved a backlog of over 50 bugs, migrated end-to-end tests from Cypress to Playwright, and maintained the system. I also refactored parts of the codebase to address performance issues and improve code quality by applying best practices, while collaborating closely with backend and product teams to define and implement effective solutions.',
      },
      pt: {
        title: 'Desenvolvedor Front-End Sênior',
        company: 'Satalia',
        location: 'Remoto - Reino Unido',
        startDate: 'Jul 2025',
        endDate: 'Presente',
        responsibilities:
          'No projeto Delivery, um sistema de gerenciamento de entregas desenvolvido com React e Java envolvendo mapas, rotas, depósitos e logística, desenvolvi novas funcionalidades, resolvi um backlog de mais de 50 bugs, migrei os testes end-to-end de Cypress para Playwright e realizei a manutenção do sistema. Também refatorei partes da aplicação para resolver problemas de performance e melhorar a qualidade do código aplicando boas práticas, além de colaborar diretamente com as equipes de backend e produto na definição e implementação das melhores soluções.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Full Stack Developer',
        company: 'ToonFlip',
        location: 'Remote',
        startDate: 'Feb 2025',
        endDate: 'Jun 2026',
        responsibilities:
          'I designed and developed ToonFlip, a subscription-based comic and animation platform with support for 9 languages. I built the mobile app with React Native, including a custom cinematic comic reader powered by a reusable C++ engine shared across React Native and React environments. I also developed the complete web ecosystem, including the user portal, creator portal, admin portal, and a cinematic editor for creating guided reading experiences. On the backend, I worked with C#, .NET, and PostgreSQL to handle authentication, subscriptions, content management, and communication across the platform. I implemented rate limiting, JWT authentication, AVIF image optimization, performance and security improvements, as well as AI-assisted translation for localization and global content distribution.',
      },
      pt: {
        title: 'Desenvolvedor Full Stack',
        company: 'ToonFlip',
        location: 'Remoto',
        startDate: 'Fev 2025',
        endDate: 'Jun 2026',
        responsibilities:
          'Projetei e desenvolvi a ToonFlip, uma plataforma de assinatura para quadrinhos e animações com suporte a 9 idiomas. Desenvolvi o aplicativo mobile com React Native, incluindo um leitor cinematográfico de quadrinhos personalizado, baseado em uma engine C++ reutilizável entre os ambientes React Native e React. Também desenvolvi todo o ecossistema web, incluindo o portal do usuário, portal de criadores, painel administrativo e um editor cinematográfico para criação de experiências de leitura guiada. No backend, trabalhei com C#, .NET e PostgreSQL para implementar autenticação, assinaturas, gerenciamento de conteúdo e comunicação entre os serviços da plataforma. Implementei rate limiting, autenticação JWT, otimização de imagens em AVIF, melhorias de performance e segurança, além de tradução assistida por IA para localização e distribuição global de conteúdo.',
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
          'I built the Coaching Dashboard for Anytime Fitness (SaaS) using React with TypeScript, developed reusable custom components adopted across the website, delivered new features weekly, solved all bugs assigned to me quickly and maintained the “Bar Method” website built on WordPress.',
      },
      pt: {
        title: 'Desenvolvedor Front-End Sênior',
        company: 'Alto',
        location: 'Remoto - EUA',
        startDate: 'Jan 2023',
        endDate: 'Jul 2025',
        responsibilities:
          'Criei o Painel de Coaching para Anytime Fitness (SaaS) usando React com TypeScript, desenvolvi componentes personalizados reutilizáveis ​​adotados em todo o site, entreguei novos recursos semanalmente, resolvi todos os bugs atribuídos a mim rapidamente e mantive o site “Bar Method” criado no WordPress.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Front-End Developer',
        company: 'Jurema',
        location: 'Brazil',
        startDate: 'Jan 2020',
        endDate: 'Dec 2022',
        responsibilities:
          'I managed front-end development in collaboration with design, product and Back-End teams to deliver websites for clients such as banks, government, and e-commerce websites, with React and Angular. I had many opportunities to mentor junior developers and to use other technologies in different projects, such as Electron, Next.js, GraphQL, AWS, Vue.JS, Tailwind CSS, Node.js, C#, .Net and MySQL.',
      },
      pt: {
        title: 'Desenvolvedor Front-End Pleno',
        company: 'Jurema',
        location: 'Brasil',
        startDate: 'Jan 2020',
        endDate: 'Dez 2022',
        responsibilities:
          'Gerenciei o desenvolvimento front-end em colaboração com as equipes de design, produto e back-end para entregar sites para clientes como bancos, governo e sites de e-commerce, usando React e Angular. Tive muitas oportunidades de orientar desenvolvedores juniores e usar outras tecnologias em diferentes projetos, como Electron, Next.js, GraphQL, AWS, Vue.JS, Tailwind CSS, Node.js, C#, .Net e MySQL.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Full Stack Developer',
        company: 'Newton Marketing',
        location: 'Brazil',
        startDate: 'Apr 2017',
        endDate: 'Dec 2019',
        responsibilities:
          'I created and maintained responsive web platforms for e-commerce, healthcare, and institutional websites, improving user engagement and SEO performance. The main projects were on WordPress, but I had opportunities to work with other technologies such as React, Angular, Vue.JS, React Native, MySQL, GraphQL, MongoDB and Node.js. I also developed intranet systems for clients like Hershey’s, brazilian banks, and a mining company using AngularJS and SharePoint, improving internal organization and data management.',
      },
      pt: {
        title: 'Desenvolvedor Full Stack',
        company: 'Newton Marketing',
        location: 'Brasil',
        startDate: 'Abr 2017',
        endDate: 'Dez 2019',
        responsibilities:
          'Criei e mantive plataformas web responsivas para sites de e-commerce, saúde e institucionais, melhorando o engajamento do usuário e o desempenho de SEO. Os principais projetos foram em WordPress, mas tive oportunidades de trabalhar com outras tecnologias, como React, Angular, Vue.JS, React Native, MySQL, GraphQL, MongoDB e Node.js. Também desenvolvi sistemas de intranet para clientes como Hersheys, bancos brasileiros e uma mineradora, utilizando AngularJS e SharePoint, aprimorando a organização interna e o gerenciamento de dados.',
      },
    },
  },
  {
    translations: {
      en: {
        title: 'Freelance Projects',
        company: 'Various Clients',
        location: 'Global',
        startDate: 'Oct 2020',
        endDate: 'Present',
        responsibilities:
          'Alamanda (React and Node.JS), BV Bank (Angular 14), Sony (HTML, CSS and JS) and Luvieh (Shopify)',
      },
      pt: {
        title: 'Projetos Freelance',
        company: 'Diversos Clientes',
        location: 'Global',
        startDate: 'Out 2020',
        endDate: 'Presente',
        responsibilities:
          'Alamanda (React and Node.JS), BV Bank (Angular 14), Sony (HTML, CSS and JS) and Luvieh (Shopify)',
      },
    },
  },
];

export const experiences = experiencesWithouIds.map((item, index) => ({
  ...item,
  id: index,
}));
