import React, {Component} from 'react';
import ToolbarComponent from "../components/ToolbarComponent";
import FooterComponent from "../components/FooterComponent";
import {BlueLine} from "../components/BlueLineComponent";
import '../styles/pages/about_page.scss';
import {NavLink} from "react-router-dom";

class AboutPageComponent extends Component {

    componentDidMount() {
        document.title = "About Page - Portfolio";
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <BlueLine />
                <ToolbarComponent />

                <div className={"AboutPageComponentContainer"}>
                    <main>

                        <p className={"Short"}>Software Engineer</p>
                        <h4>Yazan Tarifi</h4>
                        <p>A code-minded front-end software engineer focused on Design Full Applications From Backend to Frontend Via Some Platforms, Frameworks, Languages</p>

                        <h4 className={"Title"}>About Me</h4>
                        <p>I'm always want to Create a Creative Tools To Make My work Better, Create Opensource Projects, Based In Jordan, Create A backend for Project by design, Build a Restful Api Based on (SpringBoot, Nest.js, Ktor) and Create A Mobile Application Using Latest Technologies in Android Development also there is a good knowledge in Web Development With React.js, Over 3+ years of experience in Software Development</p>
                        <div className={"Buttons"}>
                            <NavLink className={"Button"} to={"/resume"}>Resume</NavLink>
                            <a className={"Button"} href={"https://github.com/yazan98"} target={"_blank"}>Github Account</a>
                            <NavLink className={"Button"} to={"/skills"}>Personal Skills</NavLink>
                        </div>

                        <h4 className={"Title"}>Technologies & Tools</h4>
                        <p className={"Short"}>Here are a few technologies I've been working with recently:</p>
                        <div className={"Grid"}>
                            <p>Android Apps</p>
                            <p>Spring Boot (Java/Kotlin)</p>
                            <p>Javascript (ES6+)</p>
                            <p>Html / S-CSS</p>
                            <p>React.js (Jsx / Typescript)</p>
                            <p>PWA</p>
                            <p>Node.js</p>
                            <p>Version Control</p>
                            <p>Photoshop / After Effects</p>
                            <p>Continuous Integration</p>
                        </div>

                    </main>

                </div>


                <FooterComponent />
            </div>
        );
    }
}

export default AboutPageComponent;