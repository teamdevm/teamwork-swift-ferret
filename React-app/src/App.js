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

          <section className="main__settings">
            <div className="main__find-count">Найдено: 13</div>
            <div className="main__select">
              <label className="main__label">
                <input
                  type="checkbox"
                  className="main__input input-checkbox"
                  name="select all"
                  value="all"
                />
                <span>Выбрать всех</span>
              </label>
              <button className="main__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-input"
                >
                  <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M2 15h10" />
                  <path d="m9 18 3-3-3-3" />
                </svg>
                Выгрузить в Exel
              </button>
            </div>
            <div className="main__sort sort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <p className="sort__title">
                Сортировать по: <span>ФИО</span>
              </p>
              <ul className="sort__list sort__list--hidden">
                <li className="sort__item sort__item--active">ФИО</li>
                <li className="sort__item">статусу</li>
                <li className="sort__item">вакансии</li>
                <li className="sort__item">дате добавления</li>
              </ul>
            </div>
          </section>
}

export default App;
