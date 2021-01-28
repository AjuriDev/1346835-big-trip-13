import dayjs from 'dayjs';
import he from 'he';
import flatpickr from 'flatpickr';
import SmartView from './smart.js';
import {humanizeDate} from '../util/waypoint.js';
import {createWaypointTypeListTemplate} from './type-list.js';
import {createDestinationOptionsTemplate} from './destination-options.js';
import {createOffersSectionTemplate} from './waypoint-offers.js';
import {createDestinationSectionTemplate} from './waypoint-destination.js';
import {getOffers} from '../util/offers.js';
import {getDestination, isValidDestination} from '../util/destination.js';
import {DEFAULT_TYPE, TIME_FORMAT} from '../const.js';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const DEFAULT_DURATION_HOURS = 1;

const BLANK_WAYPOINT = {
  type: DEFAULT_TYPE,
  destination: {
    name: ``,
    description: ``,
    pictures: []
  },
  offers: [],
  date: {
    start: dayjs().toDate(),
    close: dayjs().add(DEFAULT_DURATION_HOURS, `hour`).toDate()
  },
  price: ``,
  isFavorites: false
};

const createRolldownBtnTemplate = () => {
  return (
    `<button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>`
  );
};

const createWaypointEditorTemplate = (data, isCreate, destinationList, offerList) => {

  const {
    type,
    destination,
    offers,
    date: {start: startDate, close: closeDate},
    price,
    isOffers,
    isDisabled,
    isSaving,
    isDeleting
  } = data;
  const typeList = createWaypointTypeListTemplate(type);
  const optionList = createDestinationOptionsTemplate(destinationList);
  const startTime = humanizeDate(startDate, TIME_FORMAT);
  const closeTime = humanizeDate(closeDate, TIME_FORMAT);
  const offersSection = createOffersSectionTemplate(type, offers, isOffers, offerList, isDisabled);
  const destinationSection = createDestinationSectionTemplate(destination);
  const rolldownBtn = !isCreate ? createRolldownBtnTemplate() : ``;
  const close = isCreate ? `Cancel` : `Delete`;
  const closing = isCreate ? `Canceling` : `Deleting`;

  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input
            class="event__type-toggle  visually-hidden"
            id="event-type-toggle-1"
            type="checkbox"
            ${isDisabled ? `disabled` : ``}
          />
          ${typeList}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input
            class="event__input  event__input--destination"
            id="event-destination-1"
            type="text"
            name="event-destination"
            value="${he.encode(destination.name)}"
            list="destination-list-1"
            autocomplete="off"
            required
            ${isDisabled ? `disabled` : ``}
          />
          <datalist id="destination-list-1">
            ${optionList}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input
            class="event__input  event__input--time"
            id="event-start-time-1"
            type="text"
            name="event-start-time"
            value="${he.encode(startTime)}"
            required
            ${isDisabled ? `disabled` : ``}
          />
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input
            class="event__input  event__input--time"
            id="event-end-time-1"
            type="text"
            name="event-end-time"
            value="${he.encode(closeTime)}"
            required
            ${isDisabled ? `disabled` : ``}
          />
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input
            class="event__input  event__input--price"
            id="event-price-1"
            type="number"
            name="event-price"
            value="${price}"
            min="0"
            required
            ${isDisabled ? `disabled` : ``}
          />
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? `disabled` : ``}>${isSaving ? `Saving` : `Save`}</button>
        <button class="event__reset-btn" type="reset" ${isDisabled ? `disabled` : ``}>${isDeleting ? closing : close}</button>
        ${rolldownBtn}
      </header>
      <section class="event__details">

        ${offersSection}

        ${destinationSection}
      </section>
    </form>`
  );
};

export default class WaypointEditor extends SmartView {
  constructor(destinations, offers, waypoint = BLANK_WAYPOINT) {
    super();
    this._offers = offers;
    this._data = this._parseWaypointToData(waypoint);
    this._destinations = destinations;
    this._element = null;
    this._datepickerStart = null;
    this._datepickerEnd = null;
    this._isCreate = waypoint === BLANK_WAYPOINT;

    this._onRolldownBtnClick = this._onRolldownBtnClick.bind(this);
    this._onEditFormSubmit = this._onEditFormSubmit.bind(this);
    this._onTypeChange = this._onTypeChange.bind(this);
    this._onDestinationChange = this._onDestinationChange.bind(this);
    this._onPriceChange = this._onPriceChange.bind(this);
    this._onStartTimeChange = this._onStartTimeChange.bind(this);
    this._onEndTimeChange = this._onEndTimeChange.bind(this);
    this._onOffersListChange = this._onOffersListChange.bind(this);
    this._onDeleteBtnClick = this._onDeleteBtnClick.bind(this);

    this._setInnerHandlers();
  }

  _getTemplate() {
    return createWaypointEditorTemplate(this._data, this._isCreate, this._destinations, this._offers);
  }

  removeElement() {
    super.removeElement();

    if (this._datepickerStart) {
      this._datepickerStart.destroy();
      this._datepickerStart = null;
    }

    if (this._datepickerEnd) {
      this._datepickerEnd.destroy();
      this._datepickerEnd = null;
    }
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setOnEditFormSubmit(this._callback.submit);
    this.setOnDeleteBtnClick(this._callback.deleteClick);

    if (this._isCreate) {
      return;
    }

    this.setOnRolldownBtnClick(this._callback.rolldownClick);
  }

  reset(waypoint) {
    this.updateData(
        this._parseWaypointToData(waypoint)
    );
  }

  _updateOffers(title) {
    let offers = this._data.offers.slice();
    const toggledOffer = offers.findIndex((offer) => offer.title === title);

    if (toggledOffer !== -1) {
      return [
        ...offers.slice(0, toggledOffer),
        ...offers.slice(toggledOffer + 1)
      ];
    }

    offers.unshift(getOffers(this._offers, this._data.type).find((offer) => offer.title === title));
    return offers;
  }

  _parseWaypointToData(waypoint) {
    return Object.assign(
        {},
        waypoint,
        {
          isOffers: getOffers(this._offers, waypoint.type).length > 0,
          destination: Object.assign(
              {},
              waypoint.destination,
              {
                isDescription: waypoint.destination.description !== null && waypoint.destination.description !== ``,
                isPhoto: waypoint.destination.pictures !== null && waypoint.destination.pictures.length > 0
              }
          ),
          isDisabled: false,
          isSaving: false,
          isDeleting: false
        }
    );
  }

  _parseDataToWaypoint(data) {
    data = Object.assign({}, data);

    delete data.isOffers;
    delete data.destination.isDescription;
    delete data.destination.isPhoto;
    delete data.isDisabled;
    delete data.isSaving;
    delete data.isDeleting;

    return data;
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.event__input--price`)
      .addEventListener(`input`, this._onPriceChange);
    this.getElement()
      .querySelector(`.event__type-list`)
      .addEventListener(`click`, this._onTypeChange);
    this.getElement()
      .querySelector(`.event__input--destination`)
      .addEventListener(`input`, this._onDestinationChange);
    this.getElement()
      .querySelector(`.event__section--offers`)
      .addEventListener(`click`, this._onOffersListChange);
    this._setOnStartTimeDatepicker();
    this._setOnEndTimeDatepicker();
  }

  _onEditFormSubmit(evt) {
    evt.preventDefault();
    this._callback.submit(this._parseDataToWaypoint(this._data));
  }

  setOnEditFormSubmit(callback) {
    this._callback.submit = callback;
    this.getElement().addEventListener(`submit`, this._onEditFormSubmit);
  }

  _onRolldownBtnClick(evt) {
    evt.preventDefault();
    this._callback.rolldownClick();
  }

  setOnRolldownBtnClick(callback) {
    this._callback.rolldownClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._onRolldownBtnClick);
  }

  _onDeleteBtnClick(evt) {
    evt.preventDefault();
    this._callback.deleteClick(this._parseDataToWaypoint(this._data));
  }

  setOnDeleteBtnClick(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, this._onDeleteBtnClick);
  }

  _onTypeChange(evt) {
    if (evt.target.tagName === `LABEL`) {
      this.updateData({
        type: evt.target.dataset.type,
        offers: [],
        isOffers: getOffers(this._offers, evt.target.dataset.type).length > 0,
      });
    }
  }

  _onDestinationChange(evt) {
    const inputDestination = evt.target;
    const destination = getDestination(this._destinations, inputDestination.value);

    inputDestination.setCustomValidity(``);

    if (isValidDestination(this._destinations, inputDestination.value)) {
      this.updateData({
        destination: Object.assign(
            {},
            destination,
            {
              isDescription: destination.description !== null && destination.description !== ``,
              isPhoto: destination.pictures !== null && destination.pictures.length > 0
            }
        )
      });
      return;
    }

    inputDestination.setCustomValidity(`Выбранный пункт назначения должен быть из предложенного списка`);
  }

  _onPriceChange(evt) {
    this.updateData({
      price: parseInt(evt.target.value, 10)
    }, true);
  }

  _onStartTimeChange([userDate]) {
    this.updateData({
      date: Object.assign(
          {},
          this._data.date,
          {start: dayjs(userDate).toDate()}
      )
    });
  }

  _setOnStartTimeDatepicker() {
    if (this._datepickerStart) {
      this._datepickerStart.destroy();
      this._datepickerStart = null;
    }

    this._datepickerStart = flatpickr(
        this.getElement().querySelector(`input[name="event-start-time"]`),
        {
          'enableTime': true,
          'time_24hr': true,
          'dateFormat': `d/m/y H:i`,
          'defaultDate': this._data.date.start,
          'onClose': this._onStartTimeChange,
          'maxDate': this._data.date.close
        }
    );
  }

  _onEndTimeChange([userDate]) {
    this.updateData({
      date: Object.assign(
          {},
          this._data.date,
          {close: dayjs(userDate).toDate()}
      )
    });
  }

  _setOnEndTimeDatepicker() {
    if (this._datepickerEnd) {
      this._datepickerEnd.destroy();
      this._datepickerEnd = null;
    }

    this._datepickerEnd = flatpickr(
        this.getElement().querySelector(`input[name="event-end-time"]`),
        {
          'enableTime': true,
          'time_24hr': true,
          'dateFormat': `d/m/y H:i`,
          'defaultDate': this._data.date.close,
          'onClose': this._onEndTimeChange,
          'minDate': this._data.date.start
        }
    );
  }

  _onOffersListChange(evt) {
    const offerSelector = evt.target.closest(`label`);

    if (offerSelector) {
      this.updateData({
        offers: this._updateOffers(offerSelector.dataset.title)
      });
    }
  }
}
