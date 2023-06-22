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
            <section className="main__filter filter">
              <h2 className="filter__title">Фильтры</h2>
              <form className="filter__form">
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      Вакансия
                    </button>
                  </legend>
                  <div className="filter__content filter__content--visible">
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        checked
                        className="filter__input input-checkbox"
                        name="vacancy"
                        value="developer"
                      />
                      <span>Разработчик IOS</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="vacancy"
                        value="designer"
                      />
                      <span>Дизайнер</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        checked
                        className="filter__input input-checkbox"
                        name="vacancy"
                        value="manager"
                      />
                      <span>HR</span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      ФИО
                    </button>
                  </legend>
                  <div className="filter__content">
                    <label className="filter__label" htmlFor="surname">
                      Фамилия:
                    </label>
                    <input className="filter__input" type="text" id="surname" name="surname" />

                    <label className="filter__label" htmlFor="name">
                      Имя:
                    </label>
                    <input className="filter__input" type="text" id="name" name="name" />

                    <label className="filter__label" htmlFor="patronymic">
                      Отчество:
                    </label>
                    <input
                      className="filter__input"
                      type="text"
                      id="patronymic"
                      name="patronymic"
                    />
                  </div>
                </fieldset>
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      <span>Дата рождения</span>
                    </button>
                  </legend>
                  <div className="filter__content">
                    <label className="filter__label" htmlFor="birthdate-from">
                      От:
                    </label>
                    <input
                      className="filter__input"
                      type="date"
                      id="birthdate-from"
                      name="birthdate-from"
                    />
                    <label className="filter__label" htmlFor="birthdate-to">
                      До:
                    </label>
                    <input
                      className="filter__input"
                      type="date"
                      id="birthdate-to"
                      name="birthdate-to"
                    />
                  </div>
                </fieldset>
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      Пол
                    </button>
                  </legend>
                  <div className="filter__content">
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="gender"
                        value="male"
                      />
                      <span>Мужской</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="gender"
                        value="female"
                      />
                      <span>Женский</span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      Город
                    </button>
                  </legend>
                  <div className="filter__content">
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="city"
                        value="moscow"
                      />
                      <span>Пермь</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="city"
                        value="moscow"
                      />
                      <span>Москва</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="city"
                        value="spb"
                      />
                      <span>Санкт-Петербург</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="city"
                        value="ekb"
                      />
                      <span>Екатеринбург</span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      Университет
                    </button>
                  </legend>
                  <div className="filter__content">
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="university"
                        value="PSU"
                      />
                      <span>ПГНИУ</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="university"
                        value="PSTU"
                      />
                      <span>ПНИПУ</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="university"
                        value="PSTU"
                      />
                      <span>ПГМУ</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="university"
                        value="PSTU"
                      />
                      <span>ПГГПУ</span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="filter__fieldset">
                  <legend className="filter__legend">
                    <button type="button" className="filter__toggle">
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
                      Статус
                    </button>
                  </legend>
                  <div className="filter__content">
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="status"
                        value="new"
                      />
                      <span>Новый</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input input-checkbox"
                        name="status"
                        value="оffer"
                      />
                      <span>Оффер</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input"
                        name="status"
                        value="correspondence"
                      />
                      <span>Переписка</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input"
                        name="status"
                        value="primary interview with HR"
                      />
                      <span>Первичное собеседованиес&nbsp;hr</span>
                    </label>
                    <label className="filter__label">
                      <input
                        type="checkbox"
                        className="filter__input"
                        name="status"
                        value="going to work"
                      />
                      <span>Выход на&nbsp;работу</span>
                    </label>
                  </div>
                </fieldset>
                <button className="filter__button" type="submit">
                  Применить
                </button>
              </form>
            </section>
}

export default App;
