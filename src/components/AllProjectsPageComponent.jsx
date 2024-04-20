import React, {useEffect} from 'react';
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
import ReactGA from "react-ga";

export default function AllProjectsPageComponent() {
  const [projects, setProjects] = React.useState(getProjectsInformationList());
  const [filterType, setFilterType] = React.useState('all');
  const [filterCategory, setFilterCategory] = React.useState('categories');
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

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

      <main className={"p-4 md:p-8 lg:p-8 xl:p-8"}>
        <h2 style={{ color: PRIMARY_COLOR }}>All Projects</h2>
        <p className="ProjectsDescription">A Big List of My Projects Open Source and Available To Show</p>
        <div className={"grid grid-cols-1 align-top md:flex md:justify-top md:items-top lg:flex lg:justify-top lg:items-top p-2"}>
          <div className={"flex align-top p-2 justify-start items-start p-4 mt-10 mr-5"}>
            <div className={"grid grid-cols-1"}>
              <h3 style={{ color: PRIMARY_COLOR }}>Filter By</h3>
              <FormControl component="fieldset" style={{ marginTop: '2em' }}>
                <FormLabel component="legend" style={{ color: DESCRIPTION_COLOR }}>Categories</FormLabel>
                <RadioGroup defaultValue="All" onChange={(item) => onCategoryChanged(item)}>
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="All" label="All" />
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="Android" label="Android Applications" />
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="IOS" label="IOS Applications" />
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
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="Swift" label="Swift" />
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="Javascript" label="Javascript" />
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="Typescript" label="Typescript" />
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="Ruby" label="Ruby" />
                  <FormControlLabel control={<Radio size="small" color="primary" />} value="PHP" label="PHP" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className={"flex flex-1 justify-center items-center p-2"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start gap-5 items-center mt-10"}>
              {projects ? projects.map((item) => (
                  <GithubProjectViewComponent
                      project={item}
                      key={item.id}
                  />
              )) : null}
            </div>
          </div>
        </div>
      </main>

      <FooterComponent />
    </ScreenContainerComponent>
  );
}
