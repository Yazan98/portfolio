import React from 'react';
import {infoManager, InfoManager} from "../../info/InfoManager";
import '../styles/ToolbarStyle.scss';

export default function ToolbarComponent() {
    return (
        <header className="ToolbarComponent">
            <ul style={{ backgroundColor: InfoManager.WHITE_MODE_BACKGROUND_COLOR }}>
                <li><a className="active" href="#home" style={{ color: InfoManager.BLUE_LINE_HEIGHT, marginLeft: "50px" }}>{ infoManager.getPersonalInfo().name }</a></li>
                <li  style={{float: "right", marginRight: "50px"}}><a href="#news">Services</a></li>
                <li  style={{float: "right"}}><a href="#contact">Projects</a></li>
                <li style={{float: "right"}}><a href="#about">About</a></li>
            </ul>
        </header>
    );
}
