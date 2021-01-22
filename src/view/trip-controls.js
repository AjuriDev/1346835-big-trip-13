import AbstractView from './abstract.js';

const createTripControlsTemplate = () => {
  return `<div class="trip-main__trip-controls  trip-controls"></div>`;
};

export default class TripControls extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createTripControlsTemplate();
  }
}
