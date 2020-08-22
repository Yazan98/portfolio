import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../styles/GeneralStyles.scss';
import FacebookLogo from "../images/facebook.png";
import LinkedinLogo from "../images/linkedin.png";
import GithubLogo from "../images/min_github.png";

export function FooterComponent() {
    return (
        <footer className="FooterComponent">
            <div className="row">
                <div className="col" id="Section">
                    <h4>About My Projects</h4>
                    <p>Most of the projects that I work on are made to improve and develop from my own applications that facilitate the programming process and allow freedom to make very large applications that are developed very very quickly because of the application infrastructure that makes you reach your goal quickly faster than you imagined</p>
                    <h6>Follow Me On</h6>
                    <div className="row">
                        <div className="col">
                            <a href="https://www.facebook.com/yazantarifi98/"><img className="FooterImage" src={FacebookLogo}/></a>
                            <a href="https://www.linkedin.com/in/yazan-tarifi-106282192/"><img className="FooterImage" src={LinkedinLogo}/></a>
                            <a href="https://github.com/Yazan98"><img className="FooterImage" src={GithubLogo}/></a>
                        </div>
                    </div>
                   <a href="https://www.behance.net/emamghola?tracking_source=search_users_recommended%7Cemam%20ghola"><p className="Name">Design : <span>Emam Ghola</span></p></a>
                    <p>Yazan Tarifi @ 2020 All Rights Reserved</p>
                </div>
                <div className="col">
                    <div className="Area" style={{textAlign: "center"}}>
                        <TextField className="TextArea" id="outlined-basic" label="Please Enter Your Email" variant="outlined" inputMode="email"/>  <br/>
                        <TextField className="TextArea" id="outlined-basic" label="Please Enter Your Message" variant="outlined" />  <br/>
                        <a href="" className="SubmitButton">Submit</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
