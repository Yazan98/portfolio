import React, {Component} from 'react';
import FooterComponent from "../components/FooterComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import '../styles/pages/projects_style.scss';
import AppsProjectsComponent from "../components/AppsProjectsComponent";
import ThemesSectionComponent from "../components/ThemesSectionComponent";
import WebsitesSectionComponent from "../components/WebsitesSectionComponent";
import ProjectsSectionComponents from "../components/ProjectsSectionComponents";
import {BlueLineComponent} from "../components/BlueLineComponent";

class ProjectsPageComponent extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "Projects Page - Portfolio";
    }

    render() {
        return (
            <div className={"ProjectsPageComponentContainer"}>
                <header>
                    <BlueLineComponent />
                    <ToolbarComponent />
                </header>

                <main>
                    <section className={"MainSection"}>
                        <AppsProjectsComponent />
                        <WebsitesSectionComponent />
                        <ProjectsSectionComponents />
                        <ThemesSectionComponent />
                    </section>
                </main>

                <FooterComponent />
            </div>
        );
    }
}

export default ProjectsPageComponent;