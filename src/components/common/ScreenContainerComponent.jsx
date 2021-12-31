import React from 'react';

export default function ScreenContainerComponent({ children, title, className }) {
  document.title = title;
  window.scrollTo(0, 0);
  return (
    <section className={className}>
      {children}
    </section>
  );
}
