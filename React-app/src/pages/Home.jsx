import React from 'react';
import data from '../assets/data.json';
import { Filters, PersonCard, SortPopup } from '../components/index';

function Home() {
  const [persons, setPersons] = React.useState(data.persons);
  const [selectedSort, setSelectedSort] = React.useState('');

  const [filteredPersons, setFilteredPersons] = React.useState(persons);

  const allValuesFilters = { city: [], status: [], vacancy: [], university: [], skills: [] };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setFilteredPersons([...filteredPersons].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  persons.forEach((person) => {
    for (let field in person) {
      if (field === 'vacancy' || field === 'skills') {
        person[field].split(', ').forEach((item) => {
          if (!allValuesFilters[field].includes(item)) allValuesFilters[field].push(item);
        });
      }

      if (field === 'education') {
        for (let item of person[field]) {
          if (
            !allValuesFilters['university'].includes(item.university) &&
            item.university !== undefined
          )
            allValuesFilters['university'].push(item.university);
        }
      }

      if (field === 'status' || field === 'city') {
        if (!allValuesFilters[field].includes(person[field]))
          allValuesFilters[field].push(person[field]);
      }
    }
  });

  const filterPosts = (selectedFields) => {
    setFilteredPersons(
      [...persons].filter((item) => {
        let statusIsOk = true,
          cityIsOk = true,
          universityIsOk = true,
          vacancyIsOk = true,
          sexIsOk = true;
        if (needToCheck(selectedFields.status))
          statusIsOk = (item.status && selectedFields.status[item.status]) || false;

        if (needToCheck(selectedFields.university)) {
          let allUni = [];
          item.education.forEach((educat) => {
            allUni.push(educat.university);
          });
          universityIsOk = false;
          allUni.forEach((itemUni) => {
            if (selectedFields.university[itemUni]) universityIsOk = true;
          });
        }

        if (needToCheck(selectedFields.city))
          cityIsOk = (item.city && selectedFields.city[item.city]) || false;

        if (needToCheck(selectedFields.vacancy)) {
          vacancyIsOk = false;
          item.vacancy.split(', ').forEach((itemVacancy) => {
            if (selectedFields.vacancy[itemVacancy]) vacancyIsOk = true;
          });
        }

        if (needToCheck(selectedFields.sex)) {
          sexIsOk = (item.sex && selectedFields.sex[item.sex]) || false;
        }
        return statusIsOk && cityIsOk && vacancyIsOk && sexIsOk && universityIsOk;
      })
    );
  };

  const needToCheck = (fieldToCheck) => {
    if (fieldToCheck === undefined) return false;
    else
      for (let elem in fieldToCheck) {
        if (fieldToCheck[elem] === true) return true;
      }
    return false;
  };

  return (
    <main className="main">
      <div className="main__container container">
        <section className="main__settings">
          <div className="main__find-count">Найдено: {filteredPersons.length}</div>
          <SortPopup
            value={selectedSort}
            onChange={sortPosts}
            items={[
              {
                value: 'name',
                name: 'ФИО',
              },
              {
                value: 'vacancy',
                name: 'вакансии',
              },
              {
                value: 'status',
                name: 'статусу',
              },
            ]}
          />
        </section>
        <div className="main__center-part">
          <Filters
            values={allValuesFilters}
            onChange={(selectedFields) => filterPosts(selectedFields)}
          />
          <section className="main__content content">
            <h2 className="main__title">Кандидаты</h2>
            <div className="main__candidate-cards candidate-cards">
              {filteredPersons.map((person, index) => (
                <PersonCard key={`${person.name}_${index}`} obj={person} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
