import React from 'react';

export default function PortfolioContainer({ children, className }) {
  return (
    <div className={`Container ${className}`}>
      {children}
    </div>
  );
}
