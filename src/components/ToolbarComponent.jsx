import React from 'react';
import '../styles/fragments/toolbar_style.scss';
import '../styles/fragments/home_header.scss';
import { NavLink } from 'react-router-dom';
import { BlueLineComponent } from './BlueLineComponent';

export default function ToolbarComponent() {
  return (
    <div className="Toolbar_Container">
      <BlueLineComponent />
      <div className="Content">
        <h3 className>Yazan Tarifi</h3>
        <div className="Links">
          <NavLink to="/" className="Link">Home</NavLink>
          <NavLink to="/projects" className="Link">Projects</NavLink>
          <NavLink to="/skills" className="Link">Skills</NavLink>
          <NavLink to="/archive" className="Link">Archive</NavLink>
          <NavLink to="/resume" id="rounded" className="Link">Resume</NavLink>
          <NavLink to="" id="filled-rounded" className="rounded">Dark Mode</NavLink>
        </div>
      </div>
    </div>
  );
}

export const ToolbarViewComponent = React.memo(ToolbarComponent);
