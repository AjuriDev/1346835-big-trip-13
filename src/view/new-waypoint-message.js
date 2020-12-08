import AbstractView from "./abstract.js";

const createMessageTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class NewWaypointMessage extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createMessageTemplate();
  }
}
