import React from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo logo">
          <img src={logo} alt="логотип" className="logo__img" />
          <p className="logo__text">Simpl. Система рекрутинга</p>
        </div>
        <nav className="header__nav">
          <ul className="nav__list">
            <Link to="/">
              <li className="nav__item nav__item--active">Все резюме</li>
            </Link>
            <Link to="/upload">
              <li className="nav__item">Загрузить резюме</li>
            </Link>
            <Link to="/sign-in">
              <li className="nav__item">Вход</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
