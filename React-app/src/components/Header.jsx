import React from 'react';
import logo from '../assets/img/logo.png';
import classNames from 'classnames';
import { Link, useHref } from 'react-router-dom';

function Header() {
  const history = useHref();

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
              <li
                className={classNames('nav__item', {
                  active: history === '/',
                  // desabled: !sizes.includes(size),
                })}
              >
                Все резюме
              </li>
            </Link>
            <Link to="/upload">
              <li
                className={classNames('nav__item', {
                  active: history === '/upload',
                  // desabled: !sizes.includes(size),
                })}
              >
                Загрузить резюме
              </li>
            </Link>
            <Link to="/sign-in">
              <li
                className={classNames('nav__item', {
                  active: history === '/sign-in',
                  // desabled: !sizes.includes(size),
                })}
              >
                Вход
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
