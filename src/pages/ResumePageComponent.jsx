import React, {Component} from 'react';
import '../styles/pages/resume_style.scss';
import {BlueLine} from "../components/BlueLineComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import FooterComponent from "../components/FooterComponent";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExploreIcon from '@material-ui/icons/Explore';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class ResumePageComponent extends Component {
    render() {
        return (
            <div className={"ResumePageContainer"}>
                <BlueLine />
                <ToolbarComponent />

                <main>
                    <div className={"Content"}>
                        <h4>Yazan Tarifi</h4>
                        <p className={"Short"}>Front-End Software Engineer</p>
                        <div className={"Links"}>
                            <p className={"FlexElement"}>
                                <span><MailOutlineIcon /></span>
                                <span>yazantarifi98@gmail.com</span>
                            </p>

                            <p className={"FlexElement"}>
                                <span><ExploreIcon /></span>
                                <span>Amman , Jordan</span>
                            </p>

                            <p className={"FlexElement"}>
                                <span><PhoneInTalkIcon /></span>
                                <span>+962780132297</span>
                            </p>

                            <p className={"FlexElement"}>
                                <span><HomeIcon /></span>
                                <span>yazantarifi.com</span>
                            </p>

                            <p className={"FlexElement"}>
                                <span><GitHubIcon /></span>
                                <span><a href={"https://www.github.com/Yazan98"} target={"_blank"}>github.com/Yazan98</a></span>
                            </p>

                            <p className={"FlexElement"}>
                                <span><LinkedInIcon /></span>
                                <span><a href={"https://www.linkedin.com/in/yazan-tarifi-106282192/"} target={"_blank"}>linkedin.com/yazan-tarifi</a></span>
                            </p>
                        </div>

                        <div className={"FlexMainBlock"}>
                            <div className={"MainElement"}>
                                <h4>Work Experience</h4>
                                <div className={"WorkElement"}>
                                    <p>Android Developer - <span><a href={"https://opensooq.com"} target={"_blank"}>@Opensooq</a></span></p>
                                    <p className={"Short"}>Jun 2020 - Present</p>
                                    <ul>
                                        <li><p><span><ArrowRightIcon /></span> <span>Create , Maintain Features Android Application</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Create Responsive Design , Clean Code</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Create Good Base Code With Kotlin Language</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Implemented Clean Architecture Using Latest Technologies</span></p></li>
                                    </ul>
                                </div>

                                <div className={"WorkElement"}>
                                    <p>Android Developer - <span><a href={"https://noventapp.com"} target={"_blank"}>@NoventApp</a></span></p>
                                    <p className={"Short"}>Jun 2018 - December 2020</p>
                                    <ul>
                                        <li><p><span><ArrowRightIcon /></span> <span>Responsible On Android Applications From Create Project To Deliver The Product To Customer</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Create Responsive Design , Clean Code</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Create Good Base Code With Kotlin Language</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Create Applications In Logistic System</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Implemented Clean Architecture Using Latest Technologies</span></p></li>
                                        <li><p><span><ArrowRightIcon /></span> <span>Implement Features In Backend (Restful Api)</span></p></li>
                                    </ul>
                                </div>

                                <h4>Education</h4>
                                <div className={"WorkElement"}>
                                    <p>Software Engineering - <span><a href={"https://hu.edu.jo"} target={"_blank"}>@Hashmite Univeristy</a></span></p>
                                    <p className={"Tags"}>2016 - 2020</p>
                                    <p className={"Tags"}>Bachelor of Software Engineering</p>
                                </div>

                                <h4>Android Skills</h4>
                                <div className={"WorkElement"}>
                                    <p><span className={"Title"}>Brief</span> <span>: I have 3 years experience</span></p>
                                    <p><span className={"Title"}>Languages</span> <span>: Java , Kotlin</span></p>
                                    <p><span className={"Title"}>Technologies</span></p>
                                    <ul>
                                        <li>Applications : Multi . Single Modular Applications</li>
                                        <li>Dependency Injection : Dagger . Koin . Hilt</li>
                                        <li>Android Jetpack : Navigation , Component Architecture</li>
                                        <li>Multi Threading With Kotlin coroutines . REST Api</li>
                                        <li>Architectures : MVC . MVP . MVVM . MVI . Viper . Redux</li>
                                        <li>Version Control : GIT Command Line . GUI</li>
                                        <li>Countinous Intergation : Fastlane . Jenkins</li>
                                        <li>Firebase : Firestore . Analytics . Auth . Notifications . Crashlytics . Hosting . Storage . App Distribution . Remote Config</li>
                                    </ul>
                                </div>

                                <h4>Backend Skills</h4>
                                <div className={"WorkElement"}>
                                    <p><span className={"Title"}>Brief</span> <span>: I have 1 year experience in Spring Boot</span></p>
                                    <p><span className={"Title"}>Languages</span> <span>: Java , Kotlin</span></p>
                                    <p><span className={"Title"}>Technologies</span></p>
                                    <ul>
                                        <li>Firebase Integration</li>
                                        <li>Mysql Database . Mongo Database</li>
                                        <li>Swagger UI . Spring Security . Error Handlers</li>
                                        <li>Delopyment: Heroku , Google App Engine</li>
                                        <li>MultiThreading : Kotlin Coroutines</li>
                                    </ul>
                                </div>

                                <h4>Frontend Skills</h4>
                                <div className={"WorkElement"}>
                                    <p><span className={"Title"}>Brief</span> <span>: Personal Skills</span></p>
                                    <p><span className={"Title"}>Languages</span> <span>: Javascript , Typescript</span></p>
                                    <p><span className={"Title"}>Technologies</span></p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Javascript (ES6 +)</li>
                                        <li>React.js Components (StateFul, StateLess, Pure Component)</li>
                                        <li>S-CSS</li>
                                        <li>React Hooks</li>
                                        <li>Restful Apis Via Axios</li>
                                        <li>React Context</li>
                                    </ul>
                                </div>

                            </div>
                            <div className={"SecondElement"}>
                                <h4>Skills</h4>
                                <h6 className={"Title"}>Programming Languages</h6>
                                <p className={"Tags"}>Java, Javascript, Kotlin, JavaScript (ES6), TypeScript, CSS/Sass, Groovy, Xml, Gradle</p>

                                <h6 className={"Title"}>Libraries & Frameworks</h6>
                                <p className={"Tags"}>React.js, Node.js, Android Apps, RxJava, JQuery, Dagger, Hilt, Android Architecture Components</p>

                                <h6 className={"Title"}>Tools & Platforms</h6>
                                <p className={"Tags"}>Git, Netlify, Heroku, Firebase, Jenkins, Fastlane, Spring Boot, MySql, NoSql, Google Cloud Platform, Sonar Qube, Github Pages, Visual Studio, Slack, Postman</p>

                                <h6 className={"Title"}>Design</h6>
                                <p className={"Tags"}>Photoshop, After Effects, Premiere, Adobe XD</p>

                                <h6 className={"Title"}>Languages</h6>
                                <p className={"Tags"}>Arabic , English</p>

                                <h4>Personal Projects</h4>
                                <h6>Vortex</h6>
                                <p className={"Tags"}>Vortex is a Base Code to Build Multi modular android applications with common applications operations, latest technologies Like MVVM, RxJava, Kotlin Coroutines, Firebase, etc</p>

                                <h6>Drasati</h6>
                                <p className={"Tags"}>An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers</p>

                                <h6>Destiny</h6>
                                <p className={"Tags"}>Opensource Android Application / Spring Boot Api Powered By Koltin Lanague, Vortex Base Code, Mvvm</p>

                                <h6>Netflix Clone</h6>
                                <p className={"Tags"}>React.js Website Powered By MovieDB Api to Handle State, Api Requests, Typescript, Scss, etc</p>

                                <h6>Groupy</h6>
                                <p className={"Tags"}>Graduation Project Android Application Built With Kotlin Coroutines, Firebase Realtime Database, Firebase Auth, Notifications, Mvp</p>

                                <h6>Denamo Theme</h6>
                                <p className={"Tags"}>Visual Studio Code Theme To Build Typescript Projects with Blue Dark Theme</p>

                                <h6>Autohub</h6>
                                <p className={"Tags"}>Opensource Android Application Powered By Github Api, Kotlin, RxJava, Redux Saved State</p>

                                <h6>Wintrop</h6>
                                <p className={"Tags"}>Opensource Android Application Powered By OpenWeather Api, Kotlin, RxJava</p>

                            </div>
                        </div>
                    </div>
                </main>

                <FooterComponent />
            </div>
        );
    }
}

export default ResumePageComponent;