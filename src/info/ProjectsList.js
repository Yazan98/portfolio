export const ALL_FILTER_TYPE = 'all';
export const ANDROID_FILTER_TYPE = 'android';
export const WEBSITES_FILTER_TYPE = 'Websites';
export const WEB_APPS_FILTER_TYPE = 'webApps';
export const TOOLS_FILTER_TYPE = 'tools';
export const FILTERED_PROJECTS_FILTER_TYPE = 'filtered';

export const ALL_PROJECTS_ID = 11;

export default function getProjectsList() {
  return [
    {
      id: 1,
      name: 'Autohub',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, Github Api V3, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/autohub_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      id: 2,
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      id: 3,
      name: 'Portfolio',
      createdAt: 'Github : 2020',
      description: 'My Personal Website Built With React.js, And Support PWAs and Some of SEO Techniques For Google Search Console and SPA with Typescript, Jsx, And SASS To Write Clear Css, React Router To Change Pages, Client Side Rendering Also Dark / White Mode Supported in All Pages Inside The Repository You Can Find The First and Second Version of The Website',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/portfolio_preview.webp',
      type: WEBSITES_FILTER_TYPE,
    },
    {
      id: 4,
      name: 'Drasati',
      createdAt: 'Github : 2020',
      description: 'Android Application : Closed Source An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/drasati_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      id: 5,
      name: 'Wintrop',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/wintrop_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      id: 6,
      name: 'Shopie Api',
      createdAt: 'Github : 2021',
      description: 'Api - Open Source Api Built With PHP - Laravel To Calculate The Database Relations And Logic For Shop Application and Website to Manage Accounts, Recipes, Restaurants, Bearer Tokens, Phone Number Verification, User Addresses, Categories This Project Mainly Built to Apply PHP Skills into a Project in PHP Training Path',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/shopie_preview.webp',
      type: WEB_APPS_FILTER_TYPE,
    },
    {
      id: 7,
      name: 'Vortex',
      createdAt: 'Github : 2019',
      description: 'Android Library : Open Source Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases This Library is Not Just Base Code it\'s also help you to get the target as soon as possible with ready techniques',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/vortex_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      id: 8,
      name: 'Netflix Clone',
      createdAt: 'Github : 2021',
      description: 'Website - Open Source a React.js Project Built to show Movies Based on MoviesDB Api And React Hooks, Typescript',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/netflex_preview.webp',
      type: WEBSITES_FILTER_TYPE,
    },
    {
      id: 9,
      name: 'Github Clone',
      createdAt: 'Github : 2021',
      description: 'Website - Open Source a React.js Project With Github Api V3 Project To Show Popular Repos, PWA, Show Profile Repos, Information, Profile View With Github UserName, Grid - Linear List Toggle',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/github_preview.webp',
      type: WEBSITES_FILTER_TYPE,
    },
    {
      id: 10,
      name: 'Destiny Api',
      createdAt: 'Github : 2021',
      description: 'Api - Open Source Spring Boot Project To Manage Firebase Admin SDK, Mysql, JWT Tokens, Mainly To Manage Mobile Applications and Built With Kotlin, Kotlin-Jackson',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_api_preview.webp',
      type: WEB_APPS_FILTER_TYPE,
    },
    {
      id: 11,
      name: 'All Projects',
      createdAt: 'View All Projects Open, Closed Source',
      description: 'Show All Projects In One List with All Links Required to Each Project with Description and More Filters',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/all_preview.webp',
      type: FILTERED_PROJECTS_FILTER_TYPE,
    },
  ];
}

export function getProjectsListByFilter(filter) {
  return getProjectsList().filter((e) => e.type === filter);
}
