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
  const [persons, setPersons] = React.useState([]);
  const [selectedSort, setSelectedSort] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3000/teamwork-swift-ferret/data.json')
      .then((resp) => resp.json())
      .then((json) => setPersons(json.persons));
  }, []);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPersons([...persons].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  // async function connect() {
  //   fetch('http://localhost:5000/emploee')
  //     .then((response) => response)
  //     .then((commits) => console.log(commits));
  // }

  // const addPerson = () => {
  //   let newElem = {
  //     name: 'Рябова Полина Игоревна',
  //     age: 20,
  //     sex: 'female',
  //     email: 'polinarybova.2@gmail.com',
  //     phone: '+79194997504',
  //     birthdate: '19.12.2002',
  //     country: 'РФ',
  //     city: 'Пермь',
  //     status: 'отправка оффера',
  //     skills: 'Angular, C#, CSS',
  //     education: [
  //       {
  //         dates: '2020 - 2024',
  //         university: 'ПГНИУ',
  //         faculty: 'механико-математический факультет',
  //         specialization: 'фундаментальная информатика и информационные технологии',
  //       },
  //     ],

  //     vacancy: 'React разработчик',
  //   };
  //   setPersons([...persons, newElem]);
  //   fetch('http://localhost:3000/teamwork-swift-ferret/data.json', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify(persons),
  //   });
  // };

  return (
    <main className="main">
      <div className="main__container container">
        {/* <button className="button" onClick={connect}>
          соединиться
        </button> */}
        {/* <button className="button" onClick={change}>
          добавить
        </button> */}
        <section className="main__settings">
          <div className="main__find-count">Найдено: {persons.length}</div>
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
              {persons.map((person, index) => (
                <PersonCard key={`${person.name}_${index}`} obj={person} photo={cand3} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
