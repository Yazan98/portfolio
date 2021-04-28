import React from 'react';
import '../styles/pages/home_style.scss';
import HomeServicesComponent from '../components/HomeServicesComponent';
import FooterComponent from '../components/FooterComponent';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { HomeHeaderViewComponent } from '../components/HomeHeaderComponent';

export default class HomePageComponent extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <PersonalPagesViewComponent className="HomePageComponentContainer" title="Yazan Tarifi - Android Developer - Portfolio">
        <main>
          <HomeHeaderViewComponent />
        </main>
        <HomeServicesComponent />
        <FooterComponent />
      </PersonalPagesViewComponent>
    );
  }
}
