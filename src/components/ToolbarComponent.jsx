import React from 'react';
import '../styles/fragments/toolbar_style.scss';
import {NavLink} from "react-router-dom";
import {BlueLineComponent} from "./BlueLineComponent";


export default function ToolbarComponent() {
    const currentPath = window.location.pathname;
    return (
        <div className="Toolbar_Container">
            <BlueLineComponent />
            <div className="Content">
                <h3 className>Yazan Tarifi</h3>
                <div className="Links">
                    <NavLink to="/" className={currentPath === '/' ? 'active' : 'Link'}>Home</NavLink>
                    <NavLink to="/projects" className={currentPath === '/projects' ? 'active' : 'Link'}>Projects</NavLink>
                    <NavLink to="/skills" className={currentPath === '/skills' ? 'active' : 'Link'}>Skills</NavLink>
                    <NavLink to="/archive" className={currentPath === '/archive' ? 'active' : 'Link'}>Archive</NavLink>
                    <NavLink to="/resume" id="rounded" className={currentPath === '/resume' ? 'active' : 'Link'}>Resume</NavLink>
                </div>
            </div>
        </div>
    );
}

export const ToolbarViewComponent = React.memo(ToolbarComponent);

