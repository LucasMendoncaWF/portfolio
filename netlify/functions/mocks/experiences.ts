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

export const experiences: WorkExperience[] = [
  {
    id: 1,
    translations: {
      en: {
        title: 'Senior Front-End Developer',
        company: 'Alto',
        location: 'Remote - USA',
        startDate: 'Jan 2023',
        endDate: 'Present',
        responsibilities:
          'I built the Coaching Dashboard for Anytime Fitness (SaaS) using React with TypeScript, developed reusable custom components adopted across the website, delivered new features weekly, solved all bugs assigned to me quickly and maintained the “Bar Method” website built on WordPress.',
      },
      pt: {
        title: 'Desenvolvedor Front-End Sênior',
        company: 'Alto',
        location: 'Remoto - EUA',
        startDate: 'Jan 2023',
        endDate: 'Presente',
        responsibilities:
          'Criei o Painel de Coaching para Anytime Fitness (SaaS) usando React com TypeScript, desenvolvi componentes personalizados reutilizáveis ​​adotados em todo o site, entreguei novos recursos semanalmente, resolvi todos os bugs atribuídos a mim rapidamente e mantive o site “Bar Method” criado no WordPress.',
      },
    },
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
