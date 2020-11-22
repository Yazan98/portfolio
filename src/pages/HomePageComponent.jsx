import React from 'react';
import {BlueLine} from "../components/BlueLineComponent";
import '../styles/pages/home_style.scss';
import HomeHeaderComponent from "../components/HomeHeaderComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import HomeServicesComponent from "../components/HomeServicesComponent";
import FooterComponent from "../components/FooterComponent";

export default class HomePageComponent extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "Home Page - Portfolio";
    }

    render() {
        return (
            <div className={"HomePageComponentContainer"}>
                <header>
                    <BlueLine />
                    <ToolbarComponent />
                    <main>
                        <HomeHeaderComponent />
                    </main>
                </header>
                <HomeServicesComponent />
                <FooterComponent />
            </div>
        );
    }
}
