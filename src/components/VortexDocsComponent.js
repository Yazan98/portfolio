import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import { NavLink } from 'react-router-dom'

class VortexDocsComponent extends Component {

    componentDidMount() {
        document.title = "Portfolio | About Me";
    }

    render() {
        return (
            <div className="AboutPage">
            
            </div>
        );
    }
}

export default VortexDocsComponent;