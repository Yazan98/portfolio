import React from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import { NOT_FOUND_TITLE } from '../info/StringsUtils';
import InnerToolbarComponent from './common/InnerToolbarComponent';
import './styles/components/NotFoundSstyle.scss';

export default function NotFoundPageViewComponent() {
  return (
    <ScreenContainerComponent title={NOT_FOUND_TITLE} className="NotFoundPageContainer">
      <div className="ScreenContent">
        <InnerToolbarComponent isTitleWhite />
        <div className="NotFoundDescription">
            <div className={"Content"}>
                <h1>404</h1>
                <h3>Page Not Found</h3>
            </div>
        </div>
      </div>
    </ScreenContainerComponent>
  );
}
