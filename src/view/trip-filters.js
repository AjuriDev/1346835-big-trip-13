import AbstractView from './abstract.js';

const createFilterItemTemplate = (filter, currentFilterType, filterCondition) => {
  const {type, name} = filter;
  const isDisabled = !filterCondition[type];

  return (
    `<div class="trip-filters__filter">
      <input
        id="filter-${type}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${type === currentFilterType ? `checked` : ``}
        ${isDisabled ? `disabled` : ``}
      />
      <label class="trip-filters__filter-label" for="filter-${type}">${name}</label>
    </div>`
  );
};

const createFiltersTemplate = (filters, currentFilterType, filterCondition) => {
  const filterItemsTemplate = filters
    .map((filter) => createFilterItemTemplate(filter, currentFilterType, filterCondition))
    .join(``);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filterItemsTemplate}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class TripFilters extends AbstractView {
  constructor(filters, currentFilterType, filterCondition) {
    super();
    this._element = null;
    this._filters = filters;
    this._currentFilter = currentFilterType;
    this._filterCondition = filterCondition;

    this._onFilterTypeChange = this._onFilterTypeChange.bind(this);
  }

  _getTemplate() {
    return createFiltersTemplate(this._filters, this._currentFilter, this._filterCondition);
  }

  _onFilterTypeChange(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }

  setOnFilterTypeChange(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._onFilterTypeChange);
  }
}
