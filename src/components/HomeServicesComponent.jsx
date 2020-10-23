import React, {Component} from 'react';
import '../styles/fragments/fragments_style.scss';

class HomeServicesComponent extends Component {
    render() {
        return (
            <div className={"HomeServicesComponentContainer"}>
                <h4 className={"title"}>What Can I Do</h4>
                <div className={"ItemsContainer"}>

                    <div className={"ServiceItem"}>
                        <div className="ProjectComponentContainer">
                            <div className="ProjectItem">
                                <p>Frontend Side</p>
                                <h5>Android Apps</h5>
                                <p className="Description">Design, Maintain Android Applications With Responsive Layouts ,
                                    Latest Technologies, Strong Infrastructure, Solid Understanding of Mobile
                                    Architecture</p>
                            </div>
                        </div>
                    </div>

                    <div className={"ServiceItem"}>
                        <div className="ProjectComponentContainer">
                            <div className="ProjectItem">
                                <p>Backend Side</p>
                                <h5>SpringBoot Web Apps</h5>
                                <p className="Description">Build Backend Projects With Spring Boot Framework, Good
                                Infrastructure, Error Handling, Restful Api With java, Kotlin And MySql, NoSql</p></div>
                        </div>
                    </div>

                    <div className={"ServiceItem"}>
                        <div className="ProjectComponentContainer">
                            <div className="ProjectItem">
                                <p>Frontend Side</p>
                                <h5>Website</h5>
                                <p className="Description">Build Websites With (React.js) , Boostrap , Javascript With
                                Restful Api, Responsive Design , Clean Code, Bootstrap, Redux State</p></div>
                        </div>
                    </div>

                    <div className={"ServiceItem"}>
                        <div className="ProjectComponentContainer">
                            <div className="ProjectItem">
                                <p>Configuration</p>
                                <h5>Plugins</h5>
                                <p className="Description">Design, Build (Gradle, Intellij, CLI) For Android Applications
                                for Better Gradle Configuration, Design Tasks To Config Apps Before Project Sync</p>
                            </div>
                        </div>
                    </div>

                    <div className={"ServiceItem"}>
                        <div className="ProjectComponentContainer">
                            <div className="ProjectItem">
                                <p>Backend Side</p>
                                <h5>Ktor Framework</h5>
                                <p className="Description">Build Backend Projects With Ktor Framework , Restful Api,
                                Security, Kotlin Multi Threading Management With Useful Json Response</p></div>
                        </div>
                    </div>

                    <div className={"ServiceItem"}>
                        <div className="ProjectComponentContainer">
                            <div className="ProjectItem">
                                <p>Frontend Side</p>
                                <h5>Design</h5>
                                <p className="Description">Design Application Interface , Logos With Adobe Photoshop, After
                                Effects For Simple Animation (Beginner Level)</p></div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeServicesComponent;
