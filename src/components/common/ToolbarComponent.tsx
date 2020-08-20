import React from 'react';
import {InfoManager} from "../../info/InfoManager";
import '../styles/ToolbarStyle.scss';

export default function ToolbarComponent() {
    return (
        <header className="ToolbarComponent">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{float: "right"}}><a href="#about">About</a></li>
            </ul>
        </header>
    );

}


