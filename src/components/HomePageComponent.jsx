import React from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import { HOME_PAGE_TITLE } from '../info/StringsUtils';

export default function HomePageComponent() {
  return (
    <ScreenContainerComponent className="HomePageContainer" title={HOME_PAGE_TITLE}>
      <h1>Title</h1>
    </ScreenContainerComponent>
  );
}
