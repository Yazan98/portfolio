import React, {Component} from 'react';
import {BlueLine} from "../components/BlueLineComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import FooterComponent from "../components/FooterComponent";
import '../styles/fragments/archive.scss';

class ArchiveProjectsPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "Archive Page - Portfolio";
    }

    render() {
        return (
            <div className={"ArchiveProjectsPage"}>
                <BlueLine />
                <ToolbarComponent />

                <main>
                    <div className={"Content"}>
                        <h3>Archive</h3>
                        <p>A big list of things I’ve worked on</p>


                        <table>
                            <tr>
                                <th>Year</th>
                                <th>Title</th>
                                <th>Made at</th>
                                <th>Built with</th>
                                <th>Type</th>
                            </tr>
                            <tr>
                                <td>2020</td>
                                <td className={"Title"}>Opensooq</td>
                                <td>Opoensooq Company</td>
                                <td>ـــــ</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2020</td>
                                <td className={"Title"}>Portfolio</td>
                                <td>Github</td>
                                <td>React.js, React Hooks, Github Pages, Javascript ES6+, SCSS, PWA</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2020</td>
                                <td className={"Title"}>Netflix Clone</td>
                                <td>Github</td>
                                <td>React.js, React Hooks, Github Pages, Typescript, Stateful Components, Axios, Firebase Hosting</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2020</td>
                                <td className={"Title"}>Denamo Theme</td>
                                <td>Github</td>
                                <td>VSCode, typescript Themes, Json Configuration</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Mwarrid</td>
                                <td>NoventApp Company</td>
                                <td>ـــــ</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Vortex</td>
                                <td>Github</td>
                                <td>Mvvm, Redux, Multi Modular Apps, Gradle, DI, BaseCode, Bintray</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Groupy</td>
                                <td>Github</td>
                                <td>Mvp, Firebase, Kotlin, Kotlin Coroutines</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Exposer</td>
                                <td>Github</td>
                                <td>Kotlin Multi Platform, Kotlin Coroutines, RxJava</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Actor</td>
                                <td>Github</td>
                                <td>Spring Boot, Postman, Kotlin, Controllers</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Destiny</td>
                                <td>Github</td>
                                <td>Spring Boot, Kotlin, Restful Api, Kotlin Coroutines, Mvvm, Android Multi Modular App</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Thentrom</td>
                                <td>Github</td>
                                <td>Intellij Theme, Json Configuration</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Autohub</td>
                                <td>Github</td>
                                <td>Kotlin, Mvvm, RxJava, Dependency Injection, Multi Modular App, Vortex, Github Api V3</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Wintrop</td>
                                <td>Github</td>
                                <td>Kotlin, Mvvm, RxJava, Dependency Injection, Multi Modular App, Vortex</td>
                                <td>Open Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Drasati</td>
                                <td>Github</td>
                                <td>Kotlin, Mvp, Atto, Firebase</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Atto (Archived)</td>
                                <td>Github</td>
                                <td>Mvp, BaseCode, Bintray</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2019</td>
                                <td className={"Title"}>Portfolio V1</td>
                                <td>Github</td>
                                <td>html, Css</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2018</td>
                                <td className={"Title"}>Diretto</td>
                                <td>NoventApp Company</td>
                                <td>ـــــ</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2018</td>
                                <td className={"Title"}>Estra7at</td>
                                <td>ـــــ</td>
                                <td>Mvp, Java, Firebase, Spring Boot Api</td>
                                <td>Closed Source</td>
                            </tr>

                            <tr>
                                <td>2017</td>
                                <td className={"Title"}>Zunbarak</td>
                                <td>Zunbarak Company</td>
                                <td>ـــــ</td>
                                <td>Closed Source</td>
                            </tr>

                        </table>
                    </div>
                </main>

                <FooterComponent />
            </div>
        );
    }
}

export default ArchiveProjectsPage;