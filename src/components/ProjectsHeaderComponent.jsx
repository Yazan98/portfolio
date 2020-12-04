import React, {Component} from 'react';
import '../styles/fragments/home_header.scss';
import HeaderImage from '../images/header.png';
import TextLoop from "react-text-loop/lib";
import {NavLink} from "react-router-dom";

class ProjectsHeaderComponent extends Component {
    render() {
        return (
            <div className={"HomeHeaderContainer"}>
                <div className={"Container"}>
                    <div className={"Item"} id={"Image"}>
                        <div className={"TextContent"}>
                            <p>
                                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                                    <span>Open</span>
                                    <span>Closed</span>
                                </TextLoop>{" "}
                                Source Projects I Worked on
                            </p>

                            <h2 className={"title"}>Projects Section</h2>

                            <p className={"Features"}>
                                <span>Android Apps</span>
                                <span className={"Ball small"}/>
                                <span>Web Apps</span>
                                <span className={"Ball small"}/>
                                <span>Websites</span>
                            </p>

                            <p>This Section has Almost of my Projects i worked on from Android Applications , Web Applications , Websites Using Several Languages With All Information about Each Project</p>
                            <a className={"ButtonsContainer"}>
                                <NavLink className={"ResumeButton"} to={"/projects/all"}>All Projects</NavLink>
                            </a>
                        </div>
                    </div>
                    <div className={"Item"}>
                        <img className={"ImageHeader"} src={HeaderImage} alt={"AppsHeaderImage"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsHeaderComponent;
