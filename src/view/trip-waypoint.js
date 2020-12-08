import AbstractView from "./abstract.js";
import {humanizeDate} from '../util.js';
import {createWaypointOffersTemplate} from './waypoint-offers.js';
import {createScheduleTemplate} from './schedule.js';

const createWaypointTemplate = (waypoint) => {
  const {
    type,
    destination,
    offers,
    date: {
      start: startDate,
      close: closeDate
    },
    price,
    isFavorites
  } = waypoint;

  const dateAtribute = humanizeDate(startDate, `YYYY-MM-DD`);
  const date = humanizeDate(startDate, `MMM DD`);
  const favoriteClassName = isFavorites
    ? `event__favorite-btn event__favorite-btn--active`
    : `event__favorite-btn`;
  const offersList = createWaypointOffersTemplate(type, offers);
  const shedule = createScheduleTemplate(startDate, closeDate);

  return (
    `<div class="event">
      <time class="event__date" datetime="${dateAtribute}">${date}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      ${shedule}
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offersList}
      </ul>
      <button class="${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>`
  );
};

export default class TripWaypoint extends AbstractView {
  constructor(waypoint) {
    super();
    this._waypoint = waypoint;
    this._element = null;
  }

  _getTemplate() {
    return createWaypointTemplate(this._waypoint);
  }
}
