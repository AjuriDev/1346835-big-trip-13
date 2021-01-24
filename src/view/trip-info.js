import AbstractView from './abstract.js';

const createInfoBlockTemplate = () => {
  return `<section class="trip-main__trip-info  trip-info"></section>`;
};

export default class InfoBlock extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createInfoBlockTemplate();
  }
}
