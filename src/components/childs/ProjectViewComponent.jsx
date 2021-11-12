import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';
import '../styles/pages/ProjectsPageStyle.scss';

export default function ProjectViewComponent({ projectView, onClickListener }) {
  return (
    <Grid
      className="ProjectViewContainerItem"
      onClick={() => onClickListener(projectView.id)}
      item
      xs={12}
      md={4}
      lg={4}
      sm={6}
      xl={3}
    >
      <div className="ImageContainer">
        <img
          className="ProjectImageIcon"
          style={{
            cursor: 'pointer',
            width: '27vw',
          }}
          alt={projectView.name}
          loading="lazy"
          src={projectView.image}
        />
      </div>
      <p style={{ color: DESCRIPTION_COLOR }}>{projectView.createdAt}</p>
      <h2>{projectView.name}</h2>
      <p className="Description">{projectView.description}</p>
    </Grid>
  );
}
