import React from 'react';
import {infoManager, InfoManager} from "../../info/InfoManager";
import '../styles/ToolbarStyle.scss';
import { NavLink } from "react-router-dom";

export default function ToolbarComponent() {
    return (
        <header className="ToolbarComponent" style={{ display: "flex" }}>
            <ul style={{ flex: 1 }}>
                <li><NavLink to="/"><a href="/#" className="active" style={{ color: InfoManager.BLUE_LINE_HEIGHT }}>{ infoManager.getPersonalInfo().name }</a></NavLink></li>
            </ul>
            <ul style={{ backgroundColor: InfoManager.WHITE_MODE_BACKGROUND_COLOR }}>
                <li className={"Item"}><NavLink to="/projects"><a href="/#">Projects</a></NavLink></li>
                <li className={"Item"}><NavLink to="/about"><a href="/#">About</a></NavLink></li>
                <li className={"Item"}><NavLink to="/services"><a href="/#">Services</a></NavLink></li>
            </ul>
        </header>
    );
}
