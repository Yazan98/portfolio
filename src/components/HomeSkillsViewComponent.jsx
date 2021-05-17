import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';
import '../styles/fragments/home_skills.scss';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export default function HomeSkillsViewComponent() {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  return (
    <ComponentLayout>
      <section className="HomeSkillsViewComponent">
        <div className="Title">
          <div className="Content">
            <h2 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Skills</h2>
            <p className={`Des ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>I Spent Most Time Building Things Using This Technologies To Know About Every Single Thing Inside Full System</p>
          </div>
        </div>
        <div className="SkillsContent">
          <div className="Item">
            <h4 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Android Development</h4>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              Build Android Apps With Java, Kotlin, Gradle DSL, Dependency Injection,
              Material Design, Jetpack Component, RxJava, Kotlin Coroutines
            </p>
          </div>
          <div className="Item">
            <h4 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Web Development</h4>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              Design Websites With React.js, React Hooks, Axios, SASS, Eslint,
              Next.js For SSR, SPA, PWA, JSX, Typescript, Javascript (ES6+),
              Mobile Responsive, Static Site Generation (Next.js)
            </p>
          </div>
          <div className="Item">
            <hr />
            <h4 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Backend Development</h4>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              Build Restful Api With Java, Javascript, PHP Using
              (SpringBoot (Java, Kotlin), Nest.js, Laravel) Based
              on Json Response, Auth, Mysql, NoSql
            </p>
          </div>
          <div className="Item">
            <hr />
            <h4 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Tools Development</h4>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
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
