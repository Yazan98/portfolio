import React from 'react';
import '../styles/components/HomeTechnologiesStyle.scss';

export default function HomeTechnologiesSectionComponent() {
  return (
    <section className="HomeTechnologiesSectionComponent">
      <h3>What Can I Do</h3>
      <div className="Items">
        <div className="Item">
          <p>Frontend Side</p>
          <h4>Android Development</h4>
          <p className="Description">
            Firebase, Bintray, MVVM, Single Activity Apps,
            Jetpack Component , Room Database, ADB
            Terminal, Fragments, Custom Views, Multi Modular
            Apps, Google Play Console, Android Profiler, Leak Canary, Maven Central
          </p>
        </div>
        <div className="Item">
          <p>Backend Side</p>
          <h4>Web Apps</h4>
          <p className="Description">
            AWS Deployment, Digital Ocean, Nginx Load Balancer,
            Mysql (RDS), S3 Storage, Firebase, Socket IO Via
            Nest.js, Laravel, Spring Boot
          </p>
        </div>
        <div className="Item">
          <p>Frontend Side</p>
          <h4>Web Development</h4>
          <p className="Description">
            Eslint Code Management With Airbnb Style,
            Webstorm, VSCode , Reusable Components,
            React Hooks, Mixins Queries In SASS Styles, Material UI
          </p>
        </div>
        <div className="Item">
          <p>Configuration</p>
          <h4>Tools Development</h4>
          <p className="Description">
            Jenkins, Fastlane, ADB, Photoshop, Design Simple
            Animations In After Effects To App Splash Screen,
            Git, Github, Gitlab, Bitbucket, Linux Terminal
          </p>
        </div>
        <div className="Item">
          <p>Frontend Side</p>
          <h4>Design</h4>
          <p className="Description">
            Design Application Interface , Logos With Adobe
            Photoshop, After Effects For Simple Animation
            (Beginner Level), Adobe XD
          </p>
        </div>
        <div className="Item">
          <p>Configuration</p>
          <h4>Plugins Development</h4>
          <p className="Description">
            Build Gradle Plugins for Android Applications, Build
            IntelliJ Plugins to Communicate With Android Devices
            Via ADB
          </p>
        </div>
      </div>
    </section>
  );
}
