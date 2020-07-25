import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom'


export default function AppBarComponent() {
    return (
        <header>
                <div className="ToolbarSection">
                <AppBar position="static" className="AppBar" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="textPrimary">
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
    );
}