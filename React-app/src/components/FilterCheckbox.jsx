import React from 'react';
import classNames from 'classnames';

function FilterCheckbox({ title, items }) {
  const [visibleItem, setVisibleItem] = React.useState(false);

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
          <label className="filter__label" key={item}>
            <input
              type="checkbox"
              className="filter__input input-checkbox"
              name={title}
              value={item}
              key={item}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default FilterCheckbox;
