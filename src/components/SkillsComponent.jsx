import React from 'react';
import { PersonalPagesViewComponent } from './layouts/PersonalPagesComponent';
import '../styles/pages/skills.scss';
import { ToolbarViewComponent } from './ToolbarComponent';

export default function SkillsComponent() {
  return (
    <PersonalPagesViewComponent className="SkillsContainer" title="Yazan Tarifi - Portfolio - Skills">
      <ToolbarViewComponent />
      <div className="SkillsContainer">
        <div className="SkillsPageContainer">
          <h2>Skills</h2>
          <p>
            Languages, Frameworks Im Working on
          </p>

          <ul className="Components">
            <div className="Item">
              <div className="Content">
                <img alt="Kotlin" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/kotlin.webp" loading="eager" width="50px" height="50px" />
                <h3>Kotlin Language</h3>
              </div>

              <div className="Description">
                <p>
                  Build Kotlin Projects With Android Studio To Build Android Apps, Libraries
                  or Kotlin Multi Platform and Gradle Plugins With Kotlin Also
                  This is My Favourite Language Because as a Android
                  Developer This is The Main Language im Working On
                </p>
              </div>

              <div className="Tags">
                <p>Android</p>
                <p>Ktor Framework</p>
                <p>Spring Boot</p>
                <p>Gradle Plugins</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Javascript" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/js.webp" loading="eager" width="50px" height="50px" />
                <h3>Javascript Language</h3>
              </div>

              <div className="Description">
                <p>
                  JavaScript Used To Create Websites Built on React.js, Next.js Also Most Of Javascript Files
                  Written With Jsx (ECMA +6) And The Backend Side With Express.js To Build Restful Api
                </p>
              </div>

              <div className="Tags">
                <p>React.js</p>
                <p>Next.js</p>
                <p>Express.js</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Java" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/java.webp" loading="eager" width="50px" height="50px" />
                <h3>Java Language</h3>
              </div>

              <div className="Description">
                <p>
                  Java Language is My First Language i Learnt To Build Api Via Spring Boot
                  and Learn Object Oriented Programming and Design Patterns While
                  Building Applications also To Build Android Apps With Java Language
                </p>
              </div>

              <div className="Tags">
                <p>Android</p>
                <p>Spring Boot</p>
                <p>Jar Files</p>
                <p>War Files</p>
                <p>Tomcat</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Ruby" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/ruby.webp" loading="eager" width="50px" height="50px" />
                <h3>Ruby Language</h3>
              </div>

              <div className="Description">
                <p>
                  Ruby Language is The Main Language i Use When i Need to Build Command Line Interface
                  To Do Some Tasks That Need Third Party Api Communications And Multi Threading Task
                  also Build Fastlane Plugins Mainly For Android
                </p>
              </div>

              <div className="Tags">
                <p>CLI</p>
                <p>Fastlane</p>
                <p>Build Gems</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Typescript" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/ts.webp" loading="eager" width="50px" height="50px" />
                <h3>Typescript Language</h3>
              </div>

              <div className="Description">
                <p>
                  Typescript Used When i Want To Work on Node Projects With OOP and More Like
                  Java Applications I Make Because Ts has a lot Of Common Keywords like Java
                  and The Main Framework im Working On is Nest.js With Typescript
                  To Build Socket.io Implementation and Mongo Database Storage
                </p>
              </div>

              <div className="Tags">
                <p>Mongo</p>
                <p>Socket.io</p>
                <p>Nest.js</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="PHP" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/pgp.webp" loading="eager" width="50px" height="50px" />
                <h3>PHP Language</h3>
              </div>

              <div className="Description">
                <p>
                  Beginner Level In PHP and Laravel Mainly Im Currently Learning PHP To Build
                  Restful Api's on Laravel With Mysql, Swagger, Auth, Return Html, Css Views From Api
                  With Different Response Types
                </p>
              </div>

              <div className="Tags">
                <p>Laravel</p>
                <p>Mysql</p>
                <p>Auth</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Gradle" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/gradle.webp" loading="eager" width="50px" height="50px" />
                <h3>Gradle</h3>
              </div>

              <div className="Description">
                <p>
                  Im Using Grovvy, Kotlin To Build Gradle Plugins To Configure Android
                  projects or Spring Boot Projects Also Deploy Plugins On
                  Gradle Portal Mainly The Plugins For Configuring Dynamic Tasks Or Libraries
                </p>
              </div>

              <div className="Tags">
                <p>Gradle Portal</p>
                <p>Groovy</p>
                <p>Dependencies Plugins</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Git" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/git.webp" loading="eager" width="50px" height="50px" />
                <h3>Version Control</h3>
              </div>

              <div className="Description">
                <p>
                  Git is My Favourite Tool Im Using Git Everyday To Manage My Projects Via
                  Github, Bitbucket, Gitlab and Configure Local Git Hooks To Manage
                  Development Phase With Specific Actions, Tasks Via Git Hooks
                  and Configure CI With Git Hooks Also Im Using Git To
                  Create Branches, Commits, Releases and Publish Projects On Github
                </p>
              </div>

              <div className="Tags">
                <p>Github</p>
                <p>Gitlab</p>
                <p>Git Hooks</p>
                <p>Source Tree</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="React.js" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/react.webp" loading="eager" width="50px" height="50px" />
                <h3>React.js</h3>
              </div>

              <div className="Description">
                <p>
                  Im Using React.js To Build Websites Mainly Depends on SPA, PWA
                  And The Websites Has Ability To Install On Mobile Device as Android Application
                  and Caching, Offline Experience Via Service Worker and Save Values in Cookies,
                  With Full User Interactive Interface Via React Hooks
                </p>
              </div>

              <div className="Tags">
                <p>React.js</p>
                <p>React Hooks</p>
                <p>Responsive Design</p>
                <p>PWA</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Next.js" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/next.webp" loading="eager" width="50px" height="50px" />
                <h3>Next.js</h3>
              </div>

              <div className="Description">
                <p>
                  Im Using Next.js To Build Websites Above React Library To Perform
                  SEO, SSR, SSG Like My Portfolio This Website Built
                  To Be Server Side Rendering Also Next is Better Choice
                  To Build Static Websites Like CV or Portfolio
                </p>
              </div>

              <div className="Tags">
                <p>Next.js</p>
                <p>React.js</p>
                <p>React Hooks</p>
                <p>SASS</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Spring Boot" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/spring.webp" loading="eager" width="50px" height="50px" />
                <h3>Spring Boot</h3>
              </div>

              <div className="Description">
                <p>
                  When I Need To Build Backend Restful Api The First Framework i Use Is Spring Boot
                  With Kotlin or Java as a Main Language of The Current Project
                  Also Im Using Mysql, NoSql, Spring Hibernate, JPA Data, Autowired Injection
                  To Inject Everything and Spring Security With Bearer Tokens and Firebase Admin SDK
                </p>
              </div>

              <div className="Tags">
                <p>Spring Boot</p>
                <p>Spring Starter</p>
                <p>Firebase Admin</p>
                <p>JPA, Hibernate</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Nest.js" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/nest.webp" loading="eager" width="50px" height="50px" />
                <h3>Nest.js</h3>
              </div>

              <div className="Description">
                <p>
                  Nest.js Is The Main Framework I Use To Build Api In Typescript Language
                  and Im Using This Framework When i Need To Implement Socket.io Implementation
                  and Chat Rooms Logic With MongoDB Queries
                </p>
              </div>

              <div className="Tags">
                <p>Nest.js</p>
                <p>Socket.io</p>
                <p>Json</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Sass" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/sass.webp" loading="eager" width="50px" height="50px" />
                <h3>Sass</h3>
              </div>

              <div className="Description">
                <p>
                  Sass is The Main Styling Files For React and Next i use For Amazing Syntax, Extends, Features
                  That Not Exists in CSS Files, Also Better When Using Mixins
                </p>
              </div>

              <div className="Tags">
                <p>SCSS</p>
                <p>SASS</p>
                <p>Website Styling</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Mysql" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/mysql.webp" loading="eager" width="50px" height="50px" />
                <h3>Databases</h3>
              </div>

              <div className="Description">
                <p>
                  Databases For Backend Is Just 2 (Mysql and Mongo) and When i Implement Backend Api
                  Mysql is The Chosen One When Multiple Api's Has Relations With Each Others
                  Like Complex Api's But When Each Table Has it's Own Implementation Mongo is Better Choice
                </p>
              </div>

              <div className="Tags">
                <p>Mongoos</p>
                <p>Mysql</p>
                <p>InnoDB</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Jenkins" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/jenkins.webp" loading="eager" width="50px" height="50px" />
                <h3>Jenkins CI</h3>
              </div>

              <div className="Description">
                <p>
                  Continues Integration For Android To Run Jobs On Specific Branches With Gradle
                  Configuration and Create Pipelines, Jobs, and Fastlane For Android And Execute
                  Lanes With Ruby Syntax and Manage Gems In App
                </p>
              </div>

              <div className="Tags">
                <p>CI</p>
                <p>Fastlane</p>
              </div>
            </div>

            <div className="Item">
              <div className="Content">
                <img alt="Android" src="https://raw.githubusercontent.com/Yazan98/portfolio/master/src/images/android.webp" loading="eager" width="50px" height="50px" />
                <h3>Android</h3>
              </div>

              <div className="Description">
                <p>
                  Create Android Applications With Kotlin and Gradle DSL With Latest Android Technologies
                  Like Hilt, Jetpack Compose, Esspresso, Single Activity Applications,
                  Multi Modular Apps, Deal With Offline Caching
                  Experience and Familiar With MVVM, MVI, MVP, MVC, VIPER, Firebase, RxJava
                </p>
              </div>

              <div className="Tags">
                <p>Optimized Apps</p>
                <p>Android Apps</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </PersonalPagesViewComponent>
  );
}

export const SkillsViewComponent = React.memo(SkillsComponent);
