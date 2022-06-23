import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';
import Help from './pages/help';
import Driver from './pages/driver';
import User from './pages/passenger';
import Who from './pages/who';

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.onscroll = function() {
      showHeader();
    };
    navigate('/lev');
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route path='/' element={ <Home /> } />
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
