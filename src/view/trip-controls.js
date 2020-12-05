import {createElement} from '../util.js';

const createTripControlsTemplate = () => {
  return `<div class="trip-main__trip-controls  trip-controls"></div>`;
};

export default class TripControls {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createTripControlsTemplate();
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
