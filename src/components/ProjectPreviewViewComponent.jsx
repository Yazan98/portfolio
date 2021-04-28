import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';

export default function ProjectPreviewComponent({
  image = '', name = '', preview = '', createdAt = '', onClickCallback,
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
            <img src="/src/images/all_preview.webp" ref={imageRef} height="400" alt={name} loading="eager" onClick={() => callback(name)} />
          </div>
          <div className="Texts">
            <p className="Date">
              Created At :
              {createdAt}
            </p>
            <h3>{name}</h3>
            <p>{preview}</p>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
}

export const ProjectPreviewViewComponent = React.memo(ProjectPreviewComponent);
