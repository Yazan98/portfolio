import React from 'react';
import '../styles/fragments/footer_style.scss';
import { BlueLineComponent } from './BlueLineComponent';
import ComponentLayout from './layouts/ComponentLayout';

export default function FooterComponent() {
  return (
    <ComponentLayout>
      <footer>
        <p>
          Designed & Built By
          <strong> Yazan Tarifi</strong>
        </p>
        <p>Personal Website (CV , Portfolio) Created At 2021</p>
      </footer>
      <BlueLineComponent />
    </ComponentLayout>
  );
}

export const FooterViewComponent = React.memo(FooterComponent);
