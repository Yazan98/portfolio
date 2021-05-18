import React from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioContainer from './layouts/PortfolioContainer';
import '../styles/fragments/drawer.scss';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export function ToolbarDrawerComponent() {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  return (
    <PortfolioContainer className="ToolbarDrawerComponent">
      <div className="Content">
        <NavLink to="/" className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Home</NavLink>
        <NavLink to="/projects" className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Projects</NavLink>
        <NavLink to="/skills" className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Skills</NavLink>
        <NavLink to="/archive" className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Archive</NavLink>
        <NavLink to="/resume" className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Resume</NavLink>
      </div>
    </PortfolioContainer>
  );
}

export const ToolbarDrawerViewComponent = React.memo(ToolbarDrawerComponent);
