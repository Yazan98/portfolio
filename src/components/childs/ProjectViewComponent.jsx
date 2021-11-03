import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';

export default function ProjectViewComponent({ projectView }) {
  return (
    <Grid
      item
      xs={4}
      style={{ marginBottom: '1em' }}
    >
      <img
        style={{
          borderRadius: '10px',
          borderStyle: 'solid',
          borderWidth: '0px',
        }}
        alt={projectView.name}
        loading="eager"
        src={projectView.image}
      />
      <p style={{ color: DESCRIPTION_COLOR }}>{projectView.createdAt}</p>
      <h2>{projectView.name}</h2>
      <p style={{ color: DESCRIPTION_COLOR, fontSize: 'small', maxWidth: '70%' }}>{projectView.description}</p>
    </Grid>
  );
}
