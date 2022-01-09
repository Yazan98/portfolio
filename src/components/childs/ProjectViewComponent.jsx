import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';
import '../styles/pages/ProjectsPageStyle.scss';

export default function ProjectViewComponent({ projectView, onClickListener }) {
  return (
    <div
      className="ProjectViewContainerItem justify-center"
      onClick={() => onClickListener(projectView.name)}
    >
      <div className="ImageContainer">
        <img
          className="ProjectImageIcon h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
          style={{
            cursor: 'pointer'
          }}
          alt={projectView.name}
          loading="lazy"
          src={projectView.image}
        />
      </div>
      <p style={{ color: DESCRIPTION_COLOR }}>{projectView.createdAt}</p>
      <h2>{projectView.name}</h2>
      <p className="Description">{projectView.description}</p>
    </div>
  );
}
