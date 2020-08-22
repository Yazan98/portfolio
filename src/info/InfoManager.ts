import {InfoManagerImpl} from "./Impl";
import {PersonalInfo, PersonalService, Project, SocialMediaEntity} from "./Entities";

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

}

export const infoManager = new InfoManager();
