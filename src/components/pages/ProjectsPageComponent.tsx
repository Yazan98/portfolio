import React from 'react';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import {FooterComponent} from "../common/FooterComponent";
import {infoManager} from "../../info/InfoManager";
import {MobileRowComponent} from "../fragments/MobileRowComponent";

export default function ProjectsPageComponent() {
    return (
        <div className="HomePageContainer">

            <BlueLineComponent/>
            <ToolbarComponent/>

            <div className="ProjectsTitle">
                <h2>Some Apps I've Built</h2>
            </div>

            <div className="MobileProjects" style={{ marginTop: "5rem" }}>
                {
                    infoManager.getProjects().map((item, index) => {
                        return <MobileRowComponent name={item.name} type={item.type}
                                                   description={item.description} imageUrl={item.mainImageLink}
                                                   appUrl={item.appLink} isRtlRow={index % 2 == 0}/>
                    })
                }
            </div>

            <FooterComponent/>
            <BlueLineComponent/>

        </div>
    );
}
