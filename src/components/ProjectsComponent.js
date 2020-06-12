import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'

export default class ProjectsComponent extends React.Component {
    render() {
        return (
            <>
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
                        <Button color="inherit"><NavLink className="Link" to="/about">About</NavLink></Button>
                        <Button color="inherit"><NavLink className="Link" to="/services">Services</NavLink></Button>
                    </Toolbar>
                </AppBar>
                </div>
            </header>

            <div class="HighlightWebsite">
                <div class="MainArea">
                    <p>The projects I worked on</p>
                    <h3>
                            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                                <span>Open Source</span>
                                <span>Closed Source</span>
                            </TextLoop>{" "}
                            Projects
                        </h3>
                    <p> The Projects Section Describe The All Projects (Open Source , Closed Source Projects)
                    With Describtion, Details
                    </p>
                    <div class="OtherContainer">
                    <NavLink className="Github" style={{ marginTop:"1em" }} to="/other">Other Projects</NavLink>
                    </div>
                </div>
            </div>
            

                <div className="AppsSection">

                <div class="Item">
                <div class="container">
                    <div class="row" id="SubContainerApp">
                        <div class="col-sm" id="ColumnInfoApp">
                        <p>Android Application</p>
                        <h5>Closed Source App</h5>
                        <h1>Mwarrid</h1>
                        <p>An integrated electronic marketing platform from a website and an application on smartphones and tablets help to
             connect the food sector suppliers in all their fields with restaurants, cafes, hotels, wedding hall and all those
              involved in selling food in the retail sector and soon individuals. So that suppliers periodically display their
              products, set their prices, and market them, to help our customers follow the market, view the latest offers, instant
               order, and track order status through the supplier's online platform.</p>
                            <div class="container" id="buttonsContainer">
                                <div class="row">
                                <div class="col-sm">
                                    <a class="myButton" id="myButton">View Details</a>
                                </div>
                                <div class="col-sm">
                                <a class="myButton" id="myButton" href="https://play.google.com/store/apps/details?id=com.mwarrid.mwarrid" target="_blank">View Project</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm" id="Image">
                        <img src="https://user-images.githubusercontent.com/29167110/79882433-837fd400-83ea-11ea-9e2f-2e00f3a0c0dc.png" width="500" height="500"/>
                        </div>
                    </div>
                </div>
            </div>

                    <div class="Item">
                        <div class="container">
                            <div class="row" id="SubContainerApp">
                                <div class="col-sm" id="ColumnInfoApp">
                                <p>Android Application</p>
                                <h5>Closed Source App</h5>
                                <h1>Diretto</h1>
                                <p>An integrated platform capable of connecting the customers to the merchants of cvarious types and
            communicating with each other, asking them to facilitate access to each other and know the evaluation
            of others and the possibility of evaluation as well.</p>
                                    <div class="container" id="buttonsContainer">
                                        <div class="row">
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton">View Details</a>
                                        </div>
                                        <div class="col-sm">
                    <a class="myButton" id="myButton" href="https://play.google.com/store/apps/details?id=com.noventapp.direct.user" target="_blank">View Project</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm" id="Image">
                                <img src="https://user-images.githubusercontent.com/29167110/79885144-39005680-83ee-11ea-9093-29ff0afe4e68.png" width="500" height="500"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="Item">
                        <div class="container">
                            <div class="row" id="SubContainerApp">
                                <div class="col-sm" id="ColumnInfoApp">
                                <p>Android Application</p>
                                <h5>Closed Source App</h5>
                                <h1>Autohub</h1>
                                <p>An Github Client Built To Test Vortex Infrastructure For Android Applications With A Lot Of Features To Manage Github Accounts
                                Personal Accounts, Repositories, Search Repository, Popular Repos, Orgs, Gists, Github Auth, With Kotlin Programming Language
                              </p>
                                    <div class="container" id="buttonsContainer">
                                        <div class="row">
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton">View Details</a>
                                        </div>
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton" href="https://github.com/Yazan98/Destiny" target="_blank">View Project</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm" id="Image">
                                <img src="https://user-images.githubusercontent.com/29167110/79905453-30b81380-840e-11ea-87b6-91159aa4f8b8.png" width="500" height="500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="Item">
                        <div class="container">
                            <div class="row" id="SubContainerApp">
                                <div class="col-sm" id="ColumnInfoApp">
                                <p>Android Application</p>
                                <h5>Closed Source App</h5>
                                <h1>Wintrop</h1>
                                <p>Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba
                                </p>
                                    <div class="container" id="buttonsContainer">
                                        <div class="row">
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton">View Details</a>
                                        </div>
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton" href="https://github.com/Yazan98/Destiny" target="_blank">View Project</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm" id="Image">
                                <img src="https://user-images.githubusercontent.com/29167110/79907474-8b06a380-8411-11ea-9cc8-d1c124d94a59.png" width="500" height="500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="Item">
                        <div class="container">
                        <div class="row" id="SubContainerApp">
                            <div class="col-sm" id="ColumnInfoApp">
                            <p>Android Application</p>
                            <h5>Open Source App</h5>
                            <h1>Destiny</h1>
                            <p>Restaurant Application Powered By Vortex Infrastructure With Latest Technologies, Realm Database, Restful Api, Trainig Project and Testing For Vortex Testing
                            </p>
                                <div class="container" id="buttonsContainer">
                                    <div class="row">
                                    <div class="col-sm">
                                        <a class="myButton" id="myButton">View Details</a>
                                    </div>
                                    <div class="col-sm">
                                        <a class="myButton" id="myButton" href="https://github.com/Yazan98/Destiny" target="_blank">View Project</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm" id="Image">
                            <img src="https://user-images.githubusercontent.com/29167110/79907964-619a4780-8412-11ea-8b37-37425054088e.png" width="500" height="500"/>
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="Item">
                        <div class="container">
                            <div class="row" id="SubContainerApp">
                                <div class="col-sm" id="ColumnInfoApp">
                                <p>Android Application</p>
                                <h5>Closed Source App</h5>
                                <h1>Drasati</h1>
                                <p>An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes
                                </p>
                                    <div class="container" id="buttonsContainer">
                                        <div class="row">
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton">View Details</a>
                                        </div>
                                        <div class="col-sm">
                                            <a class="myButton" id="myButton" href="https://github.com/Yazan98/Destiny" target="_blank">View Project</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm" id="Image">
                                <img src="https://user-images.githubusercontent.com/29167110/79912378-da50d200-8419-11ea-857c-0e1c3b9c3c68.png" width="500" height="500"/>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </>
        );
    }
}
