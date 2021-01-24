import AbstractView from './abstract.js';

const createInfoMainTemplate = () => {
  return `<div class="trip-info__main"></div>`;
};

export default class InfoMain extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createInfoMainTemplate();
  }
}
