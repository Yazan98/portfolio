import React from 'react';
import '../styles/fragments/home_header.scss';
import ComponentLayout from './layouts/ComponentLayout';
import { ToolbarViewComponent } from './ToolbarComponent';
import { getProfileInfo } from '../info/ProfileInformation';
import HeaderImage from '../images/header.png';
import GithubImage from '../images/github.svg';
import LinkedInImage from '../images/github2.webp';
import BehanceImage from '../images/github3.webp';
import StackoverflowImage from '../images/github1.webp';

export default function HomeHeaderComponent() {
  const onLinkClicked = (name) => {
    switch (name) {
      case 'Github':
        window.open('https://github.com/Yazan98');
        break;
      case 'Stackoverflow':
        window.open('https://stackoverflow.com/users/12858222/yt98');
        break;
      case 'Behance':
        window.open('https://www.behance.net/yazantarifi98?isa0=1');
        break;
      case 'Linkedin':
        window.open('https://www.linkedin.com/in/yazan-tarifi-106282192/');
        break;
    }
  };

  return (
    <ComponentLayout>
      <header className="PageHeaderComponent">
        <ToolbarViewComponent isNormalPage={false} />
        <div className="HomeHeaderContainer">
          <div className="HeaderLinks">
            <div className="Content">
              <img alt="Yazan Tarifi - Stackoverflow Profile" src={StackoverflowImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Stackoverflow')} />
              <img alt="Yazan Tarifi - LinkedIn Profile" src={LinkedInImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Linkedin')} />
              <img alt="Yazan Tarifi - Behance Profile" src={BehanceImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Behance')} />
              <img alt="Yazan Tarifi - Github Profile" src={GithubImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Github')} />
              <div className="LineContainer">
                <hr width="1" size="100" />
              </div>
            </div>
          </div>
          <div className="Description">
            <div className="Content">
              <p className="SubTitle">Software Engineer</p>
              <label>{getProfileInfo().Name}</label>

              <div className="BigArea">
                <p className="Tags">
                  <div id="Item" className="Circle" />
                  <span id="Item">Android Apps</span>
                  <div id="Item" className="Circle" />
                  <span id="Item">Restful Api</span>
                  <div id="Item" className="Circle" />
                  <span id="Item">Websites</span>
                </p>
                <p className="DescriptionText">{getProfileInfo().Description}</p>
              </div>

              <p className="TechTitle">Few technologies I&apos;ve been working with</p>
              <div className="Technologies">
                <ul className="Technologies">
                  <li>Android - Kotlin</li>
                  <li>React, Next.js</li>
                  <li>Spring Boot</li>
                  <li>Laravel</li>
                  <li>Node.js (Nest)</li>
                  <li>Terminal Tools (Ruby)</li>
                </ul>
              </div>

              <div className="Buttons">
                <a className="HeaderButton" href="https://www.github.com/Yazan98">Github</a>
              </div>
            </div>
          </div>
          <div className="Image">
            <img loading="lazy" src={HeaderImage} alt="Header" width="711.2px" height="468.3px" />
          </div>
        </div>

      </header>
    </ComponentLayout>
  );
}

export const HomeHeaderViewComponent = React.memo(HomeHeaderComponent);
