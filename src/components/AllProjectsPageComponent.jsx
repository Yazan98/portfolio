import React from 'react';
import {
  Grid, FormControlLabel, FormGroup, Checkbox,
} from '@material-ui/core';
import FooterComponent from './common/FooterComponent';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import ToolbarComponent from './common/ToolbarComponent';
import { DESCRIPTION_COLOR, PRIMARY_COLOR } from '../info/ColorUtils';
import getProjectsInformationList from '../info/ProjectsInformationList';
import GithubProjectViewComponent from './childs/GithubProjectViewComponent';

export default function AllProjectsPageComponent() {
  const [projects, setProjects] = React.useState(getProjectsInformationList());

  return (
    <ScreenContainerComponent className="AllProjectsPageComponent" title="Yazan Tarifi Portfolio - All Projects">
      <ToolbarComponent />

      <main style={{ padding: '3em' }}>
        <h2 style={{ color: PRIMARY_COLOR }}>All Projects</h2>
        <p className="ProjectsDescription">A Big List of My Projects Open Source and Available To Show</p>

        <Grid container xs={12} lg={12} md={12} spacing={1} className="ProjectsContainerList">
          <Grid item xs={2} lg={2} md={2} className="ProjectsFilter">
            <h3 style={{ marginTop: '1em', color: PRIMARY_COLOR }}>Filter By</h3>
            <p style={{ color: DESCRIPTION_COLOR }}>Categories</p>
            <FormGroup>
              <FormControlLabel control={<Checkbox size="small" defaultChecked color="primary" />} label="Android Applications" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Web Applications" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Websites" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Tools" />
            </FormGroup>

            <p style={{ color: DESCRIPTION_COLOR, marginTop: '2em' }}>Languages</p>
            <FormGroup>
              <FormControlLabel control={<Checkbox size="small" color="primary" defaultChecked />} label="Kotlin" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Java" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Javascript" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Typescript" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="Ruby" />
              <FormControlLabel control={<Checkbox size="small" color="primary" />} label="PHP" />
            </FormGroup>

          </Grid>
          <Grid item xs={10} lg={10} md={10} className="Projects">
            <Grid container xs={12} lg={12} md={12}>
              {projects ? projects.map((item) => (
                <GithubProjectViewComponent
                  project={item}
                  key={item.id}
                />
              )) : null}
            </Grid>
          </Grid>
        </Grid>
      </main>

      <FooterComponent />
    </ScreenContainerComponent>
  );
}
