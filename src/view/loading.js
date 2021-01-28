import AbstractView from "./abstract.js";

const createNoWaypointTemplate = () => {
  return `<p class="trip-events__msg">Loading...</p>`;
};

export default class Loading extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createNoWaypointTemplate();
  }
}
