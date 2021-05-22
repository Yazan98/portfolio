import React from 'react';
import '../styles/pages/resume_style.scss';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExploreIcon from '@material-ui/icons/Explore';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ToolbarComponent from '../components/ToolbarComponent';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export const ResumePageComponent = () => {
  window.scrollTo(0, 0);
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  return (
    <PersonalPagesViewComponent title="Yazan Tarifi - Resume" className="ResumePageContainer">
      <ToolbarComponent />

      <main>
        <div className="Content">
          <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Yazan Tarifi</h4>
          <p className={`Short ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Front-End Software Engineer</p>
          <div className="Links">
            <p className={`FlexElement ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              <span><MailOutlineIcon /></span>
              <span>yazantarifi98@gmail.com</span>
            </p>

            <p className={`FlexElement ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              <span><ExploreIcon /></span>
              <span>Amman , Jordan</span>
            </p>

            <p className={`FlexElement ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              <span><PhoneInTalkIcon /></span>
              <span>+962780132297</span>
            </p>

            <p className={`FlexElement ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              <span><HomeIcon /></span>
              <span>yazantarifi.com</span>
            </p>

            <p className={`FlexElement ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              <span><GitHubIcon /></span>
              <span><a href="https://www.github.com/Yazan98" target="_blank" rel="noreferrer">github.com/Yazan98</a></span>
            </p>

            <p className={`FlexElement ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              <span><LinkedInIcon /></span>
              <span><a href="https://www.linkedin.com/in/yazan-tarifi-106282192/" target="_blank" rel="noreferrer">linkedin.com/yazan-tarifi</a></span>
            </p>
          </div>

          <div className="FlexMainBlock">
            <div className="MainElement">
              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Work Experience</h4>
              <div className="WorkElement">
                <p className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>
                  Android Developer -
                  <span><a href="https://opensooq.com" target="_blank" rel="noreferrer">@Opensooq</a></span>
                </p>
                <p className={`Short ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Jun 2020 - Present</p>
                <ul>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Create , Maintain Features Android Application</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Create Responsive Design , Clean Code</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Create Good Base Code With Kotlin Language</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Implemented Clean Architecture Using Latest Technologies</span>
                    </p>
                  </li>
                </ul>
              </div>

              <div className="WorkElement">
                <p className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>
                  Android Developer -
                  <span><a href="https://noventapp.com" target="_blank" rel="noreferrer">@NoventApp</a></span>
                </p>
                <p className={`Short ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Jun 2018 - December 2020</p>
                <ul>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>
                        Responsible On Android Applications
                        From Create Project To Deliver The Product To Customer
                      </span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Create Responsive Design , Clean Code</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Create Good Base Code With Kotlin Language</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Create Applications In Logistic System</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Implemented Clean Architecture Using Latest Technologies</span>
                    </p>
                  </li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                    <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                      <span><ArrowRightIcon /></span>
                      {' '}
                      <span>Implement Features In Backend (Restful Api)</span>
                    </p>
                  </li>
                </ul>
              </div>

              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Education</h4>
              <div className="WorkElement">
                <p className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>
                  Software Engineering -
                  <span><a href="https://hu.edu.jo" target="_blank">@Hashmite Univeristy</a></span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>2016 - 2020</p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Bachelor of Software Engineering</p>
              </div>

              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Android Skills</h4>
              <div className="WorkElement">
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                  <span className="Title">Brief</span>
                  {' '}
                  <span>: I have 3 years experience</span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                  <span className="Title">Languages</span>
                  {' '}
                  <span>: Java , Kotlin</span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}><span className="Title">Technologies</span></p>
                <ul>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Applications : Multi . Single Modular Applications</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Dependency Injection : Dagger . Koin . Hilt</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Android Jetpack : Navigation , Component Architecture</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Multi Threading With Kotlin coroutines . REST Api</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Architectures : MVC . MVP . MVVM . MVI . Viper . Redux</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Version Control : GIT Command Line . GUI</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Countinous Intergation : Fastlane . Jenkins</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Firebase : Firestore . Analytics . Auth . Notifications . Crashlytics . Hosting . Storage . App Distribution . Remote Config</li>
                </ul>
              </div>

              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Backend Skills</h4>
              <div className="WorkElement">
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                  <span className="Title">Brief</span>
                  {' '}
                  <span>: I have 1 year experience in Spring Boot</span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                  <span className="Title">Languages</span>
                  {' '}
                  <span>: Java , Kotlin</span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}><span className="Title">Technologies</span></p>
                <ul>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Firebase Integration</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Mysql Database . Mongo Database</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Swagger UI . Spring Security . Error Handlers</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Delopyment: Heroku , Google App Engine</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>MultiThreading : Kotlin Coroutines</li>
                </ul>
              </div>

              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Frontend Skills</h4>
              <div className="WorkElement">
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                  <span className="Title">Brief</span>
                  {' '}
                  <span>: Personal Skills</span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                  <span className="Title">Languages</span>
                  {' '}
                  <span>: Javascript , Typescript</span>
                </p>
                <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}><span className="Title">Technologies</span></p>
                <ul>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React.js</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Javascript (ES6 +)</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React.js Components (StateFul, StateLess, Pure Component)</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>S-CSS</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React Hooks</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Restful Apis Via Axios</li>
                  <li className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React Context</li>
                </ul>
              </div>

            </div>
            <div className="SecondElement">
              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Skills</h4>
              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Programming Languages</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Java, Javascript, Kotlin, JavaScript (ES6), TypeScript, CSS/Sass, Groovy, Xml, Gradle</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Libraries & Frameworks</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React.js, Node.js, Android Apps, RxJava, JQuery, Dagger, Hilt, Android Architecture Components</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Tools & Platforms</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Git, Netlify, Heroku, Firebase, Jenkins, Fastlane, Spring Boot, MySql, NoSql, Google Cloud Platform, Sonar Qube, Github Pages, Visual Studio, Slack, Postman</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Design</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Photoshop, After Effects, Premiere, Adobe XD</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Languages</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Arabic , English</p>

              <h4 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>Personal Projects</h4>
              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Vortex</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Vortex is a Base Code to Build Multi modular android applications with common applications operations, latest technologies Like MVVM, RxJava, Kotlin Coroutines, Firebase, etc</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Drasati</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Destiny</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Opensource Android Application / Spring Boot Api Powered By Koltin Lanague, Vortex Base Code, Mvvm</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Netflix Clone</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>React.js Website Powered By MovieDB Api to Handle State, Api Requests, Typescript, Scss, etc</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Groupy</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Graduation Project Android Application Built With Kotlin Coroutines, Firebase Realtime Database, Firebase Auth, Notifications, Mvp</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Denamo Theme</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Visual Studio Code Theme To Build Typescript Projects with Blue Dark Theme</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Autohub</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Opensource Android Application Powered By Github Api, Kotlin, RxJava, Redux Saved State</p>

              <h6 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'} Title`}>Wintrop</h6>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>Opensource Android Application Powered By OpenWeather Api, Kotlin, RxJava</p>

            </div>
          </div>
        </div>
      </main>
    </PersonalPagesViewComponent>
  );
};

export const ResumePageViewComponent = React.memo(ResumePageComponent);
