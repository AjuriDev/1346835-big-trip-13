import {createElement} from '../util.js';

const createWaypointsListTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class WaypointsList {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createWaypointsListTemplate();
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
