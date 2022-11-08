import React from 'react';
import { NavLink } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../info/ColorUtils';
import { useHistory } from 'react-router-dom'
import ReactGA from "react-ga";

export default function InnerToolbarComponent({ isTitleWhite }) {
    const history = useHistory()
    return (
      <nav className={"flex justify-between items-center h-16 text-white relative font-mono"} role={"navigation"}>
        <NavLink style={{ fontSize: "large", color: "white" }} to={"/"} className={"pl-8"} onClick={() => {
            ReactGA.event({
                category: "Toolbar",
                action: "Website Name",
                label: "Website Name - InnerToolbarComponent"
            })
        }}>Yazan Tarifi</NavLink>
        <div className={"px-4 cursor-pointer md:hidden"} onClick={() => {
            ReactGA.event({
                category: "Toolbar",
                action: "Mobile Nav View",
                label: "Mobile Nav View - InnerToolbarComponent"
            })

            history.push("nav")
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className={"pr-4 md:block hidden"}>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/" ? PRIMARY_COLOR : "" }} className={"p-2"} onClick={() => {
              ReactGA.event({
                  category: "Toolbar",
                  action: "Home Button",
                  label: "Home Button - InnerToolbarComponent"
              })
          }} to="/">Home</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/projects" ? PRIMARY_COLOR : ""}} className={"p-2"} onClick={() => {
              ReactGA.event({
                  category: "Toolbar",
                  action: "Projects Button",
                  label: "Projects Button - InnerToolbarComponent"
              })
          }} to="/projects">Projects</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/skills" ? PRIMARY_COLOR : "" }} className={"p-2"} onClick={() => {
              ReactGA.event({
                  category: "Toolbar",
                  action: "Skills Button",
                  label: "Skills Button - InnerToolbarComponent"
              })
          }} to="/skills">Skills</NavLink>
          <NavLink style={{ color: isTitleWhite ? "white": location.pathname === "/archive" ? PRIMARY_COLOR : "" }} className={"p-2"} onClick={() => {
              ReactGA.event({
                  category: "Toolbar",
                  action: "Archive Button",
                  label: "Archive Button - InnerToolbarComponent"
              })
          }} to="/archive">Archive</NavLink>
            <NavLink style={{ color: "white" }} className={"p-2"} onClick={() => {
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
