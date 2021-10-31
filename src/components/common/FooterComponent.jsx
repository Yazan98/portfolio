import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/pages/FooterStyle.scss';

export default function FooterComponent() {
  return (
    <footer>
      <div className="FooterContent">
        <div className="Logo">
          <p>Personal Website</p>
          <h2>Yazan Tarifi</h2>
        </div>
        <div className="LinksContent">
          <div className="Links">
            <h4>Links</h4>
            <ul className="Links">
              <li><NavLink className="Item" to="/">Home</NavLink></li>
              <li><NavLink className="Item" to="/projects">Projects</NavLink></li>
              <li>
                <NavLink className="Item" to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink className="Item" to="/archive">Archive</NavLink>
              </li>
            </ul>
          </div>
          <div className="LinksInformation">
            <h4>Information</h4>
            <ul className="Links">
              <li><NavLink className="Item" to="/">About</NavLink></li>
              <li>
                <NavLink className="Item" to="/">Resume</NavLink>
              </li>
              <li><a className="Item" href="">Articles</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="FooterEnd">
        <p>@ 2021 Personal Website</p>
        <div className="Links">
          <p>Github</p>
          <p>Dev.to</p>
          <p>Behance</p>
          <p>Stackoverflow</p>
        </div>
      </div>
      <div className="FooterEnd">
        <p>
          Website is Open Source (
          <a href="https://github.com/Yazan98/portfolio">Website Url</a>
          )
        </p>
      </div>
    </footer>
  );
}
