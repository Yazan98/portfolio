import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import { NavLink } from 'react-router-dom'

class OtherProjectsComponent extends Component {

    render() {
        return (
            <div className="OtherProjectsPage">
                <header>
                    <div className="ToolbarSection">
                    <AppBar position="static" className="AppBar" color="default">
                        <Toolbar>
                            <Typography variant="h6">
                                Portfolio
                            </Typography>
                            <Grid item xs/>
                            <Button color="inherit"><NavLink className="Link" to="">Home</NavLink></Button>
                            <Button color="inherit"><NavLink className="Link" to="/projects">Projects</NavLink></Button>
                            <Button color="inherit"><NavLink className="Link"  to="/about">About</NavLink></Button>
                            <Button color="inherit"><NavLink className="Link"  to="/services">Services</NavLink></Button>
                        </Toolbar>
                    </AppBar>
                    </div>
                </header>

                <div className="OtherProjectsContainer">

                <div className="ServicesSection">
                <h3 className="ServicesTitle">Github Projects</h3>
                <Grid container spacing={9} 
                alignItems="center"
                justify="center">
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Vortex</h4>
                                <p className="SectionDescription">Android Infrastructure That Includes The Common Cases In Any Application With Ready Configuration, Mvvm Base Code With Redux State Handling, Implementation Check The Docs To See The Features</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Atto</h4>
                                <p className="SectionDescription">Mvp Implementation With Ready Base Code To Handle Presenters, Common Application Configuration With Gradle Plugin To Implement Gradle App Module Dpendencies With UseCases, Api Handling</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Ktor App</h4>
                                <p className="SectionDescription">Backend Project Restful Api With Mongo DB , Kotlin Api, Ktor Framework Example and This Project is An Starter Kit To Start Any Ktor Application With Common Server Side Configuration</p>
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
                                <p className="SideSection">Frontend Side</p>
                                <h4>Groupy</h4>
                                <p className="SectionDescription">Graduation Project Designed With Vortex-Firebase and Firebase as a Backend Side, Firestore Database, Firebase Auth To Login, Register, Kotlin Programming Language</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Backend Side</p>
                                <h4>Bookie</h4>
                                <p className="SectionDescription">Restful Api For Books Application and Mysql Database Implementation For Manage The Books With Restful Apis (Trainig Project) Written In Java Language</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Intellij IDEA Theme</p>
                                <h4>Thentrom</h4>
                                <p className="SectionDescription">Dark Theme With Orange, Yellow Color For kotlin :P Nice Plugin For Kotlin that provides you to write kotlin code with nice orange color</p>
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
                                <p className="SideSection">Backend Side</p>
                                <h4>Destiny Api</h4>
                                <p className="SectionDescription">Spring Boot With Kotlin Restful Api To Manage Restaurant Application With Recipes, Config, Security, JWT, Json Response, Error Handling, Full Project With MySql Database</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Backend Side</p>
                                <h4>Actor</h4>
                                <p className="SectionDescription">Spring Boot With Gson To Generate Postman Collection From Spring Controllers And Create Json File To Import The Api's into Postman Client Writter In Kotlin Language</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Exposer</h4>
                                <p className="SectionDescription">Kotlin Multi Platform Domain Layer Leader Lead The Domain Layer Into Shared Code, Custom Implementation For Android , IOS Layer That Handle The Local Mobile Operations</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                </div>
                
                </div>
                
            </div>
        );
    }
}

export default OtherProjectsComponent;