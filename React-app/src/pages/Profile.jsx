import React from 'react';
import { Link } from 'react-router-dom';

import recr1 from '../assets/img/recruter (1).jpg';
import cand6 from '../assets/img/candidate (6).jpg';

import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';
import telegram from '../assets/img/telegram.png';
import viber from '../assets/img/viber.png';
import whatsapp from '../assets/img/whatsapp.png';

function Profile() {
  return (
    <main className="main">
      <div className="main__container container">
        <Link to="/" className="main__button-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>назад к списку резюме</span>
        </Link>
            <div className="resume__contacts">
              <h3 className="resume__title">Контакты</h3>
              <div className="contacts">
                <div className="contacts__item">
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
                    class="lucide lucide-building-2"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  г. Пермь
                </div>
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
              <ul className="resume__social social">
                <li className="social__item">
                  <a href="" className="social__link" target="_blank">
                    <img src={github} alt="" />
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link" target="_blank">
                    <img src={linkedin} alt="" />
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link" target="_blank">
                    <img src={whatsapp} alt="" />
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link" target="_blank">
                    <img src={telegram} alt="" />
                  </a>
                </li>
                <li className="social__item">
                  <a href="" className="social__link" target="_blank">
                    <img src={viber} alt="" />
                  </a>
                </li>
              </ul>
            </div>
      </div>
    </main>
  );
}

export default Profile;
