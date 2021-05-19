import React from 'react';
import GithubImage from '../images/github-logo.svg';
import GithubImageLight from '../images/github-logo_light.svg';
import LinkImage from '../images/link.svg';
import LinkImageLight from '../images/link_light.svg';

export const ProjectCardComponent = ({
  icon, name, description, filter, icons = [], isOpenSource, theme,
}) => (
  <div className={`ProjectCardContainer ${theme ? 'BlackBorder' : 'LightBorder'}`}>
    <img alt={name} loading="eager" src={icon} width="40px" height="40px" />
    <h3 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>{name}</h3>
    <p className="Description">{description}</p>
    <div className="Filters">
      <p className="Filter">{filter}</p>
      <p className="Filter">{isOpenSource ? 'Open Source' : 'Closed Source'}</p>
    </div>
    <div className="Links">
      {icons.map((item) => {
        let iconLink;
        if (item.type === 'Github') {
          iconLink = theme ? GithubImage : GithubImageLight;
        } else {
          iconLink = theme ? LinkImage : LinkImageLight;
        }
        return <a target="_blank" rel="noreferrer" href={item.link}><img alt="Link" height="20px" width="20px" src={iconLink} /></a>;
      })}
    </div>
  </div>
);

export const ProjectCardViewComponent = React.memo(ProjectCardComponent);
