import RafeeqImage from '../components/images/rafeeq_landing.png';
import RafeeqImage1 from '../components/images/rafeeq_1.png';
import RafeeqImage2 from '../components/images/rafeeq_2.png';
import RafeeqImage3 from '../components/images/rafeeq_3.png';
import RafeeqImage4 from '../components/images/rafeeq_4.png';
import RafeeqImage5 from '../components/images/rafeeq_5.png';
import RafeeqImage6 from '../components/images/rafeeq_6.png';
import RafeeqImage7 from '../components/images/rafeeq_7.png';
import RafeeqImage8 from '../components/images/rafeeq_8.png';
import RafeeqImage9 from '../components/images/rafeeq_9.png';
import RafeeqImage10 from '../components/images/rafeeq_10.png';
import RafeeqImage11 from '../components/images/rafeeq_11.png';

export default function getFeaturedProjectsList() {
    return [
        {
            id: 1,
            name: 'Rafeeq',
            createdAt: '2026',
            description: 'Compose Multiplatform Mobile Application Targeting Android, IOS with Shared Logic and UI',
            longDescription: "This is the First Full Project to show Quran Content for Muslims with Arabic and English with a Shared UI and Logic Using Kotlin and Compose Multiplatform with Embedded UI Composables inside SwiftUI and Swift, The Idea of Building this Project is to See how Possible i can Share the UI Between Android and IOS with a KMP Official Libraries",
            image: RafeeqImage,
            imageProject: RafeeqImage,
            type: 'mobile',
            tags: [
                "Compose Multiplatform",
                "Swift 5",
                "Swift UI",
                "Jetpack Compose",
                "Local Json Resources",
                "Shared Logic",
                "Shared UI",
                "Shared Database",
            ],
            images: [RafeeqImage1, RafeeqImage2, RafeeqImage3, RafeeqImage4, RafeeqImage5, RafeeqImage6, RafeeqImage7, RafeeqImage8, RafeeqImage9, RafeeqImage10, RafeeqImage11]
        },
        {
            id: 10,
            name: 'Gitly',
            createdAt: 'Github : 2024',
            description: 'IOS Application Built with SwiftUI, GraphQL, Apollo Client, UserDefaults, MVVM, Dynamic Widgets, Nested Navigations',
            longDescription: "This Project Built to Learn SwiftUI on IOS, Macos Apps and the Usage in this project for Apollo Client and GraphQL available only in IOS Apps, This Project has a Download Schema, Generate and build Dynamic GraphQL Queries",
            image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/gitly_preview.webp',
            imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/gitly_preview.webp",
            type: 'ios',
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
        }, {
            id: 2,
            name: 'RickAndMorty',
            createdAt: 'Github : 2023',
            description: 'IOS Application Built with UIKit, Alamofire, Push Navigations, Nested Navigations, Tab Bar View, Realm, Collection Views',
            longDescription: "This Project Built to Learn the Nested Navigations, Nested Collection Views, Nested Push Navigations Built with Alamofire, Realm IOS SDK, UIKit",
            image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/rick_morty_preview.webp',
            imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/rick_morty_preview.webp",
            type: 'ios',
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
        }, {
            id: 3,
            name: 'Coina',
            createdAt: 'Github : 2023',
            description: 'Kotlin Multiplatform Mobile Application Written in Kotlin Jetpack Compose and Swift with SwiftUI, Ktor Client',
            longDescription: "This Project Built to test the Concept of Sharing the Bussiness Logic between Native Android, IOS Apps using Kotlin Multiplatform with Ktor Client, Offline Caching with Realm Kotlin SDK to share Queries",
            image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/kmm_preview.webp',
            imageProject: "https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/kmm_preview.webp",
            type: 'android',
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
            type: 'android',
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
            type: 'android',
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
        }
    ];
}