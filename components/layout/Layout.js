import React from 'react';
import { useRouter } from 'next/router';

import Navbar from './Navbar';
import Footer from './Footer';
import classes from './Layout.module.scss';

function Layout({ children }) {
  const router = useRouter();
  if (
    router.pathname !== '/' 
    &&router.pathname !== '/register' 
    &&router.pathname !== '/login'
 ){
    return (
      <>
        <div className={classes.container}>
          <Navbar />
          {children}
        </div>
        <Footer />
      </>
    );
  }
  else {
    return [children];
  }
}

export default Layout;
