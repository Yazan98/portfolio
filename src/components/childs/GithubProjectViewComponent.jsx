import React from 'react';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';
import GithubIcon from '../images/github-logo.svg';
import LinkIcon from '../images/link.svg';
import ReactGA from "react-ga";

function getSingleLinkItem(link) {
  return (
    <div className={"flex justify-end"}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={link.includes('github.com') ? GithubIcon : LinkIcon} alt="Github Repo" width="20px" height="20px" loading="lazy" style={{ marginLeft: '10px', cursor: 'pointer' }} />
      </a>
    </div>
  );
}

function getMutlipleLinksItem(links = []) {
  return (
    <div className={"flex justify-end"}>
      {links ? links.map((item) => (item.includes('github.com')
        ? (
          <a href={item} target="_blank" rel="noreferrer" onClick={() => {
              ReactGA.event({
                  category: "GithubProject",
                  action: "Project - " + item,
                  label: "Project Button - GithubProject"
              })
          }}>
            <img src={GithubIcon} alt="Github Repo" width="20px" height="20px" loading="lazy" style={{ marginLeft: '10px', cursor: 'pointer' }} />
          </a>
        )
        : (
          <a href={item} target="_blank" rel="noreferrer">
            <img src={LinkIcon} alt="Github Repo" width="20px" height="20px" loading="lazy" style={{ marginLeft: '10px', cursor: 'pointer' }} />
          </a>
        ))) : null}
    </div>
  );
}

function getLinksView(links) {
  return links.length === 1 ? getSingleLinkItem(links[0]) : getMutlipleLinksItem(links);
}

export default function GithubProjectViewComponent({ project }) {
  return (
    <div className="ProjectGithubItem justify-center rounded-xl border-2 p-4 ">
      <p style={{ color: DESCRIPTION_COLOR }}>Github</p>
      <h3>{project.name}</h3>
      <p style={{
        color: DESCRIPTION_COLOR,
        fontSize: 'small',
        height: '120px',
        marginTop: '1em',
      }}>
        {project.description}
      </p>
      <hr />
        <div className={"flex justify-between p-2"}>
            <p className={"flex flex-1 truncate"} style={{ color: DESCRIPTION_COLOR, fontSize: 'small' }}>{project.hint}</p>
            {getLinksView(project.links)}
        </div>
    </div>
  );
}
