import React from 'react';
import InnerToolbarComponent from '../common/InnerToolbarComponent';
import PhonesImage from '../images/header.png';

export default function HomePageCoverComponent() {
  return (
    <section>
      <InnerToolbarComponent />
      <div className="HomePageContentContainer">
        <div className="Text">
          <div className="Content">
            <p className="SmallText">Software Engineer</p>
            <h2 className="Title">Yazan Tarifi</h2>
            <p className="Description">
              A code-minded front-end software engineer focused on building
              beautiful interfaces & experiences and Convert Ideas, Design To
              System With Frontend Side (Android Apps, React Websites)
              also The Backend Side With (SpringBoot, Ktor, Nest.js)
              Always Trying To Build Tools To Help and Improve My Work
            </p>
            <p className="TitleSection">Few technologies I've been working with</p>
            <ul>
              <li>Android - Kotlin</li>
              <li>React, Next.js</li>
              <li>Spring Boot</li>
              <li>NodeJs (Nest.js)</li>
              <li>CLI's (Js, Ruby)</li>
            </ul>
            <div className="RoundedButton">
              <a href="https://github.com/Yazan98">Github</a>
            </div>
          </div>
        </div>
        <div className="Icon">
          <img loading="lazy" src={PhonesImage} alt="Projects Phone Logo" width="711.2px" height="468.3px" />
        </div>
      </div>
    </section>
  );
}
