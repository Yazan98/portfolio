import React from 'react';
import '../styles/components/HomeSkillsStyle.scss';

export default function HomeSkillsSectionComponent() {
  return (
    <section className="HomeSkillsContainer">
      <div className="Content">
        <div className="Text">
          <div className="TextContainer">
            <h2>Skills</h2>
            <p>
              I Spent Most Time Building Things Using This
              Technologies To Know About Every Single
              Thing Inside Full System
            </p>
          </div>
        </div>
        <div className="GridSkillsContainer">
          <div className="Item">
            <h3>Android Development</h3>
            <p>
              Build Android Apps With Java, Kotlin, Gradle DSL,
              Dependency Injection, Material Design,
              Jetpack Component, RxJava, Kotlin Coroutines, Multi Modular Apps,
              MVVM, Firebase
            </p>
          </div>
          <div className="Item">
            <h3>Web Development</h3>
            <p>
              Design Websites With React.js, React Hooks,
              Axios, SASS, Eslint, Next.js For SSR, SPA,
              PWA, JSX, Typescript, Javascript (ES6+),
              Mobile Responsive, Static Site Generation (Next.js)
            </p>
          </div>
          <div className="LineDivider" />
          <div className="LineDivider" />
          <div className="Item">
            <h3>Backend Development</h3>
            <p>
              Build Restful Api With Java, Javascript, PHP Using
              (SpringBoot (Java, Kotlin), Nest.js, Laravel) Based
              on Json Response, Auth, Mysql, NoSql
            </p>
          </div>
          <div className="Item">
            <h3>Tools Development</h3>
            <p>
              Build Gradle Plugins For Android, IDE Plugins,
              CLI's To Execute Environment Jobs Depends on
              OS With (Kotlin, Ruby, Groovy)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
