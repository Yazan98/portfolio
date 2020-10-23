import React, {Component} from 'react';
import FooterComponent from "../components/FooterComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import {BlueLine} from "../components/BlueLineComponent";
import '../styles/pages/projects_style.scss';

class ProjectsPageComponent extends Component {
    render() {
        return (
            <div className={"ProjectsPageComponentContainer"}>
                <header>
                    <BlueLine />
                    <ToolbarComponent />
                </header>

                <main>
                    <section className={"MainSection"}>

                    </section>
                </main>

                <FooterComponent />
            </div>
        );
    }
}

export default ProjectsPageComponent;