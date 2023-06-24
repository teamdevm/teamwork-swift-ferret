import React from 'react';
import { FilterCheckbox, FilterText } from './index.js';

function Filters() {
  return (
    <section className="main__filter filter">
      <h2 className="filter__title">Фильтры</h2>
      <form className="filter__form">
        <FilterCheckbox title="Вакансия" items={['Разработчик IOS', 'Дизайнер', 'HR']} />
        <FilterText title="Дата рождения" items={['От', 'До']} type="date" />
        <FilterText title="ФИО" items={['Имя', 'Фамилия', 'Отчество']} type="text" />

        <FilterCheckbox title="Пол" items={['Мужской', 'Женский']} />
        <FilterCheckbox
          title="Город"
          items={['Пермь', 'Москва', 'Санкт-Петербург', 'Екатеринбург']}
        />
        <FilterCheckbox title="Университет" items={['ПГНИУ', 'ПНИПУ', 'ПГМУ', 'ПГГПУ']} />
        <FilterCheckbox
          title="Статус"
          items={['Новый', 'Оффер', 'Переписка', 'Первичное собеседование с hr', 'Выход на работу']}
        />
        <button className="filter__button button" type="submit">
          Применить
        </button>
      </form>
    </section>
  );
}

export default Filters;
