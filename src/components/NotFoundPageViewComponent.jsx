import React from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import { NOT_FOUND_TITLE } from '../info/StringsUtils';

export default function NotFoundPageViewComponent() {
  return (
    <ScreenContainerComponent title={NOT_FOUND_TITLE} className="NotFoundPageContainer">
      <h1>Not Found</h1>
    </ScreenContainerComponent>
  );
}
