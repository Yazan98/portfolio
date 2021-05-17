import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function ProjectPreviewComponent({
  image = '', name = '', preview = '', createdAt = '', onClickCallback, theme,
}) {
  const imageRef = React.useRef(null);
  const callback = React.useCallback((targetName = '') => {
    onClickCallback(targetName);
  }, [imageRef]);
  return (
    <ComponentLayout>
      <div className="ProjectPreviewComponent">
        <div className="Content">
          <div className="ImageContainer">
            <img src={image} ref={imageRef} height="400" alt={name} loading="eager" onClick={() => callback(name)} />
          </div>
          <div className="Texts">
            <p className={`Date ${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>
              Created At :
              {createdAt}
            </p>
            <h3 className={`${theme ? 'TextTitleBlack' : 'TextTitleLight'}`}>{name}</h3>
            <p className={`${theme ? 'TextDescriptionBlack' : 'TextDescriptionLight'}`}>{preview}</p>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export const ProjectPreviewViewComponent = React.memo(ProjectPreviewComponent);
