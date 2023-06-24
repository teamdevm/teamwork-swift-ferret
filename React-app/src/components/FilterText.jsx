import React from 'react';
import classNames from 'classnames';

function FilterText({ title, items, type }) {
  const [visibleItem, setVisibleItem] = React.useState();

  const toggleVisibleItem = () => {
    setVisibleItem(!visibleItem);
  };

  return (
    <fieldset className="filter__fieldset">
      <legend className="filter__legend">
        <button type="button" className="filter__toggle" onClick={toggleVisibleItem}>
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
          {title}
        </button>
      </legend>
      <div
        className={classNames('filter__content', {
          visible: visibleItem,
        })}
      >
        {items.map((item) => (
          <div key={item}>
            <label className="filter__label" htmlFor={item}>
              {item}:
            </label>
            <input className="filter__input" type={type} id={item} name={item} />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default FilterText;
