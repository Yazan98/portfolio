import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../info/ColorUtils';

export default function InnerToolbarComponent({ isTitleWhite }) {
  return (
      <nav className={"flex justify-between items-center h-16 text-white relative font-mono"} role={"navigation"}>
        <NavLink style={{ fontSize: "large", color: isTitleWhite ? "white": PRIMARY_COLOR }} to={"/"} className={"pl-8"}>Yazan Tarifi</NavLink>
        <div className={"px-4 cursor-pointer md:hidden"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className={"pr-4 md:block hidden"}>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/">Home</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/projects" ? PRIMARY_COLOR : ""}} className={"p-2"} to="/projects">Projects</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/skills" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/skills">Skills</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/about" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/about">About</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/archive" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/archive">Archive</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/resume" ? PRIMARY_COLOR : "" }} className={"p-2"} to="/resume">Resume</NavLink>
        </div>
      </nav>
  );
}
