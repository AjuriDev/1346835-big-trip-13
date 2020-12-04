import {createElement} from '../util.js';
import {humanizeDate} from '../util.js';
import {createWaypointTypeListTemplate} from './type-list.js';
import {createDestinationOptionsTemplate} from './destination-options.js';
import {createOffersSectionTemplate} from './waypoint-offers.js';
import {createDestinationSectionTemplate} from './waypoint-destination.js';
import {DEFAULT_TYPE} from '../const.js';

const createWaypointEditorTemplate = (waypoint = {date: {start: ``, close: ``}}) => {

  const {
    type = DEFAULT_TYPE,
    destination = ``,
    offers = [],
    date: {start: startDate, close: closeDate},
    price = ``
  } = waypoint;
  const typeList = createWaypointTypeListTemplate(type);
  const optionList = createDestinationOptionsTemplate();
  const startTime = humanizeDate(startDate, `DD/MM/YY HH:mm`);
  const closeTime = humanizeDate(closeDate, `DD/MM/YY HH:mm`);
  const offersSection = createOffersSectionTemplate(type, offers);
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
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
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

export default class WaypointEditor {
  constructor(waypoint) {
    this._waypoint = waypoint;
    this._element = null;
  }

  _getTemplate() {
    return createWaypointEditorTemplate(this._waypoint);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
