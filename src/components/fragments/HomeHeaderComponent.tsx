import React from 'react';
import '../styles/HomeHeaderStyle.scss';
import {infoManager} from "../../info/InfoManager";
import phones from '../images/phones.png';

export default function HomeHeaderComponent() {
    return (
        <div className="HomeHeaderComponentContainer">
            <div className="row">
                <div className="col" id="Section">
                    <div className="Items">
                        { infoManager.getPersonalInfo().publicActions.map((item,i) => <li className="TextSmall" key={i}>{item}</li>) }
                    </div>
                    <p className="Description">
                        {infoManager.getPersonalInfo().description}
                    </p>
                </div>
                <div className="col">
                    <img src={phones} width="800px" />
                </div>
            </div>
        </div>
    );
}
