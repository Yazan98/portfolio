import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';
import '../styles/pages/ProjectsPageStyle.scss';

export default function ProjectViewComponent({ projectView }) {
  return (
    <Grid
      item
      xs={4}
      sm={6}
      style={{ marginBottom: '1em' }}
    >
      <img
        style={{
          borderRadius: '10px',
          borderStyle: 'solid',
          borderWidth: '0px',
          cursor: 'pointer',
        }}
        alt={projectView.name}
        loading="lazy"
        src={projectView.image}
      />
      <p style={{ color: DESCRIPTION_COLOR }}>{projectView.createdAt}</p>
      <h2>{projectView.name}</h2>
      <p className="Description">{projectView.description}</p>
    </Grid>
  );
}
