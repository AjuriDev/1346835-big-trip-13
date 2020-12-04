import {createElement} from '../util.js';

const createNewWaypointBtnTemplate = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

export default class NewWaypointBtn {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createNewWaypointBtnTemplate();
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
