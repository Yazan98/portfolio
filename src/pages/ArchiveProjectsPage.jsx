import React from 'react';
import { BlueLineComponent } from '../components/BlueLineComponent';
import ToolbarComponent from '../components/ToolbarComponent';
import '../styles/fragments/archive.scss';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export default function ArchiveProjectsPage() {
  window.scrollTo(0, 0);
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  return (
    <PersonalPagesViewComponent title="Archive Page - Portfolio">
      <div className="ArchiveProjectsPage">
        <BlueLineComponent />
        <ToolbarComponent />

        <main>
          <div className="Content">
            <h3 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Archive</h3>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>A big list of things I’ve worked on</p>

            <table>
              <tr>
                <th className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Year</th>
                <th className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Title</th>
                <th className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Made at</th>
                <th className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Built with</th>
                <th className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Type</th>
              </tr>
              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2020</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Opensooq</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Opoensooq Company</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>ـــــ</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2020</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Portfolio</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React.js, React Hooks, Github Pages, Javascript ES6+, SCSS, PWA</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2020</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Netflix Clone</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React.js, React Hooks, Github Pages, Typescript, Stateful Components, Axios, Firebase Hosting</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2020</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Denamo Theme</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>VSCode, typescript Themes, Json Configuration</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Mwarrid</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>NoventApp Company</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>ـــــ</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Vortex</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Mvvm, Redux, Multi Modular Apps, Gradle, DI, BaseCode, Bintray</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Groupy</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Mvp, Firebase, Kotlin, Kotlin Coroutines</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Exposer</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Kotlin Multi Platform, Kotlin Coroutines, RxJava</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Actor</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Spring Boot, Postman, Kotlin, Controllers</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Destiny</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Spring Boot, Kotlin, Restful Api, Kotlin Coroutines, Mvvm, Android Multi Modular App</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Thentrom</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Intellij Theme, Json Configuration</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Autohub</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Kotlin, Mvvm, RxJava, Dependency Injection, Multi Modular App, Vortex, Github Api V3</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Wintrop</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Kotlin, Mvvm, RxJava, Dependency Injection, Multi Modular App, Vortex</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Open Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Drasati</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Kotlin, Mvp, Atto, Firebase</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Atto (Archived)</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Mvp, BaseCode, Bintray</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2019</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Portfolio V1</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Github</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>html, Css</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2018</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Diretto</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>NoventApp Company</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>ـــــ</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2017</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Estra7at</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>ـــــ</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Mvp, Java, Firebase, Spring Boot Api</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

              <tr>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2017</td>
                <td className={`Title ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Zunbarak</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Zunbarak Company</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>ـــــ</td>
                <td className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Closed Source</td>
              </tr>

            </table>
          </div>
        </main>
      </div>
    </PersonalPagesViewComponent>
  );
}

export const ArchiveProjectsView = React.memo(ArchiveProjectsPage);
