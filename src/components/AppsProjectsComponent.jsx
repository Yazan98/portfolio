import React, {Component} from 'react';
import '../styles/fragments/apps_styles.scss';
import Wintrop from '../images/projects/wintrop.png';
import Github from '../images/projects/github.png';
import Destiny from '../images/projects/destiny.png';
import Drasati from '../images/projects/drasati.png';
import {NavLink} from "react-router-dom";

class AppsProjectsComponent extends Component {
    render() {
        return (
            <div className={"Container"}>

                <div className={"Title"}>
                    <h4>Mobile Applications Section</h4>
                    <p>Here are some of the apps I've worked on</p>
                </div>

                <div className={"GridItemContainer"}>
                    <div className={"GridContainer"}>

                        <div className={"ItemContainer"}>
                            <div className={"PrimaryItem"}>
                                <img src={Github}/>
                            </div>
                            <div className={"HoverItems"}>
                                <div className={"ItemsContainer"}>
                                    <div className={"Components"}>
                                        <p>Android Application</p>
                                        <h4>Autohub</h4>
                                        <p>An Github Client Built To Test Vortex Infrastructure For Android Applications With A Lot Of Features To Manage Github Accounts Personal Accounts, Repositories, Search Repository, Popular Repos, Orgs, Gists, Github Auth, With Kotlin Programming Language</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"ItemContainer"}>
                            <div className={"PrimaryItem"}>
                                <img src={Destiny}/>
                            </div>
                            <div className={"HoverItems"}>
                                <div className={"ItemsContainer"}>
                                    <div className={"Components"}>
                                        <p>Android Application / Spring Boot Api</p>
                                        <h4>Destiny</h4>
                                        <p>Restaurant Application Powered By Vortex Infrastructure With Latest Technologies, Realm Database, Restful Api, Trainig Project and Testing For Vortex Testing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"ItemContainer"}>
                            <div className={"PrimaryItem"}>
                                <img src={Drasati}/>
                            </div>
                            <div className={"HoverItems"}>
                                <div className={"ItemsContainer"}>
                                    <div className={"Components"}>
                                        <p>Android Application</p>
                                        <h4>Drasati</h4>
                                        <p>An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"ItemContainer"}>
                            <div className={"PrimaryItem"}>
                                <img src={Wintrop}/>
                            </div>
                            <div className={"HoverItems"}>
                                <div className={"ItemsContainer"}>
                                    <div className={"Components"}>
                                        <p>Android Application</p>
                                        <h4>Wintrop</h4>
                                        <p>Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default AppsProjectsComponent;
