import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import FooterComponent from './common/FooterComponent';
import ToolbarComponent from './common/ToolbarComponent';
import { PRIMARY_COLOR } from '../info/ColorUtils';
import './styles/pages/ProjectsPageStyle.scss';
import getProjectsList, {
  ALL_FILTER_TYPE, ANDROID_FILTER_TYPE,
  FILTERED_PROJECTS_FILTER_TYPE, getProjectsListByFilter,
  TOOLS_FILTER_TYPE,
  WEB_APPS_FILTER_TYPE, WEBSITES_FILTER_TYPE, ALL_PROJECTS_ID,
} from '../info/ProjectsList';
import ProjectViewComponent from './childs/ProjectViewComponent';

export default function ProjectsPageComponent() {
  const [filterType, setFilterType] = React.useState(ALL_FILTER_TYPE);
  const [projectsList, setProjectsList] = React.useState(getProjectsList());
  const history = useHistory();

  useEffect(() => {
    if (filterType === ALL_FILTER_TYPE) {
      setProjectsList(getProjectsList());
    } else {
      setProjectsList(getProjectsListByFilter(filterType));
    }
  }, [filterType]);

  const onItemClicked = (id) => {
    if (id == ALL_PROJECTS_ID) {
      history.push('/projects/all');
    } else {
      history.push(`/projects/${id}`);
    }
  };

  return (
    <ScreenContainerComponent className="ProjectsPageComponent" title="Yazan Tarifi Portfolio - Projects">
      <ToolbarComponent />

      <main style={{ padding: '3em' }}>
        <h2 style={{ color: PRIMARY_COLOR }}>Projects</h2>
        <p className="ProjectsDescription">This is List of Some Projects I Built</p>
        <Grid style={{ maxWidth: '40vw' }} justify="center" alignItems="center" alignContent="center" container xs={12} md={12} lg={12}>
          <Grid className="Item" item xs={2} lg={2} md={2}>
            <p onClick={() => setFilterType(ALL_FILTER_TYPE)} className="ItemFilter">
              All Projects
            </p>
          </Grid>
          <Grid className="Item" item xs={2} lg={2} md={2}>
            <p onClick={() => setFilterType(ANDROID_FILTER_TYPE)} className="ItemFilter">
              Android Apps
            </p>
          </Grid>
          <Grid className="Item" item xs={2} lg={2} md={2}>
            <p onClick={() => setFilterType(WEBSITES_FILTER_TYPE)} className="ItemFilter">Websites</p>
          </Grid>
          <Grid className="Item" item xs={2} lg={2} md={2}>
            <p onClick={() => setFilterType(WEB_APPS_FILTER_TYPE)} className="ItemFilter">Web Apps</p>
          </Grid>
          <Grid className="Item" item xs={2} lg={2} md={2}>
            <p onClick={() => setFilterType(TOOLS_FILTER_TYPE)} className="ItemFilter">Tools</p>
          </Grid>
          <Grid className="Item" item xs={2} lg={2} md={2}>
            <p onClick={() => setFilterType(FILTERED_PROJECTS_FILTER_TYPE)} className="ItemFilter">Filtered Projects</p>
          </Grid>
        </Grid>

        {projectsList ? (
          <Grid className="ProjectsContainer" spacing={2} container xs={12} sm={12} justify="flex-start" alignContent="center" alignItems="center">
            {projectsList.map((item) => <ProjectViewComponent key={item.id} onClickListener={onItemClicked} projectView={item} />)}
          </Grid>
        ) : null}
      </main>

      <FooterComponent />
    </ScreenContainerComponent>
  );
}
