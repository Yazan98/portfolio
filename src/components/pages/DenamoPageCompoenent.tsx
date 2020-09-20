import React from 'react';
import '../styles/GeneralStyles.scss';
import { NavLink } from "react-router-dom";
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import {FooterComponent} from "../common/FooterComponent";

export default function DenamoPageComponent() {
    return (
        <div className={"DenamoContainer"}>
            <BlueLineComponent />
            <ToolbarComponent />

            <div className={"ThemeContent"} style={{ color: "white"}}>
                <h3 className={"Title"} ><strong>Denamo Theme</strong></h3>
                <p className={"Title"}>A Visual Studio Code Dark Theme To Build Typescript Apps With Blue Effect To Make the Development Environment Better To Work</p>
                <div style={{ marginTop: "2em" }}>
                    <a style={{ textDecoration: "none" }} className="ResumeButtonCustom" href="https://github.com/Yazan98/Denamo">Download Theme</a>
                </div>

                <img src={"https://user-images.githubusercontent.com/29167110/93529777-57ad3f80-f8f1-11ea-9d1a-103c8bbc93ab.jpg"}
                     style={{ objectFit: "contain", textAlign: "center", marginTop: "2em" }}
                     width={"100%"}
                     height={"720px"}/>

                <img src={"https://user-images.githubusercontent.com/29167110/93557863-f3aa6b80-f930-11ea-9ae6-bcc5743ebbbd.jpg"}
                     style={{ objectFit: "contain", textAlign: "center", marginTop: "2em" }}
                     width={"100%"}
                     height={"720px"}/>
            </div>

            <FooterComponent />
            <BlueLineComponent />
        </div>
    );
}
