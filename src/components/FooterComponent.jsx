import React, {Component} from 'react';
import '../styles/fragments/footer_style.scss';
import {BlueLine} from "./BlueLineComponent";
import TechSectionComponent from "./TechSectionComponent";

class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <div className={"TechSection"}>
                    <TechSectionComponent />
                </div>

                <div className={"AboutProjectsContainer"}>
                    <div className={"AboutContent"}>
                        <h5>About My Projects</h5>
                        <p>Most of the projects that I work on are made to improve and develop from my own applications that facilitate the programming process and allow freedom to
                            make very large applications that are developed very very quickly because of the application infrastructure that makes you reach your goal quickly faster than you imagined</p>
                        <p className={"Copyright"}>Yazan Tarifi (Personal Website) &#169; 2020 All Rights Reserved</p>
                    </div>
                    <div className={"ContactMeContainer"}>
                        <div className={"Content"}>
                            <h5>Contact Section</h5>
                            <div className={"Fields"}>
                                <input className={"EmailHolder"} type={"text"} placeholder={"Please Enter Your Email"}/>
                                <textarea placeholder={"Please Enter Your Message"} />
                                <div className={"Button"}>
                                    <a href={"/"}>Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BlueLine />
            </footer>
        );
    }
}

export default FooterComponent;