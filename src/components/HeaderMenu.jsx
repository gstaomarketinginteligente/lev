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
        <Link to='/who'>Quem somos</Link>
        <Link to='/driver'>Motorista</Link>
        <Link to='/passenger'>Passageiro</Link>
        <Link to='/security'>Segurança</Link>
        <Link to='/help'>Ajuda</Link>
        <Link to='/lev' className={ `${lev} ${levMobile}` }>
          Quero ser motorista Lev
        </Link>
      </nav>
    </div>
  );
}

export default HeaderMenu;
