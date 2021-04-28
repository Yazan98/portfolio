import React from 'react';
import ComponentLayout from './layouts/ComponentLayout';
import BackendModelImage from '../images/backend_preview.png';

export default function HomeBigAreaImagesComponent() {
  return (
    <ComponentLayout>
      <div className="HomeBigAreaContainer">
        <div className="BackendItemContainer">
          <div className="Content">
            <h4>Backend Development</h4>
            <p>
              Build Restful Api With Java, Javascript,
              PHP Using (SpringBoot (Java, Kotlin), Nest.js, Laravel)
              Based on Json Response, Auth, Mysql, NoSql
            </p>
          </div>
          <img src={BackendModelImage} alt="Backend Model" />
        </div>
      </div>
    </ComponentLayout>
  );
}

export const HomeBigAreaImagesViewComponent = React.memo(HomeBigAreaImagesComponent);
