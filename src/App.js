import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Driver from './pages/Driver';
import User from './pages/Passenger';
import Who from './pages/Who';

function App() {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      showHeader();
    };
  } , []);

  const showHeader = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  }

  return (
    <>
      <Header headerActive={ headerActive } />
      <Routes>
        <Route path='/lev' element={ <Home /> } />
        <Route path='/help' element={ <Help /> } />
        <Route path='/driver' element={ <Driver /> } />
        <Route path='/passenger' element={ <User /> } />
        <Route path='/who' element={ <Who /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
