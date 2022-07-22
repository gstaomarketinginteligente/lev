import React from 'react';
import { Link } from 'react-router-dom';
import { enableScroll } from '../helpers/scrollHelper';
import styles from '../styles/HeaderMenu.module.css';

function HeaderMenu({ lev, setIsMenuOpen, open }) {
  const { container, nav, levMobile, inactive } = styles;

  const closeMenu = () => {
    enableScroll();
    setIsMenuOpen(false);
  };

  return (
    <div className={ `${container} ${!open && inactive}` }>
      <i className="bi bi-x" onClick={ closeMenu }></i>
      <nav className={ nav }>
        <Link onClick={closeMenu} to='/driver'>Motorista</Link>
        <Link onClick={closeMenu} to='/passenger'>Passageiro</Link>
        <Link onClick={closeMenu} to='/who'>Quem somos</Link>
        <Link onClick={closeMenu} to='/help'>Ajuda</Link>
        <Link onClick={closeMenu} to='/lev' className={ `${lev} ${levMobile}` }>
          Quero ser motorista Lev
        </Link>
      </nav>
    </div>
  );
}

export default HeaderMenu;
