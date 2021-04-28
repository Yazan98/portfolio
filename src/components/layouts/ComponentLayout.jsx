import React from 'react';
import PortfolioContainer from './PortfolioContainer';

export default function ComponentLayout({ children }) {
  return (
    <PortfolioContainer>
      {children}
    </PortfolioContainer>
  );
}
