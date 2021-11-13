import React from 'react';
import { Grid } from '@material-ui/core';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';
import GithubIcon from '../images/github-logo.svg';
import LinkIcon from '../images/link.svg';

function getSingleLinkItem(link) {
  return (
    <Grid item xs={1} justify="flex-end">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={link.includes('github.com') ? GithubIcon : LinkIcon} alt="Github Repo" width="20px" height="20px" loading="lazy" style={{ marginLeft: '10px', cursor: 'pointer' }} />
      </a>
    </Grid>
  );
}

function getMutlipleLinksItem(links = []) {
  return (
    <Grid item xs={3} justify="flex-end">
      {links ? links.map((item) => (item.includes('github.com')
        ? (
          <a href={item} target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="Github Repo" width="20px" height="20px" loading="lazy" style={{ marginLeft: '10px', cursor: 'pointer' }} />
          </a>
        )
        : (
          <a href={item} target="_blank" rel="noreferrer">
            <img src={LinkIcon} alt="Github Repo" width="20px" height="20px" loading="lazy" style={{ marginLeft: '10px', cursor: 'pointer' }} />
          </a>
        ))) : null}
    </Grid>
  );
}

function getLinksView(links) {
  return links.length === 1 ? getSingleLinkItem(links[0]) : getMutlipleLinksItem(links);
}

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
      xs={7}
      lg={3}
      md={5}
      sm={5}
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
      <Grid container xs={12} spacing={1} justify="space-between" style={{ marginTop: '5px' }}>
        <Grid item xs={9} justify="flex-start">
          <p style={{ color: DESCRIPTION_COLOR, fontSize: 'small' }}>{project.hint}</p>
        </Grid>
        {getLinksView(project.links)}
      </Grid>
    </Grid>
  );
}
