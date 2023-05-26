import React from 'react';
import NavBar from './NavBar';
import MiniFooter from './MiniFooter';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <MiniFooter />
    </div>
  );
};

export default Layout;
