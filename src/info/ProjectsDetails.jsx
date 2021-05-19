import { isApplicationLightTheme } from './ThemeInfo';

const theme = isApplicationLightTheme();
export const Projects = () => [
  {
    name: 'Vortex',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/101130971-54088b00-35b9-11eb-8302-f88b2bcb8cd9.png',
    description: 'Vortex is An Android Infrastructure to Build Multi Modular Android Applications with Generated Base Code and Handle State',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/vortex-io/Vortex',
      },
      {
        type: 'Website',
        link: 'https://vortex-io.github.io',
      },
    ],
  },
  {
    name: 'Autohub',
    isOpenSource: true,
    logo: 'https://raw.githubusercontent.com/Yazan98/portfolio/9a1a3aa86f18d86a266e4d16d024a186276acf4e/src/images/github-logo_light.svg',
    description: 'An Github Client Built To Test Vortex Infrastructure For Android Applications With A Lot Of Features To Manage Github Accounts Personal Accounts',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Github-Client',
      },
      {
        type: 'Website',
        link: '/#/app/Autohub',
      },
    ],
  },
  {
    name: 'Wintrop',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/100293783-a69ed300-2f39-11eb-821d-8e432378643b.png',
    description: 'Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Wintrop',
      },
      {
        type: 'Website',
        link: '/#/app/Wintrop',
      },
    ],
  },
  {
    name: 'Portfolio',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/101133349-6be20e00-35bd-11eb-917b-446fd92c0723.png',
    description: 'This Project is React Website With PWA Integration To Add Some Projects I worked on with Description on each Project Info',
    filter: 'PWA',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/portfolio',
      },
      {
        type: 'Website',
        link: 'https://www.yazantarifi.com',
      },
    ],
  },
  {
    name: 'Destiny App',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/73178745-d0188380-4109-11ea-949e-ac8805551551.png',
    description: 'Android Application for Food Delivery, Vortex V1 Testing, Multi Modular Application, Realm Database Example, Kotlin Coroutines',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Destiny',
      },
    ],
  },
  {
    name: 'Destiny Api',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/73178745-d0188380-4109-11ea-949e-ac8805551551.png',
    description: 'Restful Api Powered by SpringBoot, MySql (RDS), Kotlin Base Code, To manage Destiny App Logic with Secured Api',
    filter: 'Web Apps',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Destiny-Api',
      },
    ],
  },
  {
    name: 'Netflix Clone',
    isOpenSource: true,
    logo: 'https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png',
    description: 'PWA Training Project to Create Website with MovieDB Api, Typescripe, SPA Website Hosted on Firebase Hosting',
    filter: 'PWA',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Netflix-Clone',
      },
      {
        type: 'Website',
        link: 'https://netflix-clone-38a7b.web.app/',
      },
    ],
  },
  {
    name: 'Denamo',
    isOpenSource: true,
    logo: 'https://yazantarifi.gallerycdn.vsassets.io/extensions/yazantarifi/denamo/0.0.2/1600405273133/Microsoft.VisualStudio.Services.Icons.Default',
    description: 'Visual Studio Code Blue/Dark Theme Plugin to Give VS-Code Nice Theme to Build Typescript Projects',
    filter: 'Plugin',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Denamo',
      },
      {
        type: 'Website',
        link: 'https://marketplace.visualstudio.com/items?itemName=YazanTarifi.denamo',
      },
    ],
  },
  {
    name: 'Groupy',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101137835-44427400-35c4-11eb-86f2-89600483b26f.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/groupy_white.png?raw=true',
    description: 'Graduation Project Powered By Firebase, Realtime Chat, Kotlin Language, MVP, Graduation Projects Management, Task Management, Admin App',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Groupy',
      },
    ],
  },
  {
    name: 'Feature Flag Example',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/101138076-8c619680-35c4-11eb-9006-327fe90e2be0.png',
    description: 'Restful Api Powered By Spring Boot to Build Feature Flag Api to Deliver Static Configuration to Android Apps',
    filter: 'Web Apps',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Feature-Flag-Example',
      },
    ],
  },
  {
    name: 'Android Template',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/101138342-ec583d00-35c4-11eb-8e51-81108dfbfc47.png',
    description: 'A Ready Android Application template to Build Android Multi Modular Applications With Clean Architecture, Mvvm, Clone and Run Direct',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/AndroidTemplate',
      },
    ],
  },
  {
    name: 'Exposer',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101141952-d1d49280-35c9-11eb-97e5-939657ecb086.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/exposer_white.png?raw=true',
    description: 'Kotlin Multiplatform Project to Lead The Domain Layer for Android, IOS based on RxJava, Use Cases',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Exposer',
      },
    ],
  },
  {
    name: 'Actor',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101142216-27a93a80-35ca-11eb-91e9-94401815b829.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/actor_white.png?raw=true',
    description: 'Kotlin Spring Boot Controller Generation to Generate PostMan Collections based on Spring Controllers and Json Builder',
    filter: 'Web Apps',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Actor',
      },
    ],
  },
  {
    name: 'Drasati',
    isOpenSource: false,
    logo: 'https://user-images.githubusercontent.com/29167110/100681109-e134b100-3327-11eb-94de-3ccc6a567a36.png',
    description: 'An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes',
    filter: 'Android',
    links: [
      {
        type: 'Website',
        link: '/#/app/Drasati',
      },
    ],
  },
  {
    name: 'Vortex Website',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/101130971-54088b00-35b9-11eb-8302-f88b2bcb8cd9.png',
    description: 'PWA Documentation for Vortex Library and Generators to Create Your Own App with Vortex Implementation',
    filter: 'PWA',
    links: [
      {
        type: 'Website',
        link: 'https://www.vortex-io.github.io',
      },
    ],
  },
  {
    name: 'Vortex Plugin',
    isOpenSource: true,
    logo: 'https://user-images.githubusercontent.com/29167110/101130971-54088b00-35b9-11eb-8302-f88b2bcb8cd9.png',
    description: 'Gradle Plugin To Config Multi Modular Android Apps With Clean Architecture Modules, Dependencies',
    filter: 'Plugin',
    links: [
      {
        type: 'Website',
        link: 'https://www.vortex-io.github.io',
      },
    ],
  },
  {
    name: 'Bookie',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101142907-14e33580-35cb-11eb-922b-30b3fb55a578.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/bookie_white.png?raw=true',
    description: 'Spring Boot Restful Api Powered by SpringBoot, Swagger-ui, MySql, Error Handling, JWT Tokens, etc',
    filter: 'Web Apps',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Books-spring',
      },
    ],
  },
  {
    name: 'Bump Api',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101143357-a18df380-35cb-11eb-98b3-868f0a72faa2.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/bump_white.png?raw=true',
    description: 'Spring Boot Restful Api (Secured Api) Configured for AWS (Beanstalk, RDS) for Games Store Website, Radis Caching',
    filter: 'Web Apps',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/BumbApi',
      },
    ],
  },
  {
    name: 'Atto',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101143829-50caca80-35cc-11eb-804c-e7dcc6243626.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/random_white.png?raw=true',
    description: 'Mvp Structure to Build Multi Modular Apps With Ready Application Operations (Deprecated)',
    filter: 'Android',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/vortex-io/Vortex',
      },
    ],
  },
  {
    name: 'Ktor Example',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101143829-50caca80-35cc-11eb-804c-e7dcc6243626.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/random_white.png?raw=true',
    description: 'Ktor Framework Project to Build Restful Api with Mongo Database, Firebase, Netty Server, Error Handling, Routers',
    filter: 'Web Apps',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Ktor-Example',
      },
    ],
  },
  {
    name: 'Thentrom',
    isOpenSource: true,
    logo: theme ? 'https://user-images.githubusercontent.com/29167110/101143829-50caca80-35cc-11eb-804c-e7dcc6243626.png' : 'https://github.com/Yazan98/portfolio/blob/master/src/images/random_white.png?raw=true',
    description: 'Intellij Plugin To Give Intellij Yellow, Orange Theme While Building Kotlin Projects, Web Apps Theme Not Good to Mobile xD',
    filter: 'Plugin',
    links: [
      {
        type: 'Github',
        link: 'https://github.com/Yazan98/Thentrom',
      },
    ],
  },
];

export const findProjectByFilterType = (filterType) => {
  if (filterType === 'All') {
    return Projects();
  }
  return Projects().filter((item) => item.filter.includes(filterType));
};

export const findProjectByName = (name, filterType) => Projects().filter((item) => item.name.includes(name) || item.filter.includes(filterType));
