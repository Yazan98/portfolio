import React from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioContainer from './layouts/PortfolioContainer';
import '../styles/fragments/drawer.scss';
import { isApplicationLightTheme, setApplicationToDarkTheme, setApplicationToLightTheme } from '../info/ThemeInfo';
import DarkDarkIcon from '../images/icons/dark_dark.svg';
import LightDarkIcon from '../images/icons/light_dark.svg';
import DarkImage from '../images/icons/dark.svg';
import LightImage from '../images/icons/light.svg';

function getLightModeIcons(theme) {
  return theme ? <img src={DarkDarkIcon} alt="Dark Theme" className="ThemeImage" /> : <img alt="White Theme" src={LightDarkIcon} className="ThemeImage" />;
}

function getDarkModeIcons(theme) {
  return theme ? <img src={DarkImage} alt="Dark Theme" className="ThemeImage" /> : <img alt="White Theme" src={LightImage} className="ThemeImage" />;
}

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
        <div
          className="ThemeIcon"
          onClick={() => {
            if (isApplicationLightTheme()) {
              setApplicationToDarkTheme();
            } else {
              setApplicationToLightTheme();
            }

            window.location.reload();
          }}
        >
          {theme ? getLightModeIcons(theme) : getDarkModeIcons(theme)}
        </div>
      </div>
    </PortfolioContainer>
  );
}

export const ToolbarDrawerViewComponent = React.memo(ToolbarDrawerComponent);
