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
                        <img src={AndroidImage} />
                    </div>
                    <div className={"Description"}>
                        <p>Android Applications</p>
                        <p className={"Des"}>Create, Maintain Android Applications With Java / Kotlin Languages , Latest Technologies</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img src={JavaScriptLanguage} />
                    </div>
                    <div className={"Description"}>
                        <p>Javascript Apps</p>
                        <p className={"Des"}>Create Web Apps With Node.js Based on Javascript with React.js Websites</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img src={KotlinLogo} />
                    </div>
                    <div className={"Description"}>
                        <p>Kotlin Language</p>
                        <p className={"Des"}>Ktor Web Apps Based on Kotlin Language With Android Apps</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img src={JavaLogo} />
                    </div>
                    <div className={"Description"}>
                        <p>Java Language</p>
                        <p className={"Des"}>Create Web Apps With Spring Boot Framework and Android Apps</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img src={ReactLogo} />
                    </div>
                    <div className={"Description"}>
                        <p>React.js Framework</p>
                        <p className={"Des"}>Create Websites With React.js (Javascript / Typescript) , Jsx , SCSS</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img src={GitLogo} />
                    </div>
                    <div className={"Description"}>
                        <p>Version Control (GIT)</p>
                        <p className={"Des"}>Create Repositories, Branches, Pull requests, Merge, (Github / Bitbucket / Gitlab)</p>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Logo"}>
                        <img src={SpringLogo} />
                    </div>
                    <div className={"Description"}>
                        <p>Spring Boot Framework</p>
                        <p className={"Des"}>Create Web Apps With Rest Api Using java / Kotlin Language With Mysql, Mongo</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default TechSectionComponent;