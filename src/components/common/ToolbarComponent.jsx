import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../info/ColorUtils';

export default function ToolbarComponent() {
  // const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  // Use This when Do Mobile Design

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Grid
            justify="space-between"
            container
            spacing={24}
          >
            <Grid item>
              <Typography variant="h6" style={{ color: PRIMARY_COLOR }} component="div" sx={{ flexGrow: 1 }}>
                Yazan Tarifi
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <NavLink style={{ marginLeft: '1em' }} to="/">Home</NavLink>
                <NavLink style={{ marginLeft: '1em' }} to="/">Projects</NavLink>
                <NavLink style={{ marginLeft: '1em' }} to="/">Skills</NavLink>
                <NavLink style={{ marginLeft: '1em' }} to="/">About</NavLink>
                <NavLink style={{ marginLeft: '1em' }} to="/">Archive</NavLink>
                <NavLink style={{ marginLeft: '1em' }} to="/">Resume</NavLink>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </nav>
  );
}
