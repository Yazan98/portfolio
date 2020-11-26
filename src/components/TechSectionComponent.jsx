import React, {Component} from 'react';
import '../styles/fragments/footer_style.scss';
import AndroidImage from '../images/android.png';
import JavaScriptLanguage from '../images/java_script.png';
import KotlinLogo from '../images/kotlin.png';
import JavaLogo from '../images/Java_logo.png';
import ReactLogo from '../images/react_logo.png';
import GitLogo from '../images/git.png';
import SpringLogo from '../images/spring.png';

class TechSectionComponent extends Component {
    render() {
        return (
            <div className={"TechSectionComponentContainer"}>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"Android Logo"} src={AndroidImage} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>Android Applications</p>
                        <p className={"Des"}>Create, Maintain Android Applications With Java / Kotlin Languages , Latest Technologies</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"Javascript Language"} src={JavaScriptLanguage} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>Javascript Apps</p>
                        <p className={"Des"}>Create Web Apps With Node.js Based on Javascript with React.js Websites</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"Kotlin"} src={KotlinLogo} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>Kotlin Language</p>
                        <p className={"Des"}>Ktor Web Apps Based on Kotlin Language With Android Apps</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"React Logo"} src={ReactLogo} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>React.js Framework</p>
                        <p className={"Des"}>Create Websites With React.js (Javascript / Typescript) , Jsx , SCSS</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"Git Logo"} src={GitLogo} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>Version Control (GIT)</p>
                        <p className={"Des"}>Create Repositories, Branches, Pull requests, Merge, (Github / Bitbucket / Gitlab)</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"Spring Logo"} src={SpringLogo} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>Spring Boot Framework</p>
                        <p className={"Des"}>Create Web Apps With Rest Api Using java / Kotlin Language With Mysql, Mongo</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img alt={"Java"} src={JavaLogo} />
                    </div>
                    <div className={"Description"}>
                        <p className={"Name"}>Java Language</p>
                        <p className={"Des"}>Create Web Apps With Spring Boot Framework and Android Apps</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default TechSectionComponent;