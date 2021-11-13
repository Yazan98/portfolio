import React from 'react';
import {
  Grid, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel,
} from '@material-ui/core';
import FooterComponent from './common/FooterComponent';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import ToolbarComponent from './common/ToolbarComponent';
import { DESCRIPTION_COLOR, PRIMARY_COLOR } from '../info/ColorUtils';
import getProjectsInformationList, {
  getProjectsInfoListByCategory,
  getProjectsInfoListByLanguage,
} from '../info/ProjectsInformationList';
import GithubProjectViewComponent from './childs/GithubProjectViewComponent';

export default function AllProjectsPageComponent() {
  const [projects, setProjects] = React.useState(getProjectsInformationList());
  const [filterType, setFilterType] = React.useState('all');
  const [filterCategory, setFilterCategory] = React.useState('categories');
  React.useEffect(() => {
    if (filterType === 'All' || filterType === 'all') {
      setProjects(getProjectsInformationList());
      return;
    }

    if (filterCategory === 'categories') {
      setProjects(getProjectsInfoListByCategory(filterType));
    } else {
      setProjects(getProjectsInfoListByLanguage(filterType));
    }
  }, [filterType, filterCategory]);

  const onCategoryChanged = (item) => {
    setFilterCategory('categories');
    setFilterType(item.target.value);
  };

  const onLanguageChanged = (item) => {
    setFilterCategory('language');
    setFilterType(item.target.value);
  };

  return (
    <ScreenContainerComponent className="AllProjectsPageComponent" title="Yazan Tarifi Portfolio - All Projects">
      <ToolbarComponent />

      <main style={{ padding: '3em' }}>
        <h2 style={{ color: PRIMARY_COLOR }}>All Projects</h2>
        <p className="ProjectsDescription">A Big List of My Projects Open Source and Available To Show</p>

        <Grid container xs={12} lg={12} md={12} spacing={1} className="ProjectsContainerList">
          <Grid item xs={2} lg={2} md={2} className="ProjectsFilter">
            <h3 style={{ marginTop: '1em', color: PRIMARY_COLOR }}>Filter By</h3>
            <FormControl component="fieldset" style={{ marginTop: '2em' }}>
              <FormLabel component="legend" style={{ color: DESCRIPTION_COLOR }}>Categories</FormLabel>
              <RadioGroup defaultValue="All" onChange={(item) => onCategoryChanged(item)}>
                <FormControlLabel control={<Radio size="small" color="primary" />} value="All" label="All" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Android" label="Android Applications" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="WebApps" label="Web Applications" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Websites" label="Websites" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Tools" label="Tools" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" style={{ marginTop: '2em' }}>
              <FormLabel component="legend" style={{ color: DESCRIPTION_COLOR }}>Languages</FormLabel>
              <RadioGroup defaultValue="All" onChange={(item) => onLanguageChanged(item)}>
                <FormControlLabel control={<Radio size="small" color="primary" />} value="All" label="All" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Kotlin" label="Kotlin" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Java" label="Java" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Javascript" label="Javascript" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Typescript" label="Typescript" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="Ruby" label="Ruby" />
                <FormControlLabel control={<Radio size="small" color="primary" />} value="PHP" label="PHP" />
              </RadioGroup>
            </FormControl>

          </Grid>
          <Grid item xs={10} lg={10} md={10} className="Projects">
            <Grid container xs={12} lg={12} md={12} justify={projects.length === 3 ? 'center' : (projects.length <= 4 ? 'flex-start' : 'center')}>
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
