import React from 'react';

export default function ScreenContainerComponent({ children, title, className }) {
  document.title = title;
  return (
    <section className={className}>
      {children}
    </section>
  );
}
