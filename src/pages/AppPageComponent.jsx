import React, {Component} from 'react';
import {BlueLine} from "../components/BlueLineComponent";
import ToolbarComponent from "../components/ToolbarComponent";
import FooterComponent from "../components/FooterComponent";

class AppPageComponent extends Component {

    render() {
        let params = this.props.location.pathname
        return (
            <div className={"AppPageComponent"}>
                <BlueLine />
                <ToolbarComponent />

                <div className={"Content"}>
                    {this.getAppInfo(params.split("/")[2])}
                </div>

                <FooterComponent />
            </div>
        );
    }

    getAppInfo(name) {
        return (
            <h1>{name}</h1>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "App Page - Portfolio";
    }

}

export default AppPageComponent;