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
                        <Button color="inherit"><NavLink className="Link"  to="/about">About</NavLink></Button>
                        <Button color="inherit"><NavLink className="Link"  to="/services">Services</NavLink></Button>
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
                    <a>Other Projects</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
