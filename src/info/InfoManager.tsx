import {App} from "./App";

export class InfoManager {

    getAllApps(): Array<App> {
        return [
            new App("Autohub", "An Github Client Built To Test Vortex Infrastructure For" +
                " Android Applications With A Lot Of Features To Manage Github Accounts Personal Accounts, Repositories, Search Repository," +
                " Popular Repos, Orgs, Gists, Github Auth, With Kotlin Programming Language",
                "https://user-images.githubusercontent.com/29167110/99999892-ab1a8e80-2d75-11eb-9398-2cfe70a22fcb.png",
                "Github - 2019",
                "https://github.com/Yazan98/Github-Client",
                "https://user-images.githubusercontent.com/29167110/100000124-03ea2700-2d76-11eb-8d0a-3cc6a763c394.png",
                ["MVVM", "Vortex", "Kotlin", "Reftofit", "RxJava", "Kotlin Courotines", "Multi Modular App"], [
                    "https://user-images.githubusercontent.com/29167110/100293604-1bbdd880-2f39-11eb-90ce-dbfcbb29c2ba.png",
                    "https://user-images.githubusercontent.com/29167110/100293615-29735e00-2f39-11eb-84e3-dcf838b1acc7.png",
                    "https://user-images.githubusercontent.com/29167110/100562669-3792e880-3271-11eb-95ba-6294abe05a20.png",
                    "https://user-images.githubusercontent.com/29167110/100562806-8fc9ea80-3271-11eb-9417-fc7ab6c623c4.png"
                ]),
            new App("Wintrop", "This Application has Two Screens and One Fragment The First Screen is The Splash Screen To Show The User Application Info With Logo THe Second Screen is The Main Screen Store All Fragments At One Screen But at this example just one fragment at the main screen",
                "https://user-images.githubusercontent.com/29167110/100293783-a69ed300-2f39-11eb-821d-8e432378643b.png", "Github - 2019", "https://github.com/Yazan98/Wintrop",
                "https://user-images.githubusercontent.com/29167110/100294357-67718180-2f3b-11eb-98b0-196493dfba71.png", [
                    "MVVM", "Kotlin", "Retrofit", "Multi Modular App"
                ], [
                    "https://user-images.githubusercontent.com/29167110/100294103-9cc99f80-2f3a-11eb-846a-c1994082a989.png",
                    "https://user-images.githubusercontent.com/29167110/100294123-a8b56180-2f3a-11eb-9c0f-a011d3f6fe16.png",
                    "https://user-images.githubusercontent.com/29167110/100294148-b23ec980-2f3a-11eb-9c8b-747469a7a5ce.png"
                ]),
            new App("Drasati", "An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes\n" +
                "\n",
                "https://user-images.githubusercontent.com/29167110/100681109-e134b100-3327-11eb-94de-3ccc6a567a36.png", "- 2019", "https://github.com/Yazan98",
                "https://user-images.githubusercontent.com/29167110/100680950-8733eb80-3327-11eb-933c-7f8e8b32417b.png", [
                    "MVP", "Kotlin", "Firebase", "Realtime Chat"
                ], [
                    "https://user-images.githubusercontent.com/29167110/100680843-52c02f80-3327-11eb-92b8-8598bcce10ca.png",
                    "https://user-images.githubusercontent.com/29167110/100680863-5f448800-3327-11eb-9464-b252a4763740.png",
                    "https://user-images.githubusercontent.com/29167110/100680895-708d9480-3327-11eb-87ae-3ec0c8df2496.png"
                ])
        ];
    }

    getAppByName(name: string): App | undefined {
        let app: App | undefined = undefined;
        const apps = this.getAllApps();
        for (let i = 0; i < apps.length; i++) {
            if (apps[i].name === name) {
                app = apps[i];
                break
            }
        }
        return app
    }

}
