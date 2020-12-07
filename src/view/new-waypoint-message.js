import {createElement} from '../util.js';

const createMessageTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class NewWaypointMessage {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createMessageTemplate();
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
