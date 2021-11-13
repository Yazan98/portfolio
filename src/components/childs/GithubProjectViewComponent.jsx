import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';

export default function GithubProjectViewComponent({ project }) {
  return (
    <Grid
      style={{
        borderColor: 'black',
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '1.5em',
        margin: '1em',
      }}
      item
      xs={3}
      lg={3}
      md={3}
      className="ProjectGithubItem"
    >
      <p style={{ color: DESCRIPTION_COLOR }}>Github</p>
      <h3>{project.name}</h3>
      <p style={{
        color: DESCRIPTION_COLOR,
        fontSize: 'small',
        height: '120px',
        marginTop: '1em',
      }}
      >
        {project.description}
      </p>
      <hr />
      <Grid container xs={10} spacing={2} justify="space-between" style={{ marginTop: '5px' }}>
        <Grid item xs={7}>
          <p style={{ color: DESCRIPTION_COLOR, fontSize: 'small' }}>{project.hint}</p>
        </Grid>
        <Grid item xs={1}>
          {project.links ? project.links.map((item) => <a href={item}>Link</a>) : null}
        </Grid>
      </Grid>
    </Grid>
  );
}
