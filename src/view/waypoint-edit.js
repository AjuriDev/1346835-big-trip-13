import dayjs from "dayjs";
import flatpickr from 'flatpickr';
import SmartView from "./smart.js";
import {humanizeDate} from '../util/waypoint.js';
import {createWaypointTypeListTemplate} from './type-list.js';
import {createDestinationOptionsTemplate} from './destination-options.js';
import {createOffersSectionTemplate} from './waypoint-offers.js';
import {createDestinationSectionTemplate} from './waypoint-destination.js';
import {getOffers} from '../mock/offers.js';
import {getDestination} from '../mock/destination.js';
import {DEFAULT_TYPE, DESTINATIONS} from '../const.js';

import "../../node_modules/flatpickr/dist/flatpickr.min.css";

const createWaypointEditorTemplate = (data = {date: {start: ``, close: ``}}) => {

  const TIME_FORMAT = `DD/MM/YY HH:mm`;

  const {
    type = DEFAULT_TYPE,
    destination = null,
    offers = [],
    date: {start: startDate, close: closeDate},
    price = ``,
    isOffers,
  } = data;
  const typeList = createWaypointTypeListTemplate(type);
  const optionList = createDestinationOptionsTemplate();
  const startTime = humanizeDate(startDate, TIME_FORMAT);
  const closeTime = humanizeDate(closeDate, TIME_FORMAT);
  const offersSection = createOffersSectionTemplate(type, offers, isOffers);
  const destinationSection = createDestinationSectionTemplate(destination);

  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          ${typeList}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${optionList}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${closeTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">

        ${offersSection}

        ${destinationSection}
      </section>
    </form>`
  );
};

export default class WaypointEditor extends SmartView {
  constructor(waypoint) {
    super();
    this._data = this._parseWaypointToData(waypoint);
    this._element = null;
    this._datepickerStart = null;
    this._datepickerEnd = null;

    this._onRollupBtnClick = this._onRollupBtnClick.bind(this);
    this._onEditFormSubmit = this._onEditFormSubmit.bind(this);
    this._onTypeChange = this._onTypeChange.bind(this);
    this._onDestinationChange = this._onDestinationChange.bind(this);
    this._onPriceChange = this._onPriceChange.bind(this);
    this._onStartTimeChange = this._onStartTimeChange.bind(this);
    this._onEndTimeChange = this._onEndTimeChange.bind(this);
    this._onOffersListChange = this._onOffersListChange.bind(this);

    this._setInnerHandlers();
  }

  reset(waypoint) {
    this.updateData(
        this._parseWaypointToData(waypoint)
    );
  }

  _getTemplate() {
    return createWaypointEditorTemplate(this._data);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setOnEditFormSubmit(this._callback.submit);
    this.setOnRollupBtnClick(this._callback.click);
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
          'onChange': this._onStartTimeChange
        }
    );
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
          'onChange': this._onEndTimeChange
        }
    );
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
      .addEventListener(`focusout`, this._onDestinationChange);
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

  _onRollupBtnClick(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setOnRollupBtnClick(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._onRollupBtnClick);
  }

  _onTypeChange(evt) {
    if (evt.target.tagName === `LABEL`) {
      this.updateData({
        type: evt.target.dataset.type,
        offers: [],
        isOffers: getOffers(evt.target.dataset.type).length > 0,
      });
    }
  }

  _onDestinationChange(evt) {
    const destination = getDestination(DESTINATIONS, evt.target.value);
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
  }

  _onPriceChange(evt) {
    this.updateData({
      price: evt.target.value
    }, true);
  }

  _onStartTimeChange([userDate]) {
    this.updateData({
      date: Object.assign(
          {},
          this._data.date,
          {start: dayjs(userDate).toDate()}
      )
    }, true);
  }

  _onEndTimeChange([userDate]) {
    this.updateData({
      date: Object.assign(
          {},
          this._data.date,
          {close: dayjs(userDate).toDate()}
      )
    }, true);
  }

  _onOffersListChange(evt) {
    const offerSelector = evt.target.closest(`label`);

    if (offerSelector) {
      this.updateData({
        offers: this._updateOffers(offerSelector.dataset.title)
      });
    }
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

    offers.unshift(getOffers(this._data.type).find((offer) => offer.title === title));
    return offers;
  }

  _parseWaypointToData(waypoint) {
    return Object.assign(
        {},
        waypoint,
        {
          isOffers: getOffers(waypoint.type).length > 0,
          destination: Object.assign(
              {},
              waypoint.destination,
              {
                isDescription: waypoint.destination.description !== null && waypoint.destination.description !== ``,
                isPhoto: waypoint.destination.pictures !== null && waypoint.destination.pictures.length > 0
              }
          )
        }
    );
  }

  _parseDataToWaypoint(data) {
    data = Object.assign({}, data);

    delete data.isOffers;
    delete data.destination.isDescription;
    delete data.destination.isPhoto;

    return data;
  }
}
