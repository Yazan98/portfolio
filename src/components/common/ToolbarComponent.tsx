import React from 'react';
import {infoManager, InfoManager} from "../../info/InfoManager";
import '../styles/ToolbarStyle.scss';
import { NavLink } from "react-router-dom";


export default function ToolbarComponent() {
    return (
        <header className="ToolbarComponent">
            <ul style={{ backgroundColor: InfoManager.WHITE_MODE_BACKGROUND_COLOR }}>
                <li><NavLink to="/"><a className="active" style={{ color: InfoManager.BLUE_LINE_HEIGHT, marginLeft: "50px" }}>{ infoManager.getPersonalInfo().name }</a></NavLink></li>
                <li  style={{float: "right", marginRight: "50px"}}><NavLink to="/services"><a>Services</a></NavLink></li>
                <li style={{float: "right"}}><NavLink to="/about"><a>About</a></NavLink></li>
                <li  style={{float: "right"}}><NavLink to="/projects"><a>Projects</a></NavLink></li>
            </ul>
        </header>
    );
}
