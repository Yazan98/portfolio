import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import AppBarComponent from '../common/AppBarComponent';
import { NavLink, Link } from 'react-router-dom'
import FooterComponent from '../common/FooterComponent';

class OtherProjectsComponent extends Component {

    componentDidMount() {
        document.title = "Portfolio | Other Projects";
    }


    render() {
        return (
            <div className="OtherProjectsPage">
            <AppBarComponent />
                <div className="OtherProjectsContainer">

                <div className="ServicesSection">
                <h3 className="ServicesTitle">Github Projects</h3>
                <Grid container spacing={9} 
                alignItems="center"
                justify="center">
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <div className="SectionData">
                                    <p className="SideSection">Frontend Side</p>
                                    <h4>Vortex</h4>
                                    <p className="SectionDescription">Android Infrastructure That Includes The Common Cases In Any Application With Ready Configuration, Mvvm Base Code With Redux State Handling, Implementation Check The Docs To See The Features</p>
                                    <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects">Library Overview</Link>
                                </div>
                                <div class="triangle-down">
                                    <img src="https://user-images.githubusercontent.com/29167110/84554488-f7b26600-ad0f-11ea-8b77-234f6d93ec8f.png" width="15px" height="15px" style={{ marginLeft:"25px" }}/>
                                </div>
                                </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <div className="SectionData">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Atto</h4>
                                <p className="SectionDescription">Mvp Implementation With Ready Base Code To Handle Presenters, Common Application Configuration With Gradle Plugin To Implement Gradle App Module Dpendencies With UseCases, Api Handling, Some ViewModels To Save State</p>
                                <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects">Library Overview</Link>
                                </div>
                                <div class="triangle-down">
                                    <img src="https://user-images.githubusercontent.com/29167110/84554488-f7b26600-ad0f-11ea-8b77-234f6d93ec8f.png" width="15px" height="15px" style={{ marginLeft:"25px" }}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                               <div className="SectionData">
                               <p className="SideSection">Frontend Side</p>
                               <h4>Ktor App</h4>
                               <p className="SectionDescription">Backend Project Restful Api With Mongo DB , Kotlin Api, Ktor Framework Example and This Project is An Starter Kit To Start Any Ktor Application With Common Server Side Configuration (Project Starter Kit)</p>
                               <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects"><a href="https://github.com/Yazan98/Ktor-Example">View Source Code</a></Link>
                               </div>
                               <div class="triangle-down">
                               <img src="https://user-images.githubusercontent.com/29167110/84554488-f7b26600-ad0f-11ea-8b77-234f6d93ec8f.png" width="15px" height="15px" style={{ marginLeft:"25px" }}/>
                               </div>
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
                                <div className="SectionData">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Groupy</h4>
                                <p className="SectionDescription">Graduation Project To Manage Collage Groups, Task Managment Designed With Vortex-Firebase and Firebase as a Backend Side, Firestore Database, Firebase Auth To Login, Register, Kotlin Programming Language</p>
                                <Link style={{ paddingTop:"1em" }} to="/groupy" className="OtherProjects"><a href="https://github.com/Yazan98/Ktor-Example">View Project</a></Link>
                                </div>
                                <div class="triangle-down">
                                <img src="https://user-images.githubusercontent.com/29167110/84554488-f7b26600-ad0f-11ea-8b77-234f6d93ec8f.png" width="15px" height="15px" style={{ marginLeft:"25px" }}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <div className="SectionData">
                                <p className="SideSection">Backend Side</p>
                                <h4>Bookie</h4>
                                <p className="SectionDescription">Restful Api For Books Application and Mysql Database Implementation, JWT Auth, Managed Controllers, Error Handling For Manage The Books With Restful Apis (Trainig Project) Written In Java Language</p>
                                <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects"><a href="https://github.com/Yazan98/BooksServer-SpringBoot">View Source Code</a></Link>
                                </div>
                                <div class="triangle-down">
                                <img src="https://user-images.githubusercontent.com/29167110/84554488-f7b26600-ad0f-11ea-8b77-234f6d93ec8f.png" width="15px" height="15px" style={{ marginLeft:"25px" }}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <div className="SectionData">
                                <p className="SideSection">Intellij IDEA Theme</p>
                                <h4>Thentrom</h4>
                                <p className="SectionDescription">Dark Theme With Orange, Yellow Color For kotlin :P Nice Plugin For Kotlin that provides you to write kotlin code with nice orange, Yellow color With Windows , Linux Beautiful Interface, Deployed On Jetbrains Cloud</p>
                                <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects"><a href="https://github.com/Yazan98/Thentrom">View Source Code</a></Link>
                                </div>
                                <div class="triangle-down">
                                <img src="https://user-images.githubusercontent.com/29167110/84554488-f7b26600-ad0f-11ea-8b77-234f6d93ec8f.png" width="15px" height="15px" style={{ marginLeft:"25px" }}/>
                                </div>
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
                                <div className="SectionData">
                                <p className="SideSection">Backend Side</p>
                                <h4>Destiny Api</h4>
                                <p className="SectionDescription">Spring Boot With Kotlin Restful Api To Manage Restaurant Application With Recipes, Config, Security, JWT, Json Response, Error Handling, Full Project With MySql Database, Full Project With Ready Data Configuration</p>
                                <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects"><a href="https://github.com/Yazan98/Destiny-Api">View Source Code</a></Link>
                                </div>
                                <div class="triangle-down">
                                <img src="https://user-images.githubusercontent.com/29167110/84554630-a8b90080-ad10-11ea-8414-8c3a48c72f4d.png" width="30px" height="30px" style={{ marginLeft:"20px" }}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <div className="SectionData">
                                <p className="SideSection">Backend Side</p>
                                <h4>Actor</h4>
                                <p className="SectionDescription">Spring Boot With Gson To Generate Postman Collection From Spring Controllers And Create Json File To Import The Api's into Postman Client Writter In Kotlin Language, Routers Implementation - Not Completed Yet</p>
                                <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects"><a href="https://github.com/Yazan98/Actor">View Source Code</a></Link>
                                </div>
                                <div class="triangle-down">
                                <img src="https://user-images.githubusercontent.com/29167110/84554630-a8b90080-ad10-11ea-8414-8c3a48c72f4d.png" width="30px" height="30px" style={{ marginLeft:"20px" }}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="Section">
                            <div className="SectionContent">
                                <div className="SectionData">
                                <p className="SideSection">Frontend Side</p>
                                <h4>Exposer</h4>
                                <p className="SectionDescription">Kotlin Multi Platform Domain Layer Leader Lead The Domain Layer Into Shared Code, Custom Implementation For Android , IOS Layer That Handle The Local Mobile Operations Based On Reactive Programming And Platform Store</p>
                                <Link style={{ paddingTop:"1em" }} to="/vortex" className="OtherProjects"><a href="https://github.com/Yazan98/Exposer">View Source Code</a></Link>
                                </div>
                                <div class="triangle-down">
                                <img src="https://user-images.githubusercontent.com/29167110/84554630-a8b90080-ad10-11ea-8414-8c3a48c72f4d.png" width="30px" height="30px" style={{ marginLeft:"20px" }}/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                </div>
                
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default OtherProjectsComponent;