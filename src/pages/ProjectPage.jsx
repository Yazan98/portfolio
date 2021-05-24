import React from 'react';
import { useHistory } from 'react-router';
import { PersonalPagesViewComponent } from '../components/layouts/PersonalPagesComponent';
import { isApplicationLightTheme } from '../info/ThemeInfo';
import { ToolbarViewComponent } from '../components/ToolbarComponent';
import { getProjectByName } from '../info/ProfileInformation';
import '../styles/pages/app_page_style.scss';

export function ProjectPage() {
  const [theme, setTheme] = React.useState(isApplicationLightTheme());
  const componentUrl = window.location.href;
  const splittedUrl = componentUrl.split('/');
  const projectName = splittedUrl[splittedUrl.length - 1];
  const projectEntity = getProjectByName(projectName)[0];
  const history = useHistory();
  if (!projectEntity) {
    history.push('/notfound');
    return null;
  }

  return (
    <PersonalPagesViewComponent title="Yazan Tarifi - Portfolio - Project Page" className="ProjectPageContainer">
      <ToolbarViewComponent />
      <div className="Content">
        <div className="ProjectContent">
          <div className="Description">
            <div className="Content">
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
                {projectEntity.type.toUpperCase()}
                {' '}
                -
                {' '}
                {projectEntity.createdAt}
              </p>
              <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>{projectEntity.typeText}</p>
              <div className="Name">
                <h2 className={theme ? 'TextTitleBlack' : 'TextTitleLight'}>{projectEntity.name}</h2>
                <a href={projectEntity.link} target="_blank" rel="noreferrer">Open Project</a>
              </div>
              <p className={`Description ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>{projectEntity.description}</p>
              <div className="Tags">
                {projectEntity.tags.map((item) => (<div className="Item">{item}</div>))}
              </div>
            </div>
          </div>
          <div className="Image">
            <img alt={projectEntity.name} src={projectEntity.previewImage} loading="lazy" />
          </div>
        </div>
        {projectEntity.images ? (
          <div className="ProjectImages">
            {projectEntity.images.map((item) => <img alt={projectEntity.name} src={require(`../images${item}`)} loading="lazy" />)}
          </div>
        ) : null}
      </div>
    </PersonalPagesViewComponent>
  );
}

export const ProjectViewPage = React.memo(ProjectPage);
