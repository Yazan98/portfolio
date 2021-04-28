import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import FooterComponent from '../FooterComponent';

export default function PersonalPagesComponent({ children, title, className }) {
  document.title = title;
  return (
    <PortfolioContainer className={className}>
      {children}
      <FooterComponent />
    </PortfolioContainer>
  );
}

export const PersonalPagesViewComponent = React.memo(PersonalPagesComponent);
