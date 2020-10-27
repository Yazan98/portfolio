import React, {Component} from 'react';
import '../styles/fragments/home_header.scss';
import HeaderImage from '../images/header.png';
import TextLoop from "react-text-loop/lib";
import {NavLink} from "react-router-dom";

class HomeHeaderComponent extends Component {
    render() {
        return (
            <div className={"HomeHeaderContainer"}>
                <div className={"Container"}>
                    <div className={"Item"} id={"Image"}>
                        <div className={"TextContent"}>

                            <p>
                                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                                    <span>Android</span>
                                    <span>Web</span>
                                    <span>Backend (SpringBoot) </span>
                                    <span>Backend (Nest.js) </span>
                                    <span>Backend (Ktor) </span>
                                </TextLoop>{" "}
                                Developer
                            </p>

                            <p>Hi, my name is</p>
                            <h2 className={"title"}>Yazan Tarifi</h2>

                            <p className={"Features"}>
                                <span>Android Apps</span>
                                <span className={"Ball small"}/>
                                <span>Frontend (React Apps)</span>
                                <span className={"Ball small"}/>
                                <span>Web Apps (Spring Boot)</span>
                            </p>

                            <p>A code-minded front-end software engineer focused on building beautiful interfaces & experiences and Convert Ideas, Design To System With Frontend Side (Android Apps, React Websites) also The Backend Side With (SpringBoot, Ktor, Nest.js)</p>
                            <a className={"ButtonsContainer"}>
                                <NavLink className={"ResumeButton"} to={"/resume"}>Resume</NavLink>
                                <a className={"ResumeButton SecondButton Link"} href={"https://github.com/Yazan98"} target="_blank">Github</a>
                            </a>

                        </div>
                    </div>
                    <div className={"Item"}>
                        <div className={"Container"}>
                            <img className={"ImageHeader"} src={HeaderImage} alt={"AppsHeaderImage"} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeaderComponent;
