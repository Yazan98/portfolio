import React from 'react';
import '../styles/pages/home_style.scss';
import { HomeServicesViewComponent } from '../components/HomeServicesComponent';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { HomeHeaderViewComponent } from '../components/HomeHeaderComponent';
import HomeSkillsViewComponent from '../components/HomeSkillsViewComponent';

export default function HomePageComponent() {
  window.scrollTo(0, 0);
  return (
    <PersonalPagesViewComponent className="HomePageComponentContainer" title="Yazan Tarifi - Android Developer - Portfolio">
      <main>
        <HomeHeaderViewComponent />
        <HomeSkillsViewComponent />
        <HomeServicesViewComponent />
      </main>
    </PersonalPagesViewComponent>
  );
}
