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
                        <img alt="Image" className="FooterImage" src={JsLogo}/>
                        <img alt="Image" className="FooterImage" src={Android}/>
                        <img alt="Image" className="FooterImage" src={Kotlin}/>
                        <img alt="Image" className="FooterImage" src={Java}/>
                        <img alt="Image" className="FooterImage" src={ReactImage}/>
                        <img alt="Image" className="FooterImage" src={Docker}/>
                        <img alt="Image" className="FooterImage" src={Github}/>
                        <img alt="Image" className="FooterImage" src={TypescriptLogo}/>
                        <img alt="Image" className="FooterImage" src={Spring}/>
                    </div>
                </div>
            </div>

        </div>
    );
}
