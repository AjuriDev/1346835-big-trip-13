import AbstractView from './abstract.js';
import {SortType} from '../const.js';

const createSortTemplate = (currentSortType) => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" ${currentSortType === SortType.DEFAULT ? `checked` : ``}>
        <label class="trip-sort__btn" for="sort-day" data-sort-type="${SortType.DEFAULT}">Day</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" ${currentSortType === SortType.TIME_UP ? `checked` : ``}>
        <label class="trip-sort__btn" for="sort-time" data-sort-type="${SortType.TIME_UP}">Time</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" ${currentSortType === SortType.PRICE_UP ? `checked` : ``}>
        <label class="trip-sort__btn" for="sort-price" data-sort-type="${SortType.PRICE_UP}">Price</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--offer">
        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
      </div>
    </form>`
  );
};

export default class TripSort extends AbstractView {
  constructor(currentSortType) {
    super();

    this._currentSortType = currentSortType;
    this._element = null;

    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }

  _getTemplate() {
    return createSortTemplate(this._currentSortType);
  }

  _onSortTypeChange(evt) {
    if (evt.target.dataset.sortType === undefined) {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setOnSortTypeChange(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._onSortTypeChange);
  }
}
