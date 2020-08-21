import {InfoManagerImpl} from "./Impl";
import {PersonalInfo, PersonalService, SocialMediaEntity} from "./Entities";

export class InfoManager implements InfoManagerImpl {

    public static BLUE_COLOR = "#2962ff";
    public static WHITE_MODE_TEXT_COLOR = "#000000";
    public static BLUE_LINE_HEIGHT = "10px";
    public static WHITE_MODE_BACKGROUND_COLOR = "#ffffff";

    getPersonalInfo(): PersonalInfo {
        return new PersonalInfo(
            "Yazan Tarifi",
            ["Android", " . " , "Spring Boot (java, Kotlin)"," . ", "Nest.js", " . ", "React Website"],
            "I always try to build auxiliary tools to develop OOP Projects, Likes to build and modify open source projects , I have a complete passion and super fast learning when trying new technologies Solid Understanding of mobile and Software life cycle (SDLC) with all architectures for mobile frameworks",
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

}

export const infoManager = new InfoManager();
