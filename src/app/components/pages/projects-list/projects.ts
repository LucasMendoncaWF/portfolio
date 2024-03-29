export interface Project {
  Title: string;
  Link: string;
  Imagem: string;
  About: string;
  subCategory: string;
}

export const subCategoryLevel = {
  Angular: 2,
  React: 1,
  JQuery: 3,
  VueJS: 4,
  AngularJS: 5,
}

export const projects = {
  'demos': [
    {
      'Title': 'TvShow - React',
      'subCategory': 'React',
      'Link': 'https://lucasmendoncateste.netlify.com/',
      'Imagem': 'assets/images/tvshow.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    },
    
    {
      'Title': 'This Portfolio - Angular',
      'subCategory': 'Angular',
      'Link': '',
      'Imagem': 'assets/images/portfolio.png',
      'About': 'A way to show my work'
    },
    {
      'Title': 'Blog - Angular',
      'subCategory': 'Angular',
      'Link': 'https://angularblog.netlify.com/',
      'Imagem': 'assets/images/blog.png',
      'About': 'A study about Angular'
    },
    {
      'Title': 'Social Media - React',
      'subCategory': 'React',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/SocialMedia/SocialMedia.html',
      'Imagem': 'assets/images/SocialMedia.png',
      'About': 'A study about React'
    },
    {
      'Title': 'Dashboard - AngularJS',
      'subCategory': 'AngularJS',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/GerenciamentoProjetos.html',
      'Imagem': 'assets/images/dashboard.png',
      'About': 'A study about AngularJS and Javascript'
    },
    {
      'Title': 'LP Eixo Platina - React',
      'subCategory': 'React',
      'Link': 'https://eixo-lp.netlify.com/',
      'Imagem': 'assets/images/eixo.png',
      'About': 'Page developed in React, for Eixo Platina, to show a new building project'
    },
    {
      'Title': 'pneuStore - React',
      'subCategory': 'React',
      'Link': 'https://pneu-store.netlify.com/',
      'Imagem': 'assets/images/pneus.png',
      'About': 'Page developed to a PneuStore competition'
    },
    {
      'Title': 'E-Commerce - JQuery',
      'subCategory': 'JQuery',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/Vendas.html',
      'Imagem': 'assets/images/ecomerce.png',
      'About': 'A study about JQuery'
    },
    {
      'Title': 'Zara - React',
      'subCategory': 'React',
      'Link': 'https://gtc-lucasmendonca.netlify.com/',
      'Imagem': 'assets/images/gtc.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    },
    {
      'Title': 'Checklist - VueJS',
      'subCategory': 'VueJS',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/checklist/',
      'Imagem': 'assets/images/vue.png',
      'About': 'A study about VueJS'
    },
    {
      'Title': 'Login - JQuery',
      'subCategory': 'JQuery',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/Login.html',
      'Imagem': 'assets/images/login.png',
      'About': 'A study about JQuery'
    },
    {
      'Title': 'Marvel Characters - React',
      'subCategory': 'React',
      'Link': 'https://marveltestlucasmendonca.netlify.com/',
      'Imagem': 'assets/images/marvelTest.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    },
    {
      'Title': 'profit - React',
      'subCategory': 'React',
      'Link': 'https://test-profit-lucas-mendonca.netlify.com/',
      'Imagem': 'assets/images/profit.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    }
  ],
  'designs': [
    {
      'Title': 'Le jour',
      'Link': 'https://xd.adobe.com/view/2168ae57-7722-4175-7187-32285ced0798-5759/',
      'Imagem': 'assets/images/lejour.png',
      'About': 'Project designed in competition on FIAP, my graduation'
    },
    {
      'Title': 'This Portfolio',
      'Link': '',
      'Imagem': 'assets/images/portfolio.png',
      'About': 'A way to show my work'
    },
    {
      'Title': 'Nintendo Website Redesign',
      'Link': 'https://www.behance.net/gallery/135246757/Nintendo-redesign',
      'Imagem': 'assets/images/nintendo-site/desafio-01.jpg',
      'About': 'Design developed to a challenge to help a friend study front-end'
    },
  ],
  'main': [
     {
      'Title': 'SampaRural - Angular 9 - 2020',
      'Link': 'https://sampamaisrural.prefeitura.sp.gov.br/',
      'Imagem': 'assets/images/map-sprural.png',
      'About': 'Website developed with angular 9, I developed the whole website, creating pages, API integrations and a form generator'
    },
    {
      'Title': 'MeuCarroNovo - Angular 7 - 2020',
      'Link': 'https://www.meucarronovo.com.br',
      'Imagem': 'assets/images/meucarronovo.png',
      'About': 'Website developed with angular 7, I developed the analytics, some layouts ajusts, bugs corrections, changes of integration with API and also developed pages to another projects in the meucarronovo system'
    },
    {
      'Title': 'Alamanda - React And NestJS - 2022',
      'Link': 'https://vimeo.com/778621074',
      'Imagem': 'assets/images/alamanda-site-print.png',
      'About': 'E-Commerce (With admin area) that I designed and developed from scratch with React and NestJS'
    },
    {
      'Title': 'Omint - Wordpress - 2019',
      'Link': 'https://www.omint.com.br/en/',
      'Imagem': 'assets/images/omint.png',
      'About': 'Developed with Wordpress, I adjusted some layout bugs, created custom pages and edited the PHP integration'
    },
    
    {
      'Title': 'MeuCarroNovo - Advertise - Angular 7 - 2021',
      'Link': 'https://www.meucarronovo.com.br/contrate/',
      'Imagem': 'assets/images/anuncie.png',
      'About': 'Website developed with angular 7, I developed the analytics, some layouts ajusts, bugs corrections, integration with API and also developed pages.'
    },
    
    {
      'Title': 'MeuCarroNovo - Seller Area - Angular 7 - 2021',
      'Link': 'https://souanunciante.meucarronovo.com.br/',
      'Imagem': 'assets/images/seller.png',
      'About': 'Website developed with angular 7, I developed the analytics, some layouts ajusts, bugs corrections, integration with API and also developed pages.'
    },
    {
      'Title': 'Luvieh Jewellery - Shopify - 2021',
      'Link': 'https://luvieh.com/',
      'Imagem': 'assets/images/luvieh.png',
      'About': 'E-commerce developed with Shopify, a plataform like Wordpress. I made some modifications that the client wanted, edited the theme and created customized pages'
    },
    {
      'Title': 'Diário do Clima - React - 2022',
      'Link': 'https://diariodoclima.jurema.la/',
      'Imagem': 'assets/images/diario.png',
      'About': 'Website developed with React 18, I developed the whole website, creating pages, API integrations and configuring the project with webpack, eslit and unit tests.'
    },
    {
      'Title': 'Querido Diário - Angular - 2022',
      'Link': 'https://queridodiario.jurema.la/',
      'Imagem': 'assets/images/qd.png',
      'About': "I developed the 'Education' part of the website, creating pages, API integrations and refactoring the code that wasn't made with the best pratices."
    },
    {
      'Title': 'Emccamp - WordPress - 2019',
      'Link': 'https://emccamp.com.br/',
      'Imagem': 'assets/images/emccamp.png',
      'About': 'I Performed website maintenance, bug fixes and creation of new pages.'
    },
    {
      'Title': 'Banco BV - Angular 7 - 2019',
      'Link': 'https://www.bv.com.br/seguro',
      'Imagem': 'assets/images/bvseguros.png',
      'About': 'I developed pages in angular for Banco Votorantim, to present the available products.'
    },
  ]
}