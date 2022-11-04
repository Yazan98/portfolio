import React, {useEffect} from 'react';
import {PRIMARY_COLOR} from "../info/ColorUtils";
import {NavLink, useHistory} from "react-router-dom";
import ReactGA from "react-ga";

export default function MobilePagesNavigationComponent() {
    const history = useHistory();
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <div style={{ background: PRIMARY_COLOR }} className={"h-screen p-5"}>
            <div className={"top-0 right-0 static text-white cursor-pointer mr-0"} onClick={() => {
                ReactGA.event({
                    category: "MobileNav",
                    action: "Back Button",
                    label: "Back Button - MobileNav"
                })
                history.goBack()
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className={"flex flex-col justify-center items-center"} style={{ height: "70vh" }}>
                <div className={"flex flex-col justify-center items-center"}>
                    <NavLink style={{ color: "white"}} className={"p-2"} to="/" onClick={() => {
                        ReactGA.event({
                            category: "MobileNav",
                            action: "Home Button",
                            label: "Home Button - MobileNav"
                        })
                    }}>Home</NavLink>
                    <NavLink style={{ color: "white"}} className={"p-2"} to="/projects" onClick={() => {
                        ReactGA.event({
                            category: "MobileNav",
                            action: "Projects Button",
                            label: "Projects Button - MobileNav"
                        })
                    }}>Projects</NavLink>
                    <NavLink style={{ color: "white"}} className={"p-2"} to="/skills" onClick={() => {
                        ReactGA.event({
                            category: "MobileNav",
                            action: "Skills Button",
                            label: "Skills Button - MobileNav"
                        })
                    }}>Skills</NavLink>
                    <NavLink style={{ color: "white"}} className={"p-2"} to="/archive" onClick={() => {
                        ReactGA.event({
                            category: "MobileNav",
                            action: "Archive Button",
                            label: "Archive Button - MobileNav"
                        })
                    }}>Archive</NavLink>
                </div>
            </div>
            <div className={"absolute inset-x-0 bottom-0 h-16"}>
                <div className={"flex flex-col justify-center items-center text-white bottom-0 right-0 relative"}>
                    <h3>Yazan Tarifi - Personal Website</h3>
                    <p>Version 3.0.1</p>
                </div>
            </div>
        </div>
    );
}