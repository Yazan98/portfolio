import React from 'react';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import HomeHeaderComponent from "../fragments/HomeHeaderComponent";
import {InfoManager, infoManager} from "../../info/InfoManager";
import {ServiceComponent} from "../fragments/ServiceComponent";
import TechnologiesComponent from "../fragments/TechnologiesComponent";
import {FooterComponent} from "../common/FooterComponent";
import '../styles/GeneralStyles.scss';

export default function HomePageComponent() {
    return (
        <div className="HomePageContainer">

            <BlueLineComponent />
            <ToolbarComponent />
            <HomeHeaderComponent />

            <div className="ProjectsSection" style={{
                marginBottom: "10em"
            }}>
                <h4 className={"ItemProjectTitle"}>What Can I Do</h4>
                <div id={"ServicesItem"} className="row">
                    {
                        infoManager.getPersonalServices().map((item , index) => {
                            return <div className="col-md-3">
                                <ServiceComponent name={item.name} description={item.description} shortName={item.key} key={index}/>
                            </div>
                        })
                    }
                </div>
            </div>

            <TechnologiesComponent />

            <FooterComponent />
            <BlueLineComponent />

        </div>
    );
}
