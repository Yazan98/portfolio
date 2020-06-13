import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import '../App.css';
import TextLoop from "react-text-loop";
import { NavLink } from 'react-router-dom'

class AboutComponent extends Component {

    componentDidMount() {
        document.title = "Portfolio | About Me";
    }

    render() {
        return (
            <div className="AboutPage">
            
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

            <div className="PageContent">
            
            <h2 className="AboutMe">About Me</h2>
            <p style={{ color:"#999999" }}>Hi, my name is Yazan Tarifi, I'm a Software Developer</p>
            <p style={{ color:"#999999" }}>I am a Designer and Developer for sites and applications that can be run on multiple platforms with +4 years of experience in building Applications</p>
            <p style={{ color:"#999999" }}>Build Android Applications With Latest Technologies, Best Performance</p>
            <p style={{ color:"#999999" }}>Build , Design Restful Api With Java, Kotlin, Javascript</p>
            <p style={{ color:"#999999" }}>Familiar With Gradle, Maven, Yaml, Json Project Configuration</p>
            <p style={{ color:"#999999" }}>Deploy Backend Projects With Docker, Google App Engine , Heroku</p>
            <p style={{ color:"#999999" }}>Design, Edit (Icons, Images) With Adobe Photoshop</p>
            <p style={{ color:"#999999" }}>Design Simple Websites With Vue.js, React.js</p>
            <p style={{ color:"#999999" }}>Design Custom Plugins For Intellij , Gradle</p>


            <h2 className="AboutMe" style={{ marginTop:"2em" }}>I ♥ Open Source</h2>
            <p style={{ color:"#999999" }}>At leisure, I design tools that help me build my applications much better</p>
            <a style={{ marginTop:"1em" }} href="https://github.com/Yazan98" class="Github">Github Profile</a>


            <h2 className="AboutMe" style={{ marginTop:"2em" }}>Social</h2>
            <a style={{ marginTop:"1em" }} href="https://github.com/Yazan98">Github Profile</a><br></br>
            <a style={{ marginTop:"1em" }} href="https://stackoverflow.com/users/12858222/yt98">Stackoverflow Profile</a><br></br>
            <a style={{ marginTop:"1em" }} href="https://dev.to/yazan98">Dev.to Profile</a><br></br>
            <a style={{ marginTop:"1em" }} href="https://www.linkedin.com/in/yazan-tarifi-106282192/">Linkedin Profile</a><br></br>
            </div>
            
            </div>
        );
    }
}

export default AboutComponent;