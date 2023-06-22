import React from 'react';
import logo from './assets/img/logo.png';

function App() {
      <header className="header">
        <div className="header__container container">
          <div className="header__logo logo">
            <img src={logo} alt="логотип" className="logo__img" />
            <p className="logo__text">Simpl. Система рекрутинга</p>
          </div>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item nav__item--active">
                <a href="#" className="nav__link">
                  Все резюме
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Загрузить резюме
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Мой профиль
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

}

export default App;
