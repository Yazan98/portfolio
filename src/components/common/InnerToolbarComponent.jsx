import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/ToolbarStyle.scss';

export default function InnerToolbarComponent() {
  return (
    <nav className="InnerToolbarComponentContainer">
      <div className="Logo">
        <NavLink className="Title" to="/">Yazan Tarifi</NavLink>
      </div>
      <div className="Links">
        <NavLink to="/" className="NavItem" id="activated">Home</NavLink>
        <NavLink to="/projects" className="NavItem" id="activated">Projects</NavLink>
        <NavLink to="/skills" className="NavItem" id="activated">Skills</NavLink>
        <NavLink to="/archive" className="NavItem" id="activated">Archive</NavLink>
        <NavLink to="/about" className="NavItem" id="activated">About</NavLink>
        <NavLink to="/resume" className="NavItem" id="activated">Resume</NavLink>
      </div>
    </nav>
  );
}
