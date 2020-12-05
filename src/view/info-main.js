import {createElement} from '../util.js';

const createInfoMainTemplate = () => {
  return `<div class="trip-info__main"></div>`;
};

export default class InfoMain {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createInfoMainTemplate();
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
