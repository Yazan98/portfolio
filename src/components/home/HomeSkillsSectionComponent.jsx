import React from 'react';
import '../styles/components/HomeSkillsStyle.scss';
import { Grid } from '@material-ui/core';

export default function HomeSkillsSectionComponent() {
  return (
    <section className="HomeSkillsContainer">
      <Grid className="Content" rowSpacing={1} columns={{ xs: 6, sm: 8, md: 12 }} container>
        <Grid item xs={6} columns={{ xs: 6, sm: 12, md: 12 }} className="Text">
          <div className="TextContainer">
            <h2>Skills</h2>
            <p>
              I Spent Most Time Building Things Using This
              Technologies To Know About Every Single
              Thing Inside Full System
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          justify="center"
          className="GridSkillsContainer"
          columns={{ xs: 6, sm: 12, md: 12 }}
        >
          <Grid item xs={6} className="Item">
            <h3>Android Development</h3>
            <p>
              Build Android Apps With Java, Kotlin, Gradle DSL,
              Dependency Injection, Material Design,
              Jetpack Component, RxJava, Kotlin Coroutines, Multi Modular Apps,
              MVVM, Firebase
            </p>
            <br />
            <hr />
          </Grid>
          <Grid item xs={6} className="Item">
            <h3>Web Development</h3>
            <p>
              Design Websites With React.js, React Hooks,
              Axios, SASS, Eslint, Next.js For SSR, SPA,
              PWA, JSX, Typescript, Javascript (ES6+),
              Mobile Responsive, Static Site Generation (Next.js)
            </p>
            <br />
            <hr />
          </Grid>
          <Grid item xs={6} className="Item">
            <h3>Backend Development</h3>
            <p>
              Build Restful Api With Java, Javascript, PHP Using
              (SpringBoot (Java, Kotlin), Nest.js, Laravel) Based
              on Json Response, Auth, Mysql, NoSql
            </p>
          </Grid>
          <Grid item xs={6} className="Item">
            <h3>Tools Development</h3>
            <p>
              Build Gradle Plugins For Android, IDE Plugins,
              CLI's To Execute Environment Jobs Depends on
              OS With (Kotlin, Ruby, Groovy)
            </p>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
