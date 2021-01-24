import AbstractView from './abstract.js';

const createNewWaypointBtnTemplate = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

export default class NewWaypointBtn extends AbstractView {
  constructor() {
    super();
    this._element = null;

    this._onNewWaypointClick = this._onNewWaypointClick.bind(this);
  }

  _getTemplate() {
    return createNewWaypointBtnTemplate();
  }

  _onNewWaypointClick(evt) {
    evt.preventDefault();
    this._callback.createClick();
  }

  setOnNewWaypointClick(callback) {
    this._callback.createClick = callback;
    this.getElement().addEventListener(`click`, this._onNewWaypointClick);
  }
}
