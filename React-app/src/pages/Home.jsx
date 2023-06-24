import React from 'react';
import { Link } from 'react-router-dom';

import cand1 from '../assets/img/candidate (1).jpg';
import cand2 from '../assets/img/candidate (2).jpg';
import cand3 from '../assets/img/candidate (3).jpg';
import cand4 from '../assets/img/candidate (4).jpg';
import cand5 from '../assets/img/candidate (5).jpg';
import cand6 from '../assets/img/candidate (6).jpg';
import cand7 from '../assets/img/candidate (7).jpg';
import cand8 from '../assets/img/candidate (8).jpg';
import { Filters, SortPopup } from '../components';

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
          <SortPopup items={['ФИО', 'статусу', 'вакансии', 'дате добавления']} />
        </section>
        <div className="main__center-part">
          <Filters />
          <section className="main__content content">
            <h2 className="main__title">Кандидаты</h2>
            <div className="main__candidate-cards candidate-cards">
              <div className="candidate-card">
                <div className="candidate-card__info">
                  <h3 className="candidate-card__name">Анисова Марина</h3>
                  <p className="candidate-card__job-title">Разработчик IOS / Android</p>
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand1} alt="Candidate 1" />
                  </Link>
                  <p className="candidate-card__status">новый</p>

                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand2} alt="Candidate 2" />
                  </Link>
                  <p className="candidate-card__status">выход на&nbsp;работу</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand3} alt="Candidate 3" />
                  </Link>

                  <p className="candidate-card__status">новый</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand4} alt="Candidate 4" />
                  </Link>

                  <p className="candidate-card__status">первичное собеседование с&nbsp;hr</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand5} alt="Candidate 5" />
                  </Link>

                  <p className="candidate-card__status">оффер</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand6} alt="Candidate 6" />
                  </Link>
                  <p className="candidate-card__status">телефонное интервью</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand7} alt="Candidate 7" />
                  </Link>
                  <p className="candidate-card__status">первичное собеседование с&nbsp;hr</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
                  <Link to="/profile">
                    <img className="candidate-card__img" src={cand8} alt="Candidate 8" />
                  </Link>
                  <p className="candidate-card__status">переписка</p>
                  <div className="candidate-card__contacts contacts">
                    <a className="contacts__item" href="tel:+70000000000" target="_blank">
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
                    <a className="contacts__item" href="mailto:new_mail@mail.ru" target="_blank">
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
