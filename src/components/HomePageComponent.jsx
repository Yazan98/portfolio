import React from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import { HOME_PAGE_TITLE } from '../info/StringsUtils';
import HomePageCoverComponent from './home/HomePageCoverComponent';
import './styles/pages/HomePageStyle.scss';

export default function HomePageComponent() {
  return (
    <ScreenContainerComponent className="HomePageContainer" title={HOME_PAGE_TITLE}>
      <HomePageCoverComponent />
    </ScreenContainerComponent>
  );
}
