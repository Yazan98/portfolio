import React from 'react';
import { isApplicationLightTheme } from '../../info/ThemeInfo';

export default function PortfolioContainer({ children, className }) {
  const [theme, setTheme] = React.useState(isApplicationLightTheme);
  return (
    <div className={`Container ${className} ${theme ? 'ContainerBackgroundDark' : 'ContainerBackgroundLight'}`}>
      {children}
    </div>
  );
}
