import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <header>
                    <div className="ToolbarSection">
                    <AppBar position="static" className="AppBar" color="default">
                        <Toolbar>
                            <Typography variant="h6">
                                Portfolio
                            </Typography>
                            <Grid item xs/>
                            <Button color="inherit">Projects</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Services</Button>
                        </Toolbar>
                    </AppBar>
                    </div>
                </header>

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
                                <div className="SectionContent">
                                    <p className="SideSection">Frontend Side</p>
                                    <h4>Android Apps</h4>
                                    <p className="SectionDescription">Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionContent">
                                    <p className="SideSection">Backend Side</p>
                                    <h4>SpringBoot Web Apps</h4>
                                    <p className="SectionDescription">Build Backend Projects With Spring Boot Framework, Good Infastructure, Error Handling, Restful Api</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionContent">
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
                                <div className="SectionContent">
                                    <p className="SideSection">Configuration</p>
                                    <h4>Plugins</h4>
                                    <p className="SectionDescription">Design, Build (Gradle, Intellij, CLI) For Android Applications for Better Gradle Configutation</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionContent">
                                    <p className="SideSection">Backend Side</p>
                                    <h4>Ktor Framework</h4>
                                    <p className="SectionDescription">Build Backend Projects With Ktor Framework , Restful Api</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="Section">
                                <div className="SectionContent">
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
                        <img data-v-2c2e245b="" src="https://yazan98.github.io/img/jsLogo.8b8524a4.png"/>
                        <img data-v-2c2e245b="" src="https://yazan98.github.io/img/android-logo.eb03ed7e.svg"/>
                        <img data-v-2c2e245b="" src="https://yazan98.github.io/img/docker.8250fb6c.png"/>
                        <img data-v-2c2e245b="" src="https://yazan98.github.io/img/java-logo.8309fda0.png"/>
                        <img data-v-2c2e245b="" src="https://yazan98.github.io/img/kotlin_logo.309f8ebe.png"/>
                        <img data-v-2c2e245b="" src="https://yazan98.github.io/img/gradle.9a0296da.png"/>
                        <img data-v-2c2e245b="" src="https://angular.io/assets/images/logos/angular/angular.svg"/>
                    </div>
                </div>


            </div>
        );
    }
}

