import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';

export default function SkillsViewComponent({ skillItem }) {
  return (
    <Grid
      item
      xs={4}
    >
      <div style={{
        padding: '1.5em',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: DESCRIPTION_COLOR,
        borderRadius: '10px',
      }}
      >
        <img alt={skillItem.name} src={skillItem.icon} loading="lazy" width="50px" height="50px" />
        <h3>{skillItem.name}</h3>
        <p style={{
          color: DESCRIPTION_COLOR,
          height: '150px',
          fontSize: 'small',
          paddingTop: '5px',
        }}
        >
          {skillItem.description}
        </p>
        <p style={{ color: DESCRIPTION_COLOR, fontSize: 'small' }}>{skillItem.tags}</p>
      </div>
    </Grid>
  );
}