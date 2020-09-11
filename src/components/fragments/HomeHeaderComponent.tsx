import React from 'react';
import '../styles/HomeHeaderStyle.scss';
import {infoManager} from "../../info/InfoManager";
import phones from '../images/header_image.png';
import TextLoop from "react-text-loop/lib";
import { NavLink } from "react-router-dom";

export default function HomeHeaderComponent() {
    return (
        <div className="HomeHeaderComponentContainer">
            <div className="row">
                <div className="col" id="Section">
                    <p>
                        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                            <span>Android</span>
                            <span>Web</span>
                            <span>Backend (SpringBoot) </span>
                            <span>Backend (Nest.js) </span>
                            <span>Backend (Ktor) </span>
                        </TextLoop>{" "}
                        Developer
                    </p>
                    <p className="Name">Hi, my name is</p>
                    <h2 className="MainName">{infoManager.getPersonalInfo().name}</h2>
                    <h2 className="MainName2">I build things for Fun</h2>
                    <p className="Description">
                        {infoManager.getPersonalInfo().description}
                    </p>
                    <NavLink to="/resume" className="ResumeButton">View Resume</NavLink>
                </div>
                <div className="col">
                    <img alt="Image" className="HomePhonesImage" src={phones} width="800px" />
                </div>
            </div>
        </div>
    );
}
