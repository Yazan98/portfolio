import React, {Component} from 'react';
import '../styles/fragments/toolbar_style.scss';
import CloseIcon from '@material-ui/icons/Close';
import {NavLink} from "react-router-dom";
import PwaLogo from "../images/pwalogo.svg";

class ToolbarDrawerComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"DrawerContainer"}>
               <div className={"DrawerContent"}>
                   <div className={"CloseContainer"} onClick={this.props.handleClick} >
                       <CloseIcon className={"CloseButton"} />
                   </div>
                   <div className={"PwaButton"}>
                       <img alt={"Pwa Logo"} src={PwaLogo} />
                   </div>
                   <div className={"ButtonsContainer"}>
                       <div className={"Items"}>
                           <NavLink className={"ToolbarLink"} to={"/"}>Home</NavLink>
                           <NavLink className={"ToolbarLink"} to={"/projects"}>Projects</NavLink>
                           <NavLink className={"ToolbarLink"} to={"/about"}>About</NavLink>
                           <NavLink className={"ToolbarLink"} to={"/skills"}>Skills</NavLink>
                           <NavLink className={"ToolbarLink"} to={"/archive"}>Archive</NavLink>
                       </div>
                   </div>

                   <p>Version 1.2 - PWA</p>
               </div>
            </div>
        );
    }
}

export default ToolbarDrawerComponent;