export const ALL_FILTER_TYPE = 'all';
export const ANDROID_FILTER_TYPE = 'android';
export const WEBSITES_FILTER_TYPE = 'Websites';
export const WEB_APPS_FILTER_TYPE = 'webApps';
export const TOOLS_FILTER_TYPE = 'tools';
export const FILTERED_PROJECTS_FILTER_TYPE = 'filtered';

export default function getProjectsList() {
  return [
    {
      name: 'Autohub',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, Github Api V3, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/autohub_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },
    {
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
    },

  ];
}

export function getProjectsListByFilter(filter) {
  return getProjectsList((el) => el.type === filter);
}
