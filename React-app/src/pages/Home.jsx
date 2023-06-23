import React from 'react';

import cand1 from '../assets/img/candidate (1).jpg';
import cand2 from '../assets/img/candidate (2).jpg';
import cand3 from '../assets/img/candidate (3).jpg';
import cand4 from '../assets/img/candidate (4).jpg';
import cand5 from '../assets/img/candidate (5).jpg';
import cand6 from '../assets/img/candidate (6).jpg';
import cand7 from '../assets/img/candidate (7).jpg';
import cand8 from '../assets/img/candidate (8).jpg';

function Home() {
  return (
    <main className="main">
      <div className="main__container container">
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
        <div className="main__center-part">
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
                <div className="filter__content filter__content--visible">
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
                  <input className="filter__input" type="text" id="patronymic" name="patronymic" />
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
                <div className="filter__content filter__content--visible">
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
                <div className="filter__content filter__content--visible">
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
                <div className="filter__content filter__content--visible">
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
                <div className="filter__content filter__content--visible">
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
                <div className="filter__content filter__content--visible">
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
              <button className="filter__button button" type="submit">
                Применить
              </button>
            </form>
          </section>
          <section className="main__content content">
            <h2 className="main__title">Кандидаты</h2>
            <div className="main__candidate-cards candidate-cards">
              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Анисова Марина</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / Android</p>
                  <img className="candidate-card__img" src={cand1} alt="Candidate 1" />
                  <p className="candidate-card__status">новый</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>
                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Винокурова Ксения</h3>
                  <p className="candidate-card__job-title">HR</p>
                  <img className="candidate-card__img" src={cand2} alt="Candidate 2" />
                  <p className="candidate-card__status">выход на&nbsp;работу</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Сергеев Роман</h3>
                  <p className="candidate-card__job-title">Разработчик IOS</p>
                  <img className="candidate-card__img" src={cand3} alt="Candidate 3" />
                  <p className="candidate-card__status">новый</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Попов Егор</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / маркетолог</p>
                  <img className="candidate-card__img" src={cand4} alt="Candidate 4" />
                  <p className="candidate-card__status">первичное собеседование с&nbsp;hr</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Львов Фёдор</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / HR</p>
                  <img className="candidate-card__img" src={cand5} alt="Candidate 5" />
                  <p className="candidate-card__status">оффер</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Сергеев Игнат</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / Android</p>
                  <img className="candidate-card__img" src={cand6} alt="Candidate 6" />
                  <p className="candidate-card__status">телефонное интервью</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Смирнов Демид</h3>
                  <p className="candidate-card__job-title">Разработчик IOS</p>
                  <img className="candidate-card__img" src={cand7} alt="Candidate 7" />
                  <p className="candidate-card__status">первичное собеседование с&nbsp;hr</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Федотов Александр</h3>
                  <p className="candidate-card__job-title">Разработчик IOS</p>
                  <img className="candidate-card__img" src={cand8} alt="Candidate 8" />
                  <p className="candidate-card__status">переписка</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Анисова Марина</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / Android</p>
                  <img className="candidate-card__img" src={cand1} alt="Candidate 1" />
                  <p className="candidate-card__status">новый</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Винокурова Ксения</h3>
                  <p className="candidate-card__job-title">HR</p>
                  <img className="candidate-card__img" src={cand2} alt="Candidate 2" />
                  <p className="candidate-card__status">выход на&nbsp;работу</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Сергеев Роман</h3>
                  <p className="candidate-card__job-title">Разработчик IOS</p>
                  <img className="candidate-card__img" src={cand3} alt="Candidate 3" />
                  <p className="candidate-card__status">новый</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Попов Егор</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / маркетолог</p>
                  <img className="candidate-card__img" src={cand4} alt="Candidate 4" />
                  <p className="candidate-card__status">первичное собеседование с&nbsp;hr</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>

              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Львов Фёдор</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / HR</p>
                  <img className="candidate-card__img" src={cand5} alt="Candidate 5" />
                  <p className="candidate-card__status">оффер</p>
                  <div className="candidate-card__contacts">
                    <a className="candidate-card__phone" href="tel:+70000000000" target="_blank">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p>+7 (000) 000 00 00</p>
                    </a>
                    <a
                      className="candidate-card__mail"
                      href="mailto:new_mail@mail.ru"
                      target="_blank"
                    >
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <p>new_mail@mail.ru</p>
                    </a>
                  </div>
                </div>

                <label className="candidate-card__label">
                  <input
                    type="checkbox"
                    className="candidate-card__input input-checkbox"
                    name="select"
                  />
                  <span>Выбрать</span>
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
