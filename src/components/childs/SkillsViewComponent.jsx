import React from 'react';
import { DESCRIPTION_COLOR } from '../../info/ColorUtils';
import '../styles/components/SkillsViewStyle.scss';

export default function SkillsViewComponent({ skillItem }) {
  return (
    <div className={"justify-center"}>
      <div style={{
        padding: '1.5em',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: DESCRIPTION_COLOR,
        borderRadius: '10px',
      }}>
        <img alt={skillItem.name} src={skillItem.icon} loading="lazy" width="50px" height="50px" />
        <h3 className="SkillsItemTitle pt-5">{skillItem.name}</h3>
        <p
          className="SkillsItemDescriptionBig"
          style={{
            color: DESCRIPTION_COLOR,
            height: '150px',
            fontSize: 'small',
            paddingTop: '5px',
          }}>
          {skillItem.description}
        </p>
        <p className="SkillsItemDescription truncate" style={{ color: DESCRIPTION_COLOR, fontSize: 'small' }}>{skillItem.tags}</p>
      </div>
    </div>
  );
}
