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


            </div>
        );
    }
}

export default OtherProjectsComponent;