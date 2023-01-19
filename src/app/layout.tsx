import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
