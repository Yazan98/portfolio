import React from 'react';
import FooterComponent from './common/FooterComponent';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import ToolbarComponent from './common/ToolbarComponent';

export default function AllProjectsPageComponent() {
    return (
        <ScreenContainerComponent className="AllProjectsPageComponent" title={"Yazan Tarifi Portfolio - All Projects"}>
            <ToolbarComponent />
            <FooterComponent />
        </ScreenContainerComponent>
    );
}
