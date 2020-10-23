import React from 'react';
import {BlueLine} from "../components/BlueLineComponent";
import '../styles/pages/home_style.scss';
import HomeHeaderComponent from "../components/HomeHeaderComponent";
import ToolbarComponent from "../components/ToolbarComponent";

export default class HomePageComponent extends React.Component {
    render() {
        return (
            <div className={"HomePageComponentContainer"}>
                <header>
                    <BlueLine />
                    <ToolbarComponent />
                    <HomeHeaderComponent />
                </header>

                <main>

                </main>

                <footer>
                    <BlueLine />
                </footer>
            </div>
        );
    }
}
