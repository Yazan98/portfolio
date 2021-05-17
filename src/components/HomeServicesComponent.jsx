import React from 'react';
import '../styles/fragments/fragments_style.scss';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export default function HomeServicesComponent() {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  return (
    <div className="HomeServicesComponentContainer">
      <h4 className="title">What Can I Do</h4>
      <div className="ItemsContainer">

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className={`ProjectItem ${theme ? 'BlackBorder' : 'LightBorder'}`}>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Frontend Side</p>
              <h5 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Android Development</h5>
              <p className={`Description ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                Firebase, Bintray, MVVM, Single Activity Apps, Jetpack Component
                , Room Database, ADB Terminal, Fragments, Custom Views, Multi
                Modular Apps, Google Play Console, Android Profiler, Leak Canary
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className={`ProjectItem ${theme ? 'BlackBorder' : 'LightBorder'}`}>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Backend Side</p>
              <h5 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>SpringBoot Web Apps</h5>
              <p className={`Description ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                AWS Deployment, Digital Ocean, Nginx Load Balancer,
                Mysql (RDS), S3 Storage, Firebase, Socket IO Via Nest.js, Laravel,
                Spring Boot
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className={`ProjectItem ${theme ? 'BlackBorder' : 'LightBorder'}`}>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Frontend Side</p>
              <h5 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Web Development</h5>
              <p className={`Description ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                Eslint Code Management With Airbnb Style, Webstorm, VSCode
                , Reusable Components, React Hooks, Mixins Queries In
                SASS Styles, Material UI
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className={`ProjectItem ${theme ? 'BlackBorder' : 'LightBorder'}`}>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Configuration</p>
              <h5 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Tools Development</h5>
              <p className={`Description ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                Jenkins, Fastlane, ADB, Photoshop, Design Simple Animations
                In After Effects To App Splash Screen, Git, Github,
                Gitlab, Bitbucket, Linux Terminal
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className={`ProjectItem ${theme ? 'BlackBorder' : 'LightBorder'}`}>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Frontend Side</p>
              <h5 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Design</h5>
              <p className={`Description ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                Design Application Interface , Logos With Adobe Photoshop, After
                Effects For Simple Animation (Beginner Level), Adobe XD
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export const HomeServicesViewComponent = React.memo(HomeServicesComponent);
