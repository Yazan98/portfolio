import React from 'react';
import { NavLink } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../info/ColorUtils';
import { useLocation, useHistory } from 'react-router-dom'
import ReactGA from "react-ga";

export default function ToolbarComponent() {
  const location = useLocation();
  const history = useHistory()
  return (
    <nav className={"flex justify-between items-center h-16 bg-white text-black relative shadow-md font-mono"} role={"navigation"}>
      <NavLink style={{ fontSize: "large", color: PRIMARY_COLOR }} to={"/"} className={"pl-8"} onClick={() => {
          ReactGA.event({
              category: "Toolbar",
              action: "Website Name",
              label: "Website Name - ToolbarComponent"
          })
      }}>Yazan Tarifi</NavLink>
        <div className={"px-4 cursor-pointer md:hidden"} onClick={() => {
            history.push("/nav")
            ReactGA.event({
                category: "Toolbar",
                action: "Mobile View Nav",
                label: "Mobile View Nav - ToolbarComponent"
            })
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
      <div className={"pr-4 md:block hidden"}>
        <NavLink style={{ color: location.pathname === "/" ? PRIMARY_COLOR : "" }} className={"p-2"} onClick={() => {
            ReactGA.event({
                category: "Toolbar",
                action: "Home Button",
                label: "Home Button - ToolbarComponent"
            })
        }} to="/">Home</NavLink>
        <NavLink style={{ color: location.pathname === "/projects" ? PRIMARY_COLOR : ""}} className={"p-2"} onClick={() => {
            ReactGA.event({
                category: "Toolbar",
                action: "Projects Button",
                label: "Projects Button - ToolbarComponent"
            })
        }} to="/projects">Projects</NavLink>
        <NavLink style={{ color: location.pathname === "/skills" ? PRIMARY_COLOR : "" }} className={"p-2"} onClick={() => {
            ReactGA.event({
                category: "Toolbar",
                action: "Skills Button",
                label: "Skills Button - ToolbarComponent"
            })
        }} to="/skills">Skills</NavLink>
        <NavLink style={{ color: location.pathname === "/archive" ? PRIMARY_COLOR : "" }} className={"p-2"} onClick={() => {
            ReactGA.event({
                category: "Toolbar",
                action: "Archive Button",
                label: "Archive Button - ToolbarComponent"
            })
        }} to="/archive">Archive</NavLink>
          <NavLink style={{ color: "black" }} className={"p-2"} onClick={() => {
              ReactGA.event({
                  category: "Toolbar",
                  action: "Articles Button",
                  label: "Articles Button - InnerToolbarComponent"
              })
              window.open("https://medium.com/@yazantarifi98", '_blank', 'noopener,noreferrer');
          }} to={""}>Articles</NavLink>
      </div>
    </nav>
  );
}
