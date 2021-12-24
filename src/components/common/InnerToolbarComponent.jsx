import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../info/ColorUtils';

export default function InnerToolbarComponent({ isTitleWhite }) {
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
              <Typography variant="h6" style={{ color: isTitleWhite ? 'white' : PRIMARY_COLOR }} component="div" sx={{ flexGrow: 1 }}>
                Yazan Tarifi
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <NavLink style={{ marginLeft: '1em', color: 'white' }} to="/">Home</NavLink>
                <NavLink style={{ marginLeft: '1em', color: 'white' }} to="/projects">Projects</NavLink>
                <NavLink style={{ marginLeft: '1em', color: 'white' }} to="/skills">Skills</NavLink>
                <NavLink style={{ marginLeft: '1em', color: 'white' }} to="/about">About</NavLink>
                <NavLink style={{ marginLeft: '1em', color: 'white' }} to="/archive">Archive</NavLink>
                <NavLink style={{ marginLeft: '1em', color: 'white' }} to="/resume">Resume</NavLink>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </nav>
  );
}
