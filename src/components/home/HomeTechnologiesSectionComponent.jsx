import React from 'react';
import '../styles/components/HomeTechnologiesStyle.scss';
import { Grid } from '@material-ui/core';

export default function HomeTechnologiesSectionComponent() {
  return (
    <section className="HomeTechnologiesSectionComponent">
      <h3>What Can I Do</h3>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        justify="flex-start"
        spacing={2}
        xs={12}
        className="Items"
        style={{ maxWidth: '70vw' }}
      >
        <Grid item xs={3} className="Item">
          <p>Frontend Side</p>
          <h4>Android Development</h4>
          <p className="Description">
            Firebase, Bintray, MVVM, Single Activity Apps,
            Jetpack Component , Room Database, ADB
            Terminal, Fragments, Custom Views, Multi Modular
            Apps, Google Play Console, Android Profiler, Leak Canary, Maven Central
          </p>
        </Grid>
        <Grid item xs={3} className="Item">
          <p>Backend Side</p>
          <h4>Web Apps</h4>
          <p className="Description">
            AWS Deployment, Digital Ocean, Nginx Load Balancer,
            Mysql (RDS), S3 Storage, Firebase, Socket IO Via
            Nest.js, Laravel, Spring Boot
          </p>
        </Grid>
        <Grid item xs={3} className="Item">
          <p>Frontend Side</p>
          <h4>Web Development</h4>
          <p className="Description">
            Eslint Code Management With Airbnb Style,
            Webstorm, VSCode , Reusable Components,
            React Hooks, Mixins Queries In SASS Styles, Material UI
          </p>
        </Grid>
        <Grid item xs={3} className="Item">
          <p>Configuration</p>
          <h4>Tools Development</h4>
          <p className="Description">
            Jenkins, Fastlane, ADB, Photoshop, Design Simple
            Animations In After Effects To App Splash Screen,
            Git, Github, Gitlab, Bitbucket, Linux Terminal
          </p>
        </Grid>
        <Grid item xs={3} className="Item">
          <p>Frontend Side</p>
          <h4>Design</h4>
          <p className="Description">
            Design Application Interface , Logos With Adobe
            Photoshop, After Effects For Simple Animation
            (Beginner Level), Adobe XD
          </p>
        </Grid>
        <Grid item xs={3} className="Item">
          <p>Configuration</p>
          <h4>Plugins Development</h4>
          <p className="Description">
            Build Gradle Plugins for Android Applications, Build
            IntelliJ Plugins to Communicate With Android Devices
            Via ADB
          </p>
        </Grid>
      </Grid>
    </section>
  );
}
