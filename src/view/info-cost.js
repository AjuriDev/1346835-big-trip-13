import {createElement} from '../util.js';
import {getOffers} from '../mock/offers.js';

const getTripCost = (waypoints) => {
  let cost = 0;

  waypoints.forEach((waypoint) => {
    cost += waypoint.price;
    const offers = getOffers(waypoint.type);
    offers.forEach((offer) => {
      cost += waypoint.offers.includes(offer.name) ? offer.price : 0;
    });
  });

  return cost;
};

const createInfoCostTemplate = (waypoints) => {
  const cost = getTripCost(waypoints);

  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>`
  );
};

export default class InfoCost {
  constructor(waypoints) {
    this._waypoints = waypoints;
    this._element = null;
  }

  _getTemplate() {
    return createInfoCostTemplate(this._waypoints);
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
