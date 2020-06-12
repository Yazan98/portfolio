import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export default class AppBarComponent extends React.Component {

    render() {
        return (
            <header>
                <div className="ToolbarSection">
                <AppBar position="static">
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
        );
    }
}
