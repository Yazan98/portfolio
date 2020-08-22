import React from 'react';
import '../styles/HomeHeaderStyle.scss';
import JsLogo from '../images/jsLogo.png';
import Android from '../images/android.png';
import Kotlin from '../images/kotlin.png';
import Java from '../images/java.png';
import ReactImage from '../images/react.png';
import Docker from '../images/docker.png';
import Github from '../images/github.png';
import TypescriptLogo from '../images/ts.png';
import Spring from '../images/spring.png';
import '../styles/GeneralStyles.scss';

export default function TechnologiesComponent() {
    return (
        <div className="TechnologiesComponentContainer" style={{
            backgroundColor: "#eeeeee",
            padding: "20px"}}>

            <div className="ImagesContainer">
                <div className="row">
                    <div className="col">
                        <img className="FooterImage" src={JsLogo}/>
                        <img className="FooterImage" src={Android}/>
                        <img className="FooterImage" src={Kotlin}/>
                        <img className="FooterImage" src={Java}/>
                        <img className="FooterImage" src={ReactImage}/>
                        <img className="FooterImage" src={Docker}/>
                        <img className="FooterImage" src={Github}/>
                        <img className="FooterImage" src={TypescriptLogo}/>
                        <img className="FooterImage" src={Spring}/>
                    </div>
                </div>
            </div>

        </div>
    );
}
