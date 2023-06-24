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
      </div>
    </main>
  );
}

export default Profile;
