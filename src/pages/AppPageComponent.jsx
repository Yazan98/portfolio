import React, { Component } from 'react';
import ToolbarComponent from '../components/ToolbarComponent';
import FooterComponent from '../components/FooterComponent';
import { InfoManager } from '../info/InfoManager';
import '../styles/pages/app_page_style.scss';
import { BlueLineComponent } from '../components/BlueLineComponent';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';

export default function AppPageComponent() {
  const params = this.props.location.pathname;
  window.scrollTo(0, 0);
  return (
    <PersonalPagesViewComponent title={`Project View : ${params.split('/')[2]}`}>
      <div className="AppPageComponent">
        <BlueLineComponent />
        <ToolbarComponent />

        <div className="Content">
          {this.getAppInfo(params.split('/')[2])}
        </div>

        <FooterComponent />
      </div>
    </PersonalPagesViewComponent>
  );
}

function getAppInfo(name) {
  const targetApp = new InfoManager().getAppByName(name);
  return (
    <div className="Container">
      <div className="Content">
        <img className="Logo" src={targetApp.logo} alt="Logo" />
        <p className="Header">
          <h4>{targetApp.name}</h4>
          <a href={targetApp.projectLink} target="_blank">App Link</a>
        </p>
        <h6>
          Created At :
          {targetApp.createdAt}
        </h6>
        <p className="TagsContainer">
          {targetApp.tags.map((item) => <span>{item}</span>)}
        </p>
        <p>{targetApp.description}</p>
        <div className="Image2">
          <img src={targetApp.mainImageLink} alt="Autohub Main Image" />
        </div>
        <div className="Images">
          {targetApp.images.map((item) => <img src={item} width="155px" height="310px" alt="Item" />)}
        </div>
      </div>
      <br />
      <div className="Image">
        <img src={targetApp.mainImageLink} alt="Autohub Main Image" />
      </div>
    </div>
  );
}

export const AppPageViewComponent = React.memo(AppPageComponent);
