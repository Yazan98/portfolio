import React from 'react';
import '../styles/pages/not_found_style.scss';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { ToolbarViewComponent } from '../components/ToolbarComponent';

export default function NotFoundPageComponent() {
  window.scrollTo(0, 0);
  return (
    <PersonalPagesViewComponent title="Yazan Tarifi Portfolio - Not Found">
      <div className="BlueBackground">
        <ToolbarViewComponent />
      </div>
      <div className="NotFoundContainer">
        <div className="Content">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </div>
    </PersonalPagesViewComponent>
  );
}

export const NotFoundPageViewComponent = React.memo(NotFoundPageComponent);
