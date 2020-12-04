import {createElement} from '../util.js';

const createInfoBlockTemplate = () => {
  return `<section class="trip-main__trip-info  trip-info"></section>`;
};

export default class InfoBlock {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createInfoBlockTemplate();
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
