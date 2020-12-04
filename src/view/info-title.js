import {createElement} from '../util.js';

const createInfoTitleTemplate = (waypoints) => {
  const route = waypoints.map((waypoint) => waypoint.destination).join(` &mdash; `);

  return `<h1 class="trip-info__title">${route}</h1>`;
};

export default class InfoTitle {
  constructor(waypoints) {
    this._waypoints = waypoints;
    this._element = null;
  }

  _getTemplate() {
    return createInfoTitleTemplate(this._waypoints);
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
