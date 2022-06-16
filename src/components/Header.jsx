import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import logoLight from '../images/logo-light.svg';
import styles from '../styles/Header.module.css';
import HeaderMenu from './HeaderMenu';
import { disableScroll } from '../helpers/scrollHelper';

function Header({ headerActive }) {
  const { container, lev, active, menu } = styles;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoClickHandler = () => {
    navigate('/lev');
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', () => {
      checkIsMobile();
    });
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth <= 764) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const openMenu = () => {
    disableScroll();
    setIsMenuOpen(true);
  };

  return (
    <header className={`${container} ${headerActive && active}`}>
      <img
        src={headerActive ? logo : logoLight}
        alt='Logo'
        onClick={logoClickHandler}
      />
      {isMobile ? (
        <>
          <HeaderMenu
            open={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            lev={lev}
          />
          {isMenuOpen ? (
            <>
              <canvas />
            </>
          ) : (
            <>
              <i
                className={`bi bi-list ${menu} ${headerActive && active}`}
                onClick={openMenu}
              />
            </>
          )}
        </>
      ) : (
        <nav>
          <Link to='/driver'>Motorista</Link>
          <Link to='/passenger'>Passageiro</Link>
          <Link to='/who'>Quem somos</Link>
          {/* <Link to='/help'>Ajuda</Link> */}
          <Link to='/lev' className={lev}>
            Quero ser motorista Lev
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
