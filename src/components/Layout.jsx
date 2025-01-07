import React from 'react';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Header } from './Header';


export const Layout=({ children })=> {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="container my-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
