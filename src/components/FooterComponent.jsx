import React from 'react';
import '../styles/fragments/footer_style.scss';
import { BlueLineComponent } from './BlueLineComponent';
import ComponentLayout from './layouts/ComponentLayout';
import StackoverflowImage from '../images/github1.webp';
import LinkedInImage from '../images/github2.webp';
import BehanceImage from '../images/github3.webp';
import GithubImage from '../images/github.svg';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export default function FooterComponent() {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
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
      <footer>
        <p className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>
          Designed & Built By
          <strong> Yazan Tarifi</strong>
        </p>
        <p className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Personal Website (CV , Portfolio) Created At 2021</p>
        <p className={theme ? 'TextTitleBlack' : 'TextTitleLight'} style={{ fontSize: 'x-small', marginTop: '1em' }}>Version 2.0</p>

        <div className="Links">
          <img alt="Yazan Tarifi - Stackoverflow Profile" src={StackoverflowImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Stackoverflow')} />
          <img alt="Yazan Tarifi - LinkedIn Profile" src={LinkedInImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Linkedin')} />
          <img alt="Yazan Tarifi - Behance Profile" src={BehanceImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Behance')} />
          <img alt="Yazan Tarifi - Github Profile" src={GithubImage} width="25px" height="25px" loading="lazy" onClick={() => onLinkClicked('Github')} />
        </div>
      </footer>
      <BlueLineComponent />
    </ComponentLayout>
  );
}

export const FooterViewComponent = React.memo(FooterComponent);
