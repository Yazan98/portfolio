import React from 'react';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import {FooterComponent} from "../common/FooterComponent";
import {InfoManager, infoManager} from "../../info/InfoManager";
import {MobileRowComponent} from "../fragments/MobileRowComponent";
import { NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CardProjectComponent} from "../fragments/CardProjectComponent";
import '../styles/GeneralStyles.scss';

export default function ProjectsPageComponent() {
    return (
        <div className="HomePageContainer">

            <BlueLineComponent/>
            <ToolbarComponent/>

            <div className="ProjectsTitle">
                <h2>Some Apps I've Built</h2>
            </div>

            <div className="MobileProjects" style={{ marginTop: "5rem" }}>
                {
                    infoManager.getProjects().map((item, index) => {
                        return <MobileRowComponent name={item.name} type={item.type}
                                                   description={item.description} imageUrl={item.mainImageLink}
                                                   appUrl={item.appLink} isRtlRow={index % 2 == 0}/>
                    })
                }
            </div>

            <div className="ProjectsTitle">
                <h2>Other Noteworthy Projects</h2>
                <NavLink to="/projects/archive"><a href="">View The Archive</a></NavLink>
            </div>

            <div className="ProjectsSectionGithub" style={{ marginBottom: "10em", paddingRight: "250px", paddingLeft: "250px" }}>
                <Grid container className={"Container"} spacing={0}  style={{
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    paddingBottom: "10%",
                    textAlign: "center",
                    marginTop: "50px"
                }}>
                    <Grid container justify="space-between" xs={12} spacing={0}>
                        {infoManager.getGithubProjects().map((item, key) => {
                            if (key <= 5) {
                                return <Grid item xs={4} spacing={0}>
                                    <Paper className={"ProjectItem"} style={{ backgroundColor:"#eeeeee", margin: "10px", height: "350px", textAlign: "start", padding: "2em" }}>
                                        <CardProjectComponent name={item.name} description={item.description} type={item.isOpenSource} githubUrl={item.githubLink} url={item.link} key={key}/>
                                    </Paper>
                                </Grid>
                            } else {
                                return <></>
                            }
                        })
                        }
                    </Grid>
                </Grid>
            </div>

            <FooterComponent/>
            <BlueLineComponent/>

        </div>
    );
}
