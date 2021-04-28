import React from 'react';
import '../styles/fragments/fragments_style.scss';

export default function HomeServicesComponent() {
  return (
    <div className="HomeServicesComponentContainer">
      <h4 className="title">What Can I Do</h4>
      <div className="ItemsContainer">

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className="ProjectItem">
              <p>Frontend Side</p>
              <h5>Android Development</h5>
              <p className="Description">
                Firebase, Bintray, MVVM, Single Activity Apps, Jetpack Component
                , Room Database, ADB Terminal, Fragments, Custom Views, Multi
                Modular Apps, Google Play Console, Android Profiler, Leak Canary
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className="ProjectItem">
              <p>Backend Side</p>
              <h5>SpringBoot Web Apps</h5>
              <p className="Description">
                AWS Deployment, Digital Ocean, Nginx Load Balancer,
                Mysql (RDS), S3 Storage, Firebase, Socket IO Via Nest.js, Laravel,
                Spring Boot
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className="ProjectItem">
              <p>Frontend Side</p>
              <h5>Web Development</h5>
              <p className="Description">
                Eslint Code Management With Airbnb Style, Webstorm, VSCode
                , Reusable Components, React Hooks, Mixins Queries In
                SASS Styles, Material UI
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className="ProjectItem">
              <p>Configuration</p>
              <h5>Tools Development</h5>
              <p className="Description">
                Jenkins, Fastlane, ADB, Photoshop, Design Simple Animations
                In After Effects To App Splash Screen, Git, Github,
                Gitlab, Bitbucket, Linux Terminal
              </p>
            </div>
          </div>
        </div>

        <div className="ServiceItem">
          <div className="ProjectComponentContainer">
            <div className="ProjectItem">
              <p>Frontend Side</p>
              <h5>Design</h5>
              <p className="Description">
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
