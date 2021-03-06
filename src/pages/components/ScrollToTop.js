import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, [location]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
