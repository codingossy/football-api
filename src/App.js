import React, { useState } from 'react';
import Contents from './components/Contents';
import Footer from './components/Footer';
import Header from './components/Navbar/Header';
import MobileNav from './components/Navbar/MobileNav';



function App() {

  const [navMobile, setNavMobile] = useState(false)
  return (

    <div className='App'>
      <Header setNavMobile={setNavMobile}/>

      {/* mobile */}
      <div className={`${navMobile ? '-left-0' : '-left-full'} fixed -top-2  bottom-0 z-30 w-full transition-all ease-in-out duration-500`}>
      <MobileNav setNavMobile={setNavMobile}/>
    </div>
      {/* mobile ends */}

      <Contents />

      <Footer />
     
    </div>
  );
}

export default App;
