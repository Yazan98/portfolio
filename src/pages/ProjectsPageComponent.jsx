import React, {Component} from 'react';
import FooterComponent from "../components/FooterComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import {BlueLine} from "../components/BlueLineComponent";
import '../styles/pages/projects_style.scss';
import AppsProjectsComponent from "../components/AppsProjectsComponent";
import ProjectsHeaderComponent from "../components/ProjectsHeaderComponent";
import ThemesSectionComponent from "../components/ThemesSectionComponent";

class ProjectsPageComponent extends Component {
    render() {
        return (
            <div className={"ProjectsPageComponentContainer"}>
                <header>
                    <BlueLine />
                    <ToolbarComponent />
                </header>

                <main>
                    <ProjectsHeaderComponent />
                    <section className={"MainSection"}>
                        <AppsProjectsComponent />
                        <ThemesSectionComponent />
                    </section>
                </main>

                <FooterComponent />
            </div>
        );
    }
}

export default ProjectsPageComponent;