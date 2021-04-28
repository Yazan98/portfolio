import React, { useMemo } from 'react';
import '../styles/pages/projects_style.scss';
import { useHistory } from 'react-router-dom';
import { getProjectsList, getProjectsListByFilter } from '../info/ProfileInformation';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { ProjectPreviewViewComponent } from '../components/ProjectPreviewViewComponent';
import { ToolbarViewComponent } from '../components/ToolbarComponent';

export default function ProjectsComponent() {
  const [filter, setFilter] = React.useState('all');
  const [projects, setProjects] = React.useState([]);
  const history = useHistory();

  const onProjectClicked = (name) => {
    if (name === 'All Projects') {
      history.push('/projects/all');
    } else {
      history.push(`/project?name=${name}`);
    }
  };

  useMemo(() => {
    if (filter === 'all') {
      setProjects(getProjectsList());
    } else {
      setProjects(getProjectsListByFilter(filter));
    }
  }, [filter]);

  return (
    <PersonalPagesViewComponent className="ProjectsContainer" title="Yazan Tarifi - Projects">
      <ToolbarViewComponent />
      <div className="ProjectsComponent">
        <div className="Title">
          <h2>Portfolio</h2>
          <p>This is List of Some Projects I Built</p>
          <div className="Links">
            <label className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Projects</label>
            <label className={filter === 'android' ? 'active' : ''} onClick={() => setFilter('android')}>Android Apps</label>
            <label className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>Websites</label>
            <label className={filter === 'api' ? 'active' : ''} onClick={() => setFilter('api')}>Web Apps</label>
            <label className={filter === 'opensource' ? 'active' : ''} onClick={() => setFilter('opensource')}>Filtered Projects</label>
          </div>

          <div className="ProjectsContainer">
            {projects ? projects.map((item) => (
              (
                <ProjectPreviewViewComponent
                  image={item.previewImage}
                  name={item.name}
                  createdAt={item.createdAt}
                  preview={item.typeText}
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
