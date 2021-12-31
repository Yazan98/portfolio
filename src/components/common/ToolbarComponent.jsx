import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { PRIMARY_COLOR } from '../../info/ColorUtils';
import { useLocation } from 'react-router-dom'

export default function ToolbarComponent() {
  // const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  // Use This when Do Mobile Design
  const location = useLocation();
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
                <NavLink to={"/"}>Yazan Tarifi</NavLink>
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <NavLink style={{ marginLeft: '1em', color: location.pathname === "/" ? PRIMARY_COLOR : "" }} to="/">Home</NavLink>
                <NavLink style={{ marginLeft: '1em', color: location.pathname === "/projects" ? PRIMARY_COLOR : ""}} to="/projects">Projects</NavLink>
                <NavLink style={{ marginLeft: '1em', color: location.pathname === "/skills" ? PRIMARY_COLOR : "" }} to="/skills">Skills</NavLink>
                <NavLink style={{ marginLeft: '1em', color: location.pathname === "/about" ? PRIMARY_COLOR : "" }} to="/about">About</NavLink>
                <NavLink style={{ marginLeft: '1em', color: location.pathname === "/archive" ? PRIMARY_COLOR : "" }} to="/archive">Archive</NavLink>
                <NavLink style={{ marginLeft: '1em', color: location.pathname === "/resume" ? PRIMARY_COLOR : "" }} to="/resume">Resume</NavLink>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </nav>
  );
}
