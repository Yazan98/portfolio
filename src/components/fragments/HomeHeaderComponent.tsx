import React from 'react';
import '../styles/HomeHeaderStyle.scss';
import {infoManager} from "../../info/InfoManager";
import phones from '../images/phones.png';
import TextLoop from "react-text-loop/lib";

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
                            <span>Flutter Apps </span>
                        </TextLoop>{" "}
                        Developer
                    </p>
                    <p className="Description">
                        {infoManager.getPersonalInfo().description}
                    </p>
                </div>
                <div className="col">
                    <img className="HomePhonesImage" src={phones} width="800px" />
                </div>
            </div>
        </div>
    );
}
