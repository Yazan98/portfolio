export const ALL_FILTER_TYPE = 'all';
export const ANDROID_FILTER_TYPE = 'android';
export const IOS_FILTER_TYPE = 'ios';
export const WEBSITES_FILTER_TYPE = 'Websites';
export const WEB_APPS_FILTER_TYPE = 'webApps';
export const MAC_APPS_FILTER_TYPE = 'macApps';
export const TOOLS_FILTER_TYPE = 'tools';
export const FILTERED_PROJECTS_FILTER_TYPE = 'filtered';

export const ALL_PROJECTS_ID = 'All Projects';

export default function getProjectsList() {
  return [
    {
      id: 1,
      name: 'Gitly',
      createdAt: 'Github : 2024',
      description: 'IOS Application Built with SwiftUI, GraphQL, Apollo Client, UserDefaults, MVVM, Dynamic Widgets, Nested Navigations',
      longDescription: "This Project Built to Learn SwiftUI on IOS, Macos Apps and the Usage in this project for Apollo Client and GraphQL available only in IOS Apps, This Project has a Download Schema, Generate and build Dynamic GraphQL Queries",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/gitly_preview.webp',
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/gitly_preview.webp",
      type: IOS_FILTER_TYPE,
      link: "https://github.com/Yazan98/Gitly",
      tags: [
        "IOS App",
        "Swift 5",
        "Swift UI",
        "User Defaults",
        "GraphQL",
        "Apollo Client",
        "Dynamic Queries",
        "Pagination",
      ],
      images: [
        "https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.45.32.png",
        "https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.45.56.png",
        "https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.46.35.png",
        "https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.46.10.png"
      ]
    },{
      id: 2,
      name: 'RickAndMorty',
      createdAt: 'Github : 2023',
      description: 'IOS Application Built with UIKit, Alamofire, Push Navigations, Nested Navigations, Tab Bar View, Realm, Collection Views',
      longDescription: "This Project Built to Learn the Nested Navigations, Nested Collection Views, Nested Push Navigations Built with Alamofire, Realm IOS SDK, UIKit",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/rick_morty_preview.webp',
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/rick_morty_preview.webp",
      type: IOS_FILTER_TYPE,
      link: "https://github.com/Yazan98/rick-morty-ios-app",
      tags: [
        "IOS App",
        "Swift 5",
        "UIKit",
        "Realm IOS",
        "Alamofire",
        "CollectionViews",
        "Tab Bar Layout",
        "Nested Navigations",
      ],
      images: [
        "https://private-user-images.githubusercontent.com/29167110/265701773-1abca177-7a01-4b38-a670-7c2ec09e4f89.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDE3NzMtMWFiY2ExNzctN2EwMS00YjM4LWE2NzAtN2MyZWMwOWU0Zjg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYwODgxNjViZTNmZTNmODJkM2Y4NTgwNzI1YTFiZTE1NWMwZjQwZTBiM2FkMTNiMTI4YmVmMzYyYmYwNjYzOWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.FFyKnVyQXZm0wb7SbxW39sTMMf7y3pZetmYM9FOaY30",
          "https://private-user-images.githubusercontent.com/29167110/265701930-2176e896-977e-4a3e-88a6-f303423eb71f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDE5MzAtMjE3NmU4OTYtOTc3ZS00YTNlLTg4YTYtZjMwMzQyM2ViNzFmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNlMGNkOTJmNjkzMDNhMmM3NTk4MDViOTQzMTc0MzQxMzljNDJhMTRlMTc5MTIwMjJjMDJjODM3NTMxYWEyYjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5jxeJ0HZVygHLfH2OfvVsbMMjDRaYMncPTsMfq-gpd0",
          "https://private-user-images.githubusercontent.com/29167110/265702010-34a8b1a4-9a3c-42b7-be88-97abef470a1e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDIwMTAtMzRhOGIxYTQtOWEzYy00MmI3LWJlODgtOTdhYmVmNDcwYTFlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgwMDAyY2ZjZWZhOWJlMDlhYjc2OWNjMzcwMzAzZjBkODM0YmNiNzQ4NDhkMjI0NTkyNWE3MGEzYWM5YzhmZjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.YCWHOukYd_2sir_NpaJN7EXCyYtdtVEBx_0NvN28iJw",
          "https://private-user-images.githubusercontent.com/29167110/265702414-48513136-9679-4939-80a3-42769cbc7a86.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDI0MTQtNDg1MTMxMzYtOTY3OS00OTM5LTgwYTMtNDI3NjljYmM3YTg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk1NDA2M2NjNDVkMmE1MmE2ZGE3ZmUyNjI2YjY1YWZiOTk4MzBhODYxZWY3ODQ0OTUxMmE4ZTI2M2E2MTRiYzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.BX-ewZVBDld2THCMmbmipReOJDDp82KD_Dq4EXOBZdI",
          "https://private-user-images.githubusercontent.com/29167110/265702545-6126642a-43a1-4af7-a15a-2d3fa5e9cb1b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDI1NDUtNjEyNjY0MmEtNDNhMS00YWY3LWExNWEtMmQzZmE1ZTljYjFiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEyM2RmMDViM2M0ZTMyOGY2MGFhNjU2MjRlMjYyMTNmNzI1ZjQ3NDUxZjIyZmQxOTBmZDI4YzcwY2NlYjYyZjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.kcyv7kXLM9f0w-OYiUK0TiJzjtt0SuYf73U7gETH3Co",
          "https://private-user-images.githubusercontent.com/29167110/265703050-b32d4598-1ad1-496c-99f0-3324cbf82a41.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDMwNTAtYjMyZDQ1OTgtMWFkMS00OTZjLTk5ZjAtMzMyNGNiZjgyYTQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM1OWZhYjFmYWJhN2Q0ZmI1OGRmYmFhNTc0MDQzMDY5Y2NiY2IzY2QwYTYyYzFhODEyOTY3NTA0YWRiMTAyNjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Dh_1FjHQv66uASMGql7rogpnNmC_hLQD02SG9ezc6MQ",
          "https://private-user-images.githubusercontent.com/29167110/265702966-20c9f581-10c1-4605-a6f4-a6b9b5adad99.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDI5NjYtMjBjOWY1ODEtMTBjMS00NjA1LWE2ZjQtYTZiOWI1YWRhZDk5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZkZDkyMDc2MzBjNTZhMjhhYWVlM2UxMGQ1ZmYyMDVjYjRiNDYxZGZhMWUxODA1NDFjMWI5MzQ0M2U3ZjdjOTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._7KCRFnvuxPra9r0hRCqWPAVgoDMYlRPq1hJ8MW30rs",
          "https://private-user-images.githubusercontent.com/29167110/265703340-3694bb40-3314-4235-88ab-b934705aeb9e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTM1OTE3MTMsIm5iZiI6MTcxMzU5MTQxMywicGF0aCI6Ii8yOTE2NzExMC8yNjU3MDMzNDAtMzY5NGJiNDAtMzMxNC00MjM1LTg4YWItYjkzNDcwNWFlYjllLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDIwVDA1MzY1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg2MzFhM2Y2N2Y5ZWEyNDM1YmJiNGM3M2NkOWRhZTdiNmM5ZjRmNGM1ODVhNjAzMmFmOWUzMGY1ZDJlMWE1NTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.C_w6rKCKrP2n5mE07423Xt5h-J-cMetOLBpM1lKEoOo"
      ]
    },{
      id: 3,
      name: 'Coina',
      createdAt: 'Github : 2023',
      description: 'Kotlin Multiplatform Mobile Application Written in Kotlin Jetpack Compose and Swift with SwiftUI, Ktor Client',
      longDescription: "This Project Built to test the Concept of Sharing the Bussiness Logic between Native Android, IOS Apps using Kotlin Multiplatform with Ktor Client, Offline Caching with Realm Kotlin SDK to share Queries",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/kmm_preview.webp',
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/kmm_preview.webp",
      type: ANDROID_FILTER_TYPE,
      link: "https://github.com/Yazan98/KMM-Cryptocurrency",
      tags: [
        "IOS App",
        "Jetpack Compose",
        "Android",
        "Swift UI",
        "User Defaults",
        "Shared Prefs",
        "Ktor Client",
        "Realm Kotlin SDK"
      ]
    },
    {
      id: 4,
      name: 'Autohub',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, Github Api V3, With Navigation Component',
      longDescription: "Android Application is created to view Github Account Information with Authentication Basic Auth Username and Password Powered By Github Api V3 and the Base Structure of the Project is MVVM with Navigation Components and Kotlin Programming Language",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/autohub_preview.webp',
      imageProject: "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub.png?raw=true",
      type: ANDROID_FILTER_TYPE,
      link: "https://github.com/Yazan98/Github-Client",
      tags: [
          "Kotlin Courotines",
          "Multi Modular App",
          "Vortex",
          "MVVM",
          "Github Api",
          "Kotlin",
          "Retrofit",
          "RxJava 2"
      ],
      images: [
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_1.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_2.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_3.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_4.png?raw=true"
      ]
    },
    {
      id: 5,
      name: 'Destiny',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Built Based on MVVM, Vortex, SpringBoot Api, With Navigation Component',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Application Built to show Restaurants and Food Delivery App The Idea of this project is to Build a Food Delivery Api and see the Results on Mobile App and the Mobile App Built with Kotlin and MVVM",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_preview.webp",
      tags: [
        "Kotlin Courotines",
        "Multi Modular App",
        "Vortex",
        "MVVM",
        "Kotlin",
        "Retrofit",
        "RxJava 2"
      ],
      images: [
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_1.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_2.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_3.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_4.png?raw=true"
      ]
    },
    {
      id: 6,
      name: 'Portfolio',
      createdAt: 'Github : 2020',
      description: 'My Personal Website Built With React.js, And Support PWAs and Some of SEO Techniques For Google Search Console and SPA with Typescript, Jsx, And SASS To Write Clear Css, React Router To Change Pages, Client Side Rendering Also Dark / White Mode Supported in All Pages Inside The Repository You Can Find The First and Second Version of The Website',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/portfolio_preview.webp',
      type: WEBSITES_FILTER_TYPE,
      longDescription: "My Personal Website Built With React.js, And Support PWAs and Some of SEO Techniques For Google Search Console and SPA with Typescript, Jsx, And SASS To Write Clear Css, React Router To Change Pages, Client Side Rendering Also Dark / White Mode Supported in All Pages Inside The Repository You Can Find The First and Second Version of The Website",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/portfolio_preview.webp",
      link: "https://github.com/Yazan98/portfolio",
      tags: [
        "React.js",
        "SASS Styling",
        "React Hooks",
        "Dark, White Mode",
        "Responsive Design",
        "Flex - Grid System",
        "Material UI"
      ],
      images: [
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_1.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_2.png?raw=true",
          "https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_3.png?raw=true"
      ]
    },
    {
      id: 7,
      name: 'Drasati',
      createdAt: '2020',
      description: 'Android Application : Closed Source An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/drasati_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Application : Closed Source An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan Built With Java / Kotlin With MVP",
      imageProject: "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_main.png?raw=true",
      tags: [
        "Kotlin Courotines",
        "Single Modular App",
        "MVP",
        "Kotlin",
        "Retrofit",
        "RxJava 2",
        "Java",
        "Firebase"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_3.png?raw=true"
      ]
    },
    {
      id: 8,
      name: 'Wintrop',
      createdAt: 'Github : 2019',
      description: 'Android Application : Open Source Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/wintrop_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Application : Open Source Built to Communicate with Open Weather Api to check the Weather Status of current Country and list all the response Built with Kotlin Programming Language and Local Caching in Realm Database",
      imageProject: "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_main.png?raw=true",
      link: "https://github.com/Yazan98/Wintrop",
      tags: [
        "Kotlin Courotines",
        "Realm Database",
        "Multi Modular App",
        "Retrofit",
        "Kotlin"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_3.png?raw=true"
      ]
    },
    {
      id: 9,
      name: 'Shopie Api',
      createdAt: 'Github : 2021',
      description: 'Api - Open Source Api Built With PHP - Laravel To Calculate The Database Relations And Logic For Shop Application and Website to Manage Accounts, Recipes, Restaurants, Bearer Tokens, Phone Number Verification, User Addresses, Categories This Project Mainly Built to Apply PHP Skills into a Project in PHP Training Path',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/shopie_preview.webp',
      longDescription: "Api - Open Source Api Built With PHP - Laravel To Calculate The Database Relations And Logic For Shop Application and Website to Manage Accounts, Recipes, Restaurants, Bearer Tokens, Phone Number Verification, User Addresses, Categories This Project Mainly Built to Apply PHP Skills into a Project in PHP Training Path",
      type: WEB_APPS_FILTER_TYPE,
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/shopie_preview.webp",
      link: "https://github.com/Yazan98/shop-api",
      tags: [
        "PHP Laravel",
        "Mysql Database",
        "Json Response"
      ]
    },
    {
      id: 10,
      name: 'Vortex',
      createdAt: 'Github : 2019',
      description: 'Android Library : Open Source Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases This Library is Not Just Base Code it\'s also help you to get the target as soon as possible with ready techniques',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/vortex_preview.webp',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Library : Open Source Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases This Library is Not Just Base Code it\'s also help you to get the target as soon as possible with ready techniques",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/vortex_preview.webp",
      link: "https://github.com/Yazan98/vortex",
      tags: [
        "Android Library",
        "Multi Modular Library",
        "MVVM Structure",
        "Bintray (JCenter)",
        "Utility Classes"
      ]
    },
    {
      id: 11,
      name: 'Netflix Clone',
      createdAt: 'Github : 2021',
      description: 'Website - Open Source a React.js Project Built to show Movies Based on MoviesDB Api And React Hooks, Typescript',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/netflex_preview.webp',
      type: WEBSITES_FILTER_TYPE,
      longDescription: "Website Built with React.js and React Router with Movies Database and Training on Material UI, Firebase Deployment, Single Page Application and Introduction to Typescript Language and SASS Styling",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/netflex_preview.webp",
      link: "https://github.com/Yazan98/Netflix-Clone",
      tags: [
        "Movies DB Database",
        "React Router Dom",
        "React.js",
        "SASS Styling",
        "Grid System",
        "Flex System",
        "Material UI"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_3.png?raw=true"
      ]
    },
    {
      id: 12,
      name: 'Github Clone',
      createdAt: 'Github : 2021',
      description: 'Website - Open Source a React.js Project With Github Api V3 Project To Show Popular Repos, PWA, Show Profile Repos, Information, Profile View With Github UserName, Grid - Linear List Toggle',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/github_preview.webp',
      type: WEBSITES_FILTER_TYPE,
      longDescription: "Website Built with React.js and React Router To Build Single Page Application with React Hooks and Grid / Flex System and Github Api V3, Axios",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/github_preview.webp",
      link: "https://github.com/Yazan98/github-clone",
      tags: [
        "React.js",
          "Firebase Deployment",
          "Grid System",
          "Flex System",
          "React Hooks",
          "Axios",
          "Github Api V3"
      ],
      images: [
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_1.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_2.png?raw=true",
        "https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_3.png?raw=true"
      ]
    },
    {
      id: 13,
      name: 'Autohub V2.0',
      createdAt: 'Github : 2022',
      description: 'Android Application : Closed Source Multi Modular Application With Jetpack Compose',
      longDescription: "Android Application Built With Navigation Component and Jetpack Compose, Hilt Dependency Injection, Firebase Crashlytics, Navigation Between Modules, UseCases, Retrofit With Coroutines, Github Api, Vanite",
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/projects/autohub_2.webp',
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/projects/autohub_2.webp",
      type: ANDROID_FILTER_TYPE,
      link: "",
      tags: [
        "Kotlin Coroutines",
        "Multi Modular App",
        "Vanite",
        "MVVM",
        "Github Api",
        "Kotlin",
        "Retrofit",
        "Compose",
        "Hilt",
        "Navigation Component",
      ],
      images: [
        "https://user-images.githubusercontent.com/29167110/176329704-ea3b64eb-d42f-4f1f-932a-45cce82caf3f.png",
        "https://user-images.githubusercontent.com/29167110/176329706-ff7efbe1-9b53-4134-96a1-4f12e0a0b89f.png",
        "https://user-images.githubusercontent.com/29167110/176329707-1042d0a4-df15-43e7-a5e6-51f7ec2ba7b6.png",
        "https://user-images.githubusercontent.com/29167110/176329708-78d3db2b-76bc-4e4b-b8bb-2e902be77363.png"
      ]
    },
    {
      id: 14,
      name: 'Destiny Api',
      createdAt: 'Github : 2021',
      description: 'Api - Open Source Spring Boot Project To Manage Firebase Admin SDK, Mysql, JWT Tokens, Mainly To Manage Mobile Applications and Built With Kotlin, Kotlin-Jackson',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_api_preview.webp',
      type: WEB_APPS_FILTER_TYPE,
      longDescription: "Web Application Built with Spring Boot Framework to Manage Food Ordering System with Firebase Admin SDK and Mysql Database with OAuth JWT Authentication and Kotlin Programming Language, Firebase Realtime Database, Exception Handling",
      imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_api_preview.webp",
      link: "https://github.com/Yazan98/destiny-api",
      tags: [
        "Spring Boot Api",
        "JWT Authentication",
        "Json Response",
        "MySql Database",
        "Firebase Admin"
      ]
    },{
      id: 15,
      name: 'Tapper',
      createdAt: 'Github : 2024',
      description: 'Desktop Application Built With Swift, SwiftUI, Tapper CLI, ADB Commands Cli Builder',
      image: 'https://github.com/tapper-app/assets/raw/main/Screenshot%202024-01-23%20at%208.21.27%E2%80%AFAM.png?raw=true',
      type: MAC_APPS_FILTER_TYPE,
      longDescription: "User Interface Application to generate ADB Commands Built for Macos Devices and Written in SwiftUI, Also Save ADB Commands in Realm Database",
      imageProject: "https://github.com/tapper-app/assets/raw/main/Screenshot%202024-01-23%20at%208.21.27%E2%80%AFAM.png?raw=true",
      link: "https://github.com/tapper-app",
      tags: [
        "Swift UI",
        "Macos Apps",
        "Realm Swift",
        "NodeJs Cli",
      ]
    },
    {
      id: 16,
      name: 'Legora',
      createdAt: 'Github : 2021',
      description: 'Android Application - Training Project to Test Vanite Source Code Library Built With Riot Api',
      image: 'https://user-images.githubusercontent.com/29167110/202738494-ca1a57ed-6b1f-4ecf-b69f-026c1ec4da3f.png',
      type: ANDROID_FILTER_TYPE,
      longDescription: "Android Application Built With Navigation Components and ViewBinding, Vanite, Coroutines, Retrofit, Moshi, Multi Modular Application To Show Summoners Information and Champions, Items, Deeplinks, Skins Built with Riot Api",
      imageProject: "https://user-images.githubusercontent.com/29167110/202738494-ca1a57ed-6b1f-4ecf-b69f-026c1ec4da3f.png",
      link: "https://play.google.com/store/apps/details?id=com.yazantarifi.league.client",
      tags: [
        "Kotlin",
          "View Binding",
          "Coroutines",
          "Vanite",
          "Retrofit"
      ],
      images: [
        "https://user-images.githubusercontent.com/29167110/202739048-0663af37-2394-4a2f-9fd4-173bc4f64aeb.png",
        "https://user-images.githubusercontent.com/29167110/202739066-614a7921-d53f-4ef2-a67f-ca8b3f884902.png",
        "https://user-images.githubusercontent.com/29167110/202739084-f6c93f09-cdff-4044-9c0d-de35d86f1277.png",
        "https://user-images.githubusercontent.com/29167110/202739101-406bb5a2-4448-404e-8c16-2e8cd55f4744.png",
        "https://user-images.githubusercontent.com/29167110/202739117-b79c40dc-2648-43fe-ab59-ae3d6ca0283b.png",
        "https://user-images.githubusercontent.com/29167110/202739136-50685847-133d-450e-b107-f709f39b532a.png",
        "https://user-images.githubusercontent.com/29167110/202739167-76fe2730-986d-4fdb-ac34-493819797005.png",
      ]
    },
    {
      id: 17,
      name: 'All Projects',
      createdAt: 'View All Projects Open, Closed Source',
      description: 'Show All Projects In One List with All Links Required to Each Project with Description and More Filters',
      image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/all_preview.webp',
      type: FILTERED_PROJECTS_FILTER_TYPE,
    },
  ];
}

export function getProjectsListByFilter(filter) {
  return getProjectsList().filter((e) => e.type === filter);
}

export function getProjectsListByName(filter) {
  return getProjectsList().filter((e) => e.name === filter);
}
