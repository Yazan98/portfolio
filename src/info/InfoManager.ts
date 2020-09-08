import {InfoManagerImpl} from "./Impl";
import {
    ArchiveEntity, ExpItem,
    GithubProject,
    LinkItem,
    PersonalInfo,
    PersonalService,
    Project,
    SocialMediaEntity
} from "./Entities";

export class InfoManager implements InfoManagerImpl {

    public static BLUE_COLOR = "#2962ff";
    public static WHITE_MODE_TEXT_COLOR = "#000000";
    public static BLUE_LINE_HEIGHT = "10px";
    public static WHITE_MODE_BACKGROUND_COLOR = "#ffffff";
    public static OPEN_SOURCE = "Open Source";
    public static CLOSED_SOURCE = "Closed Source";

    getPersonalInfo(): PersonalInfo {
        return new PersonalInfo(
            "Yazan Tarifi",
            ["Android", " . " , "Spring Boot (java, Kotlin)"," . ", "Nest.js", " . ", "React Website"],
            "A code-minded front-end software engineer focused on building beautiful interfaces & experiences and Convert Ideas, Design To System With Frontend Side (Android Apps, React Websites) also The Backend Side With (SpringBoot, Ktor, Nest.js)",
            "yazantarifi98@gmail.com",
            this.getPersonalServices()
        );
    }

    getSocialMediaLinks(): Array<SocialMediaEntity> {
        return [];
    }

    getPersonalServices(): Array<PersonalService> {
        return [
            new PersonalService("Android Apps", "Frontend Side", "Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infrastructure, Solid Understanding of Mobile Architecture"),
            new PersonalService("SpringBoot Web Apps", "Backend Side", "Build Backend Projects With Spring Boot Framework, Good Infrastructure, Error Handling, Restful Api With java, Kotlin And MySql, NoSql"),
            new PersonalService("Website", "Frontend Side", "Build Websites With (React.js) , Boostrap , Javascript With Restful Api, Responsive Design , Clean Code, Bootstrap, Redux State"),
            new PersonalService("Plugins", "Configuration", "Design, Build (Gradle, Intellij, CLI) For Android Applications for Better Gradle Configuration, Design Tasks To Config Apps Before Project Sync"),
            new PersonalService("Ktor Framework", "Backend Side", "Build Backend Projects With Ktor Framework , Restful Api, Security, Kotlin Multi Threading Management With Useful Json Response"),
            new PersonalService("Design", "Frontend Side", "Design Application Interface , Logos With Adobe Photoshop, After Effects For Simple Animation (Beginner Level)"),
        ];
    }

    getProjects(): Array<Project> {
        return [
            new Project("Mwarrid", "An integrated electronic marketing platform from a website and an application on smartphones and tablets help to connect the food sector suppliers in all their fields with restaurants, cafes, hotels, wedding hall and all those involved in selling food in the retail sector and soon individuals. So that suppliers periodically display their products, set their prices, and market them, to help our customers follow the market, view the latest offers, instant order, and track order status through the supplier's online platform.",
                "https://user-images.githubusercontent.com/29167110/90952896-0312c380-e41c-11ea-805e-72b4f6198528.png", InfoManager.CLOSED_SOURCE, "https://play.google.com/store/apps/details?id=com.mwarrid.mwarrid"),
            new Project("Autohub", "An Github Client Built To Test Vortex Infrastructure For Android Applications With A Lot Of Features To Manage Github Accounts Personal Accounts, Repositories, Search Repository, Popular Repos, Orgs, Gists, Github Auth, With Kotlin Programming Language\n" +
                "\n", "https://user-images.githubusercontent.com/29167110/79905453-30b81380-840e-11ea-87b6-91159aa4f8b8.png", InfoManager.OPEN_SOURCE, "https://github.com/Yazan98/Github-Client"),
            new Project("Wintrop", "Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba\n" +
                "\n", "https://user-images.githubusercontent.com/29167110/90952950-6e5c9580-e41c-11ea-95ce-71be65d5a6bd.png", InfoManager.OPEN_SOURCE, "https://github.com/Yazan98/Wintrop"),
            new Project("Destiny", "Restaurant Application Powered By Vortex Infrastructure With Latest Technologies, Realm Database, Restful Api, Trainig Project and Testing For Vortex Testing\n" +
                "\n", "https://user-images.githubusercontent.com/29167110/79907964-619a4780-8412-11ea-8b37-37425054088e.png", InfoManager.OPEN_SOURCE, "https://github.com/Yazan98/Destiny"),
            new Project("Drasati", "An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes\n" +
                "\n", "https://user-images.githubusercontent.com/29167110/79912378-da50d200-8419-11ea-857c-0e1c3b9c3c68.png", InfoManager.CLOSED_SOURCE, "")
        ];
    }

    getGithubProjects(): Array<GithubProject> {
        return [
            new GithubProject("Vortex", "Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases", "https://www.vortex-io.github.io", "https://github.com/vortex-io/Vortex", true, ["Kotlin", "Mvvm", "Redux", "Plugins"]),
            new GithubProject("Exposer", "Android Domain Layer Controller Via UseCases To Handle Shared Logic Between Android, IOS Via Kotlin Multiplatform With Reactive Programming, Memory, etc", "https://www.vortex-io.github.io", "https://github.com/vortex-io/Vortex", true, ["Kotlin", "Mvvm", "Redux", "Plugins"]),
            new GithubProject("Portfolio", "My Personal Website (First Website) Built With React.js To Build My Portfolio", "https://www.vortex-io.github.io", "https://github.com/vortex-io/Vortex", true, ["Kotlin", "Mvvm", "Redux", "Plugins"]),
            new GithubProject("Wintrop", "Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases", "https://www.vortex-io.github.io", "https://github.com/vortex-io/Vortex", true, ["Kotlin", "Mvvm", "Redux", "Plugins"]),
            new GithubProject("Github-Client", "Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases", "https://www.vortex-io.github.io", "https://github.com/vortex-io/Vortex", true, ["Kotlin", "Mvvm", "Redux", "Plugins"]),
            new GithubProject("Destiny", "Android Infrastructure To Build Android Applications With Latest Technologies and Ready State Handling with User Interface Implementation For The Android Common Cases", "https://www.vortex-io.github.io", "https://github.com/vortex-io/Vortex", true, ["Kotlin", "Mvvm", "Redux", "Plugins"]),
        ];
    }

    getArchiveList(): Array<ArchiveEntity> {
        return [
            new ArchiveEntity(2019, "Vortex Android Infrastructure", "Github", ["Kotlin . Mvvm . Redux . Androidx"], true, [new LinkItem("github", "https://github.com/vortex-io/Vortex")]),
            new ArchiveEntity(2020, "Exposer Mobile Domain Layer Leader", "Github", ["Kotlin Multiplatform . RxJava . Domain Layer Logic"], true, [new LinkItem("github", "https://github.com/Yazan98/Exposer")]),
            new ArchiveEntity(2020, "Yazan98.info (Portfolio)", "Github", ["React.js . Typescript . Material UI"], true, [new LinkItem("github", "https://github.com/Yazan98/portfolio")]),
            new ArchiveEntity(2019, "Ktor Application (Restful Api)", "Github", ["ktor.io . Mongoose . Firebase"], true, [new LinkItem("github", "https://github.com/Yazan98/Ktor-Example")]),
            new ArchiveEntity(2019, "Wintrop Weather Android Application", "Github", ["Material UI . Retrofit . MVVM"], true, [new LinkItem("github", "https://github.com/Yazan98/Wintrop")]),
            new ArchiveEntity(2019, "Autohub (Github Client Android Application)", "Github", ["Material UI . Retrofit . MVVM . Github Api"], true, [new LinkItem("github", "https://github.com/Yazan98/Github-Client")]),
            new ArchiveEntity(2019, "Destiny (Restaurant Android Application With Restful Api (SpringBoot))", "Github", ["MVVM . Android Material UI . SpringBoot Api"], true, [new LinkItem("github", "https://github.com/Yazan98/Destiny")]),
            new ArchiveEntity(2019, "Groupy (Graduation Project)", "Github", ["MVC . Firebase . Chat-kit"], true, [new LinkItem("github", "https://github.com/Yazan98/Groupy")]),
            new ArchiveEntity(2019, "Feature Flag Config To Control UI Rendering", "Github", ["SpringBoot . Kotlin"], true, [new LinkItem("github", "https://github.com/Yazan98/Feature-Flag-Example")]),
            new ArchiveEntity(2019, "PostMan Collection Generator For SpringBoot", "Github", ["SpringBoot . Kotlin . GSON"], true, [new LinkItem("github", "https://github.com/Yazan98/Actor")]),
            new ArchiveEntity(2019, "Destiny Api (Restful Api Built With SpringBoot)", "Github", ["JWT . Mysql . Kotlin . SpringBoot"], true, [new LinkItem("github", "https://github.com/Yazan98/Destiny-Api")]),
            new ArchiveEntity(2019, "Thentrom (intellij Theme For Kotlin Projects (OLD VERSION))", "Github", ["Intellij SDK"], true, [new LinkItem("github", "https://github.com/Yazan98/Thentrom")]),
            new ArchiveEntity(2017, "Bokkie Api (Spring Boot Restful Api For Books App)", "Github", ["Java . Spring Boot . Mysql"], true, [new LinkItem("github", "https://github.com/Yazan98/Books-spring")]),
            new ArchiveEntity(2019, "Atto Base Code To Build MVP Android Applications", "Github", ["Kotlin . MVP . RxJava2"], true, [new LinkItem("github", "https://github.com/Yazan98/Atto")]),
            new ArchiveEntity(2019, "Drasati (Provide Students Android App To Study With Courses Tree)", "Github", ["Atto . MVP . Kotlin"], false, []),
            new ArchiveEntity(2020, "Mwarrid", "Switch.jo", ["Kotlin . MVVM . MultiModular App"], false, [new LinkItem("google-play", "https://play.google.com/store/apps/details?id=com.mwarrid.mwarrid")]),
            new ArchiveEntity(2018, "Diretto", "NoventApp", ["Java . MVP"], false, [new LinkItem("google-play", "https://play.google.com/store/apps/details?id=com.noventapp.diretto.user")]),
            new ArchiveEntity(2020, "Yazan98.github.io Portfolio V1", "Github", ["React.js . Javascript"], false, [new LinkItem("google-play", "https://portfolio-5c378.web.app")]),
        ];
    }

    getAndroidExp(): Array<ExpItem> {
        return [
            new ExpItem("Applications", "Multi Modular Applications"),
            new ExpItem("Dependency Injection", "Dagger . Koin . Motif . Hilt"),
            new ExpItem("Android Jetpack", "Navigation . Component Architecture"),
            new ExpItem("Multi Threading", "Kotlin coroutines . RxJava"),
            new ExpItem("REST Api", "Retrofit . Volley"),
            new ExpItem("Architectures", "MVC . MVP . MVVM . MVI . Viper . Redux"),
            new ExpItem("Firebase", "Auth . Firestore . Notifications . Crashlytics . Analytics"),
            new ExpItem("Reactive Programming", "RxJava . RxAndroid"),
            new ExpItem("Version Control", "GIT Command Line . GUI"),
            new ExpItem("Continuous Integration", "Jenkins . Travis CI . Fastlane"),
        ]
    }

    getBackendExp(): Array<ExpItem> {
        return [
            new ExpItem("Firebase Integration", "Realtime Database . Push Notifications"),
            new ExpItem("Database", "Mysql . Mongodb"),
            new ExpItem("Security", "Api Key . JWT"),
            new ExpItem("Deployment", "Heroku . AWS . Digital Ocean"),
            new ExpItem("Build Environment", "Gradle . Maven"),
            new ExpItem("Utils", "Error Handling . Swagger UI . GIT"),
        ];
    }

    getReactExp(): Array<ExpItem> {
        return [
            new ExpItem("SPA", "State full Component . Stateless Component"),
            new ExpItem("Navigation", "React Router . Normal Html Links"),
            new ExpItem("Restful Api", "Javascript Fetch . Axios"),
            new ExpItem("Styling", "CSS . SCSS . Material UI . Bootstrap"),
            new ExpItem("Deployment", "Github Pages . Firebase Hosting"),
            new ExpItem("Component Rendering", "Dynamic Component Rendering (Linear, Grid)"),
        ];
    }

}


export const infoManager = new InfoManager();
