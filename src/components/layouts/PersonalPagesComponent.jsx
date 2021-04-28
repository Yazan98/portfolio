import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import { FooterViewComponent } from '../FooterComponent';

export default function PersonalPagesComponent({ children, title, className }) {
  document.title = title;
  return (
    <PortfolioContainer className={className}>
      {children}
      <FooterViewComponent />
    </PortfolioContainer>
  );
}

export const PersonalPagesViewComponent = React.memo(PersonalPagesComponent);
