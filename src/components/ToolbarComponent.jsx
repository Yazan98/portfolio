import React, {Component} from 'react';
import '../styles/fragments/toolbar_style.scss';
import {NavLink} from "react-router-dom";
import PwaLogo from '../images/pwalogo.svg';

class ToolbarComponent extends Component {
    render() {
        return (
            <div className={"ToolbarComponentContainer"}>
                <div className={"Content"}>
                    <div className={"Logo"}>
                        <h5 className={"Logo"}>Yazan Tarifi</h5>
                    </div>
                    <div className={"Links"}>
                        <NavLink className={"ToolbarLink"} to={"/"}>Home</NavLink>
                        <NavLink className={"ToolbarLink"} to={"/projects"}>Projects</NavLink>
                        <NavLink className={"ToolbarLink"} to={"/about"}>About</NavLink>
                        <NavLink className={"ToolbarLink"} to={"/services"}>Services</NavLink>
                        <div className={"PwaButton"}>
                            <img src={PwaLogo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolbarComponent;
