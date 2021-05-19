import React from 'react';
import '../styles/fragments/toolbar_style.scss';
import '../styles/fragments/home_header.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { BlueLineComponent } from './BlueLineComponent';
import LightImage from '../images/icons/light.svg';
import LightDarkIcon from '../images/icons/light_dark.svg';
import DarkDarkIcon from '../images/icons/dark_dark.svg';
import DarkImage from '../images/icons/dark.svg';
import LightDotsImage from '../images/icons/white_dots.svg';
import DotsImage from '../images/icons/dots.svg';
import { isApplicationLightTheme, setApplicationToDarkTheme, setApplicationToLightTheme } from '../info/ThemeInfo';

function getLightModeIcons(theme) {
  return theme ? <img src={DarkDarkIcon} alt="Dark Theme" className="ThemeImage" /> : <img alt="White Theme" src={LightDarkIcon} className="ThemeImage" />;
}

function getDarkModeIcons(theme) {
  return theme ? <img src={DarkImage} alt="Dark Theme" className="ThemeImage" /> : <img alt="White Theme" src={LightImage} className="ThemeImage" />;
}

export default function ToolbarComponent({ isNormalPage = true }) {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  const history = useHistory();

  const showPopupWindow = () => {
    history.push('/drawer');
  };

  return (
    <div className={`Toolbar_Container ${isNormalPage ? 'NormalView' : ''}`}>
      <BlueLineComponent />
      <div className="Content">
        <NavLink to="/" className="h3">Yazan Tarifi</NavLink>
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
            { isNormalPage ? (theme ? getLightModeIcons(theme) : getDarkModeIcons(theme)) : getDarkModeIcons(theme) }
          </div>
        </div>
        <div className="DotsContainer" onClick={() => showPopupWindow()}>
          {isNormalPage ? <img src={theme ? DotsImage : LightDotsImage} alt="Mobile Options" className="ThemeImage MobileOptions" /> : <img src={LightDotsImage} alt="Mobile Options" className="ThemeImage MobileOptions" />}
        </div>
      </div>
    </div>
  );
}

export const ToolbarViewComponent = React.memo(ToolbarComponent);
