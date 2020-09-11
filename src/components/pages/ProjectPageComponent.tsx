import React from 'react';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import {FooterComponent} from "../common/FooterComponent";
import '../styles/GeneralStyles.scss';
import {InfoManager, infoManager} from "../../info/InfoManager";
import {ProjectInfo} from "../../info/Entities";

export default class ProjectPageComponent extends React.Component<any, any> {

    render() {
        let params = this.props.location.pathname
        let items = infoManager.getAllProjects();
        return (
            <div className="ProjectPageComponentContainer">

                <BlueLineComponent/>
                <ToolbarComponent/>
                {this.renderPage(this.validateProject(params, items))}
                <FooterComponent/>
                <BlueLineComponent/>

            </div>
        );
    }

    private validateProject(param: string, items: Array<ProjectInfo>): ProjectInfo | undefined {
        let finalResult:  ProjectInfo | undefined
        let projectName = param.toLowerCase().replace("/project/", "")
        for (let i = 0; i < items.length; i++) {
            if (items[i].name.toLowerCase() === projectName) {
                finalResult = items[i];
                break
            }
        }
        return finalResult;
    }

    private renderPage(project: ProjectInfo | undefined) {
        if (project) {
            switch (project.type) {
                case InfoManager.PROJECT_MOBILE_TYPE:
                    return this.renderMobilePage(project)
                    break;
            }
        } else {

        }
    }

    private renderMobilePage(project: ProjectInfo | undefined) {
        let type = ""
        if (project?.isOpenSource) {
            type = "This Project Is Open Source Project"
        } else {
            type = "This Project Is Closed Source Project"
        }
        return (
            <div className="MobilePageContainer" style={{ padding: "3rem" }}>
                <img alt="Image" src={project?.logo} width="100px" height="100px"/>
                <p style={{ display: "flex" }}>
                    <span><h3 style={{ color: InfoManager.BLUE_COLOR, marginTop: "1rem", paddingTop: "10px" }}>{project?.name}</h3></span>
                    <span className="TagItem" style={{ marginLeft: "3rem" , width: "auto", textDecoration: "none", color: "white"}}><a style={{ textDecoration: "none", color: "white" }} href={project?.link}>Project Link</a></span>
                </p>
                <h6 style={{ marginTop: "1em" }}><strong>Designed In : {project?.designedPlace}</strong></h6>
                <h6><strong>{type}</strong></h6>
                <p style={{ width: "60%" }}>{project?.description}</p>
                <p style={{ display: "flex" }}>{project?.tags.map(item => {
                    return <span className="TagItem" style={{ marginRight: "2em" }}><p>{item}</p></span>
                })}</p>
                <div className={"ProjectImages"}>
                    <p style={{ display: "inline-flex" }}>{project?.images.map(item => {
                        return <span ><img alt="Image" className="AppImage" src={item}/></span>
                    })}</p>
                </div>
            </div>
        );
    }

}
