import React, {Component} from 'react';
import '../styles/fragments/apps_styles.scss';
import Wintrop from '../images/projects/wintrop.png';
import Github from '../images/projects/github.png';
import Destiny from '../images/projects/destiny.png';
import Drasati from '../images/projects/drasati.png';
import Mwarrid from '../images/projects/mwarrid.png';
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
                                        <p>An Github Client Built To Test Vortex Infrastructure For Android Applications
                                            With A Lot Of Features To Manage Github Accounts Personal Accounts,
                                            Repositories, Search Repository, Popular Repos, Orgs, Gists, Github Auth,
                                            With Kotlin Programming Language</p>
                                        <NavLink to={"/app/Autohub"}>Application Info</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"ItemContainer"}>
                            <div className={"PrimaryItem"}>
                                <img src={Mwarrid}/>
                            </div>
                            <div className={"HoverItems"}>
                                <div className={"ItemsContainer"}>
                                    <div className={"Components"}>
                                        <p>Android Application</p>
                                        <h4>Mwarrid</h4>
                                        <p>An integrated electronic marketing platform from a website and an application
                                            on smartphones and tablets help to connect the food sector suppliers in all
                                            their fields with restaurants, cafes, hotels, wedding hall and all those
                                            involved in selling food in the retail sector and soon individuals. So that
                                            suppliers periodically display their products, set their prices, and market
                                            them, to help our customers follow the market, view the latest offers,
                                            instant order, and track order status through the supplier's online
                                            platform.</p>
                                        <NavLink to={"/app/Mwarrid"}>Application Info</NavLink>
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
                                        <p>Restaurant Application Powered By Vortex Infrastructure With Latest
                                            Technologies, Realm Database, Restful Api, Trainig Project and Testing For
                                            Vortex Testing</p>
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
                                        <p>An organizing platform for school students that aims to gather students and
                                            link them with audible lessons by providing a tree plan with the possibility
                                            to speak with teachers if a difference occurs on a certain point with the
                                            support feature of all classes</p>
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
                                        <p>Weather Application Powered By Vortex , Latest Android Technologies With
                                            Managed Structure To Show Weather Status For Amman, Irbid, Aqaba</p>
                                        <NavLink to={"/app/Wintrop"}>Application Info</NavLink>
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
