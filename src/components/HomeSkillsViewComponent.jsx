import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';
import '../styles/fragments/home_skills.scss';

export default function HomeSkillsViewComponent() {
  return (
    <ComponentLayout>
      <section className="HomeSkillsViewComponent">
        <div className="Title">
          <div className="Content">
            <h2>Skills</h2>
            <p className="Des">I Spent Most Time Building Things Using This Technologies To Know About Every Single Thing Inside Full System</p>
          </div>
        </div>
        <div className="SkillsContent">
          <div className="Item">
            <h4>Android Development</h4>
            <p>
              Build Android Apps With Java, Kotlin, Gradle DSL, Dependency Injection,
              Material Design, Jetpack Component, RxJava, Kotlin Coroutines
            </p>
          </div>
          <div className="Item">
            <h4>Web Development</h4>
            <p>
              Design Websites With React.js, React Hooks, Axios, SASS, Eslint,
              Next.js For SSR, SPA, PWA, JSX, Typescript, Javascript (ES6+),
              Mobile Responsive, Static Site Generation (Next.js)
            </p>
          </div>
          <div className="Item">
            <hr />
            <h4>Backend Development</h4>
            <p>
              Build Restful Api With Java, Javascript, PHP Using
              (SpringBoot (Java, Kotlin), Nest.js, Laravel) Based
              on Json Response, Auth, Mysql, NoSql
            </p>
          </div>
          <div className="Item">
            <hr />
            <h4>Tools Development</h4>
            <p>
              Build Gradle Plugins For Android, IDE
              Plugins, CLI&apos;s To Execute Environment Jobs Depends on
              OS With (Kotlin, Ruby, Groovy)
            </p>
          </div>
        </div>
      </section>
    </ComponentLayout>
  );
}

export const HomeSkillsViewComponentView = React.memo(HomeSkillsViewComponent);
