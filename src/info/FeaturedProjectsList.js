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

import ExpenziaImage from '../components/images/expenzia.png';
import ExpenziaImage1 from '../components/images/expenzia_1.png';
import ExpenziaImage2 from '../components/images/expenzia_2.png';
import ExpenziaImage3 from '../components/images/expenzia_3.png';
import ExpenziaImage4 from '../components/images/expenzia_4.png';
import ExpenziaImage5 from '../components/images/expenzia_5.png';
import ExpenziaImage6 from '../components/images/expenzia_6.png';

import LegoraImage from '../components/images/legora.png';

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
            id: 2,
            name: 'Expenzia',
            createdAt: '2025',
            description: 'Native Android Application for Expenses Tracker',
            longDescription: "The Target of Building the Application is to Test the new Deployment of Android App to Google Play Store with the New Rules and Changes also to Learn how to Connect and Configure Admob Configurations",
            image: ExpenziaImage,
            imageProject: ExpenziaImage,
            type: 'Android',
            link: "https://play.google.com/store/apps/details?id=app.expenzia.android",
            tags: [
                "Room Database",
                "Jetpack Compose",
                "Admob",
                "Google Play Store",
                "Google Play Console"
            ],
            images: [ExpenziaImage1, ExpenziaImage2, ExpenziaImage3, ExpenziaImage4, ExpenziaImage5, ExpenziaImage6]
        },
        {
            id: 3,
            name: 'Legora',
            createdAt: '2024',
            description: 'League of Legends Mobile Application Built with Kotlin Multiplatform',
            longDescription: "This Project was the first try of Express Framework with Kotlin Multiplatform for Building a Full Stack Mobile Application with Backend, Apis, Deployment with Routing and Load Balancing with Nginx and Connecting to a Native Mobile Apps Using Kotlin Multiplatform for using Shared Logic and Native UI",
            image: LegoraImage,
            imageProject: LegoraImage,
            type: 'mobile',
            link: "https://github.com/Yazan98/legora",
            tags: [
                "Room Database",
                "Jetpack Compose",
                "SwiftUI",
                "Kotlin Multiplatform",
                "Express",
                "Nginx"
            ],
            images: [
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_191903.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192011.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192511.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192524.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192542.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192557.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192644.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/ios/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-06%20at%2019-portrait%202.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/ios/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-06%20at%2019-portrait%203.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/ios/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-06%20at%2019-portrait%204.png?raw=true",
                "https://github.com/Yazan98/legora/raw/main/images/ios/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-06%20at%2019-portrait.png?raw=true"
            ]
        },
        {
            id: 4,
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
        }
    ];
}