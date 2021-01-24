import AbstractView from './abstract.js';

const createFilterItemTemplate = (filter, currentFilterType) => {
  const {type, name} = filter;

  return (
    `<div class="trip-filters__filter">
      <input
        id="filter-${type}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${type === currentFilterType ? `checked` : ``}
      />
      <label class="trip-filters__filter-label" for="filter-${type}">${name}</label>
    </div>`
  );
};

const createFiltersTemplate = (filters, currentFilterType) => {
  const filterItemsTemplate = filters
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join(``);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filterItemsTemplate}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class TripFilters extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._element = null;
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._onfilterTypeChange = this._onfilterTypeChange.bind(this);
  }

  _getTemplate() {
    return createFiltersTemplate(this._filters, this._currentFilter);
  }

  _onfilterTypeChange(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }

  setOnFilterTypeChange(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._onfilterTypeChange);
  }
}
