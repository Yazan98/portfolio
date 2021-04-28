import React, { Component } from 'react';
import '../styles/fragments/projects_style.scss';
import { NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class ProjectsSectionComponents extends Component {
  render() {
    return (
      <div className="ProjectsContainer">

        <div className="Title">
          <h4>Other Noteworthy Projects</h4>
          <p>Here are some of the Projects I've worked on</p>
        </div>

        <div className="Content">
          <div className="HomeServicesComponentContainer">
            <div className="ItemsContainer">

              <div className="ServiceItem">
                <div className="ProjectComponentContainer">
                  <div className="ProjectItem">
                    <p>Android Infrastructure</p>
                    <h5>Vortex-io</h5>
                    <p className="Description">Vortex is a Base Code to Build Multi modular android applications with common applications operations, latest technologies</p>
                  </div>
                </div>
              </div>

              <div className="ServiceItem">
                <div className="ProjectComponentContainer">
                  <div className="ProjectItem">
                    <p>Kotlin Multiplatform</p>
                    <h5>Exposer</h5>
                    <p className="Description">Android Domain Layer Controller Via UseCases To Handle Shared Logic Between Android, IOS Via Kotlin Multiplatform With Reactive Programming, Memory, etc</p>
                  </div>
                </div>
              </div>

              <div className="ServiceItem">
                <div className="ProjectComponentContainer">
                  <div className="ProjectItem">
                    <p>Android Application</p>
                    <h5>Groupy</h5>
                    <p className="Description">Graduation Project Android Application Built With Kotlin Coroutines, Firebase Realtime Database, Firebase Auth, Notifications, Mvp</p>
                  </div>
                </div>
              </div>

              <div className="ServiceItem">
                <div className="ProjectComponentContainer">
                  <div className="ProjectItem">
                    <p>Spring Boot Library</p>
                    <h5>Actor</h5>
                    <p className="Description">Postman Generator To Generate Collections for Spring Boot Controllers</p>
                  </div>
                </div>
              </div>

              <div className="ServiceItem">
                <div className="ProjectComponentContainer">
                  <div className="ProjectItem">
                    <p>Backend Side</p>
                    <h5>Bookie</h5>
                    <p className="Description">Books Api Powered By SpringBoot, Java, MySql, Swagger-ui, Error Handling</p>
                  </div>
                </div>
              </div>

              <div className="ServiceItem">
                <div className="ProjectComponentContainer">
                  <div className="ProjectItem">
                    <p>Frontend Side</p>
                    <h5>Atto</h5>
                    <p className="Description">Android Library To Build Mvp Applications with a Lot Of Utils (Archived)</p>
                  </div>
                </div>
              </div>

            </div>

            <NavLink to="/projects/all">
              <p className="AllProjectsLink">
                <span>View All Projects </span>
                <span><ArrowForwardIcon /></span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsSectionComponents;
