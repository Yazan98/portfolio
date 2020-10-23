import React, {Component} from 'react';
import '../styles/fragments/apps_styles.scss';
import Wintrop from '../images/projects/wintrop.png';
import Github from '../images/projects/github.png';
import Destiny from '../images/projects/destiny.png';
import Drasati from '../images/projects/drasati.png';
import {NavLink} from "react-router-dom";

class AppsProjectsComponent extends Component {
    render() {
        return (
            <div className={"Container"}>

                <div className={"Item"}>
                    <div className={"App"}>
                        <img alt={"Wintrop"} src={Wintrop} />
                    </div>
                    <div className={"Card blue"}>
                        <p className={"Type"}>Open Source</p>
                        <h4>Wintrop</h4>
                        <p>Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba Powered By Retrofit , Kotlin , MVVM</p>
                       <div className={"Link"}>
                           <NavLink className={"text"} to={"/project/wintrop"}>App Link</NavLink>
                       </div>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Card blue2 disable-margin"}>
                        <p className={"Type"}>Open Source</p>
                        <h4>Autohub</h4>
                        <p>Github Client Powered By Vortex-io , Kotlin Language Based on Github Api V3 To Show Github User Info, The Porpouse of this project is to test Vortex Structure and Implementation</p>
                        <div className={"Link"}>
                            <NavLink className={"text"} to={"/project/autohub"}>App Link</NavLink>
                        </div>
                    </div>
                    <div className={"App"}>
                        <img alt={"Github"} src={Github} />
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"App"}>
                        <img alt={"Destiny"} src={Destiny} />
                    </div>
                    <div className={"Card green"}>
                        <p className={"Type"}>Open Source</p>
                        <h4>Destiny</h4>
                        <p>This Project is a Training Project Powered By Vortex-io and Realm Database , Kotlin Language With Standalone Api Built in Spring Boot and Kotlin with MySql Database, Firebase Push Notification</p>
                        <div className={"Link"}>
                            <NavLink className={"text"} to={"/project/destiny"}>App Link</NavLink>
                        </div>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Card prple disable-margin"}>
                        <p className={"Type"}>Closed Source</p>
                        <h4>Drasati</h4>
                        <p>An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes</p>
                        <div className={"Link"}>
                            <NavLink className={"text"} to={"/project/drasati"}>App Link</NavLink>
                        </div>
                    </div>
                    <div className={"App"}>
                        <img alt={"Drasati"} src={Drasati} />
                    </div>
                </div>

            </div>
        );
    }
}

export default AppsProjectsComponent;
