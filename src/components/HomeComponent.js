import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import AppBarComponent from '../common/AppBarComponent';

export default class HomeComponent extends React.Component {


    componentDidMount() {
        document.title = "Portfolio | Home";
    }

    render() {
        return (
            <>
            <AppBarComponent />
            <div className="HomePage">
                <div className="HeaderContent">
                    <div className="Header">
                        <p>
                            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                                <span>Android</span>
                                <span>Web</span>
                                <span>Backend (SpringBoot) </span>
                                <span>Backend (Ktor) </span>
                                <span>Flutter Apps </span>
                            </TextLoop>{" "}
                            Developer
                        </p>
                        <h3>Yazan Tarifi</h3>
                        <p>
                        I always try to build auxiliary tools to develop OOP Projects, Likes to
                        build and modify open source projects , I have a complete passion and super fast learning when trying new technologies
                         Solid Understanding of mobile and Software life cycle (SDLC) with all architectures for mobile frameworks
                        </p>
                    </div>
                </div>


                <div className="ServicesSection">
                    <h3 className="ServicesTitle">What Can I do</h3>
                    <Grid container spacing={9} 
                    alignItems="center"
                    justify="center">
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionData">
                                    <p className="SideSection">Frontend Side</p>
                                    <h4>Android Apps</h4>
                                    <p className="SectionDescription">Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionData">
                                    <p className="SideSection">Backend Side</p>
                                    <h4>SpringBoot Web Apps</h4>
                                    <p className="SectionDescription">Build Backend Projects With Spring Boot Framework, Good Infastructure, Error Handling, Restful Api</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionData">
                                    <p className="SideSection">Frontend Side</p>
                                    <h4>Website</h4>
                                    <p className="SectionDescription">Build Websites With (Vue.js, React.js) , Boostrap , Javascript With Restful Api, Responsive Design , Clean Code</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="ServicesSection">
                    <Grid container spacing={9} 
                    alignItems="center"
                    justify="center">
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionData">
                                    <p className="SideSection">Configuration</p>
                                    <h4>Plugins</h4>
                                    <p className="SectionDescription">Design, Build (Gradle, Intellij, CLI) For Android Applications for Better Gradle Configutation</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionData">
                                    <p className="SideSection">Backend Side</p>
                                    <h4>Ktor Framework</h4>
                                    <p className="SectionDescription">Build Backend Projects With Ktor Framework , Restful Api</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionData">
                                    <p className="SideSection">Frontend Side</p>
                                    <h4>Design</h4>
                                    <p className="SectionDescription">Design Application Interface , Logos With Adobe Photoshop, After Effects For Simple Animation (Biggener Level)</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="ToolsContainer">
                    <h5>Tools</h5>
                    <div data-v-2c2e245b="" class="scrollmenu">
                        <img className="ToolIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"/>
                        <img className="ToolIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Android_logo_2019.svg/1000px-Android_logo_2019.svg.png"/>
                        <img className="ToolIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1200px-Kotlin-logo.svg.png"/>
                        <img className="ToolIcon" src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo.png"/>
                        <img className="ToolIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
                        <img className="ToolIcon" src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"/>
                        <img className="ToolIcon" src="https://image.flaticon.com/icons/png/512/37/37318.png"/>
                        <img className="ToolIcon" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                        <img className="ToolIcon" src="https://www.dariawan.com/media/images/tech-spring-boot.width-1024.png"/>
                    </div>
                </div>


            </div>
            </>
        );
    }
}

