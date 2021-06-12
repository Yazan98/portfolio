import React, { useMemo } from 'react';
import '../styles/pages/projects_style.scss';
import { useHistory } from 'react-router-dom';
import { getProjectsList, getProjectsListByFilter } from '../info/ProfileInformation';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { ProjectPreviewViewComponent } from '../components/ProjectPreviewViewComponent';
import { ToolbarViewComponent } from '../components/ToolbarComponent';
import { isApplicationLightTheme } from '../info/ThemeInfo';

export default function ProjectsComponent() {
  const [filter, setFilter] = React.useState('all');
  const [projects, setProjects] = React.useState([]);
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  const history = useHistory();

  const onProjectClicked = (name) => {
    if (name === 'All Projects') {
      history.push('/projects/all');
    } else {
      history.push(`/app/${name}`);
    }
  };

  useMemo(() => {
    if (filter === 'all') {
      setProjects(getProjectsList());
    } else {
      setProjects(getProjectsListByFilter(filter));
    }
  }, [filter]);

  window.scrollTo(0, 0);
  return (
    <PersonalPagesViewComponent className="ProjectsContainer" title="Yazan Tarifi - Projects">
      <ToolbarViewComponent />
      <div className="ProjectsComponent">
        <div className="Title">
          <h2 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>Portfolio</h2>
          <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>This is List of Some Projects I Built</p>
          <div className="Links">
            <label className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`} onClick={() => setFilter('all')}>All Projects</label>
            <label className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`} onClick={() => setFilter('android')}>Android Apps</label>
            <label className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`} onClick={() => setFilter('web')}>Websites</label>
            <label className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`} onClick={() => setFilter('api')}>Web Apps</label>
            <label className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`} onClick={() => setFilter('opensource')}>Filtered Projects</label>
          </div>

          <div className="ProjectsContainer">
            {projects ? projects.map((item) => (
              (
                <ProjectPreviewViewComponent
                  image={item.previewImage}
                  name={item.name}
                  createdAt={item.createdAt}
                  preview={item.typeText}
                  theme={theme}
                  onClickCallback={onProjectClicked}
                />
              )
            )) : null}
          </div>
        </div>
      </div>
    </PersonalPagesViewComponent>
  );
}
