import React from 'react';
import { Grid } from '@material-ui/core';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import ToolbarComponent from './common/ToolbarComponent';
import FooterComponent from './common/FooterComponent';
import { PRIMARY_COLOR } from '../info/ColorUtils';
import getSkillsList from '../info/SkillsList';
import SkillsViewComponent from './childs/SkillsViewComponent';

export default function SkillsPageComponent() {
  const list = getSkillsList();
  return (
    <ScreenContainerComponent className="SkillsPageComponent" title="Yazan Tarifi Portfolio - Skills">
      <ToolbarComponent />

      <main style={{ padding: '3em' }}>
        <h2 style={{ color: PRIMARY_COLOR }}>Skills</h2>
        <p className="ProjectsDescription">Languages, Frameworks in Working on</p>
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: '2em' }}>
          <Grid className="ProjectsContainer" spacing={2} container xs={9} justify="flex-start" alignContent="center" alignItems="center">
            {list.map((item) => <SkillsViewComponent skillItem={item} />)}
          </Grid>
        </div>
      </main>

      <FooterComponent />
    </ScreenContainerComponent>
  );
}
