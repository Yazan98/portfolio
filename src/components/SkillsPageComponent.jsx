import React, {useEffect} from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import ToolbarComponent from './common/ToolbarComponent';
import FooterComponent from './common/FooterComponent';
import {PRIMARY_COLOR} from '../info/ColorUtils';
import getSkillsList from '../info/SkillsList';
import SkillsViewComponent from './childs/SkillsViewComponent';
import ReactGA from "react-ga";

export default function SkillsPageComponent() {
    const list = getSkillsList();
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <ScreenContainerComponent className="SkillsPageComponent" title="Yazan Tarifi Portfolio - Skills">
            <ToolbarComponent />

            <main className={"p-4 md:p-8 lg:p-8 xl:p-8"}>
                <h2 style={{ color: PRIMARY_COLOR }}>Skills</h2>
                <p className="ProjectsDescription">Languages, Frameworks in Working on</p>
                <div style={{ justifyContent: 'center', display: 'flex', marginTop: '2em' }}>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 items-center mt-10"}>
                        {list.map((item) => <SkillsViewComponent skillItem={item} />)}
                    </div>
                </div>
            </main>

            <FooterComponent />
        </ScreenContainerComponent>
    );
}
