import React from 'react';
import '../styles/pages/home_style.scss';
import HomeHeaderComponent from "../components/HomeHeaderComponent";
import HomeServicesComponent from "../components/HomeServicesComponent";
import FooterComponent from "../components/FooterComponent";
import {PersonalPagesViewComponent} from "../components/layouts/PersonalPagesComponent";

export default class HomePageComponent extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <PersonalPagesViewComponent className={"HomePageComponentContainer"} title={"Home Page - Portfolio"}>
                <header>
                    <main>
                        <HomeHeaderComponent />
                    </main>
                </header>
                <HomeServicesComponent />
                <FooterComponent />
            </PersonalPagesViewComponent>
        );
    }
}
