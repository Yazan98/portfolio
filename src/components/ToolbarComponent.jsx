import React from 'react';
import '../styles/fragments/toolbar_style.scss';
import '../styles/fragments/home_header.scss';
import { NavLink } from 'react-router-dom';
import { BlueLineComponent } from './BlueLineComponent';
import LightImage from '../images/icons/light.svg';
import DarkImage from '../images/icons/dark.svg';
import LightDotsImage from '../images/icons/white_dots.svg';
import { isApplicationLightTheme, setApplicationToDarkTheme, setApplicationToLightTheme } from '../info/ThemeInfo';

export default function ToolbarComponent({ isNormalPage = true }) {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  return (
    <div className={`Toolbar_Container ${isNormalPage ? 'NormalView' : ''}`}>
      <BlueLineComponent />
      <div className="Content">
        <h3 className>Yazan Tarifi</h3>
        <div className="Links">
          <NavLink to="/" className={`Link ${isNormalPage ? (theme ? 'TextTitleBlack' : 'TextTitleLight') : 'TextTitleLight'}`}>Home</NavLink>
          <NavLink to="/projects" className={`Link ${isNormalPage ? (theme ? 'TextTitleBlack' : 'TextTitleLight') : 'TextTitleLight'}`}>Projects</NavLink>
          <NavLink to="/skills" className={`Link ${isNormalPage ? (theme ? 'TextTitleBlack' : 'TextTitleLight') : 'TextTitleLight'}`}>Skills</NavLink>
          <NavLink to="/archive" className={`Link ${isNormalPage ? (theme ? 'TextTitleBlack' : 'TextTitleLight') : 'TextTitleLight'}`}>Archive</NavLink>
          <NavLink to="/resume" className={`Link ${isNormalPage ? (theme ? 'TextTitleBlack' : 'TextTitleLight') : 'TextTitleLight'}`}>Resume</NavLink>
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
            {theme ? <img src={DarkImage} alt="Dark Theme" className="ThemeImage" /> : <img alt="White Theme" src={LightImage} className="ThemeImage" /> }
          </div>
        </div>
        <img src={LightDotsImage} alt="Mobile Options" className="ThemeImage MobileOptions" />
      </div>
    </div>
  );
}

export const ToolbarViewComponent = React.memo(ToolbarComponent);
