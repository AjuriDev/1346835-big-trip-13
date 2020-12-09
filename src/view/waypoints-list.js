import AbstractView from "./abstract.js";

const createWaypointsListTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class WaypointsList extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createWaypointsListTemplate();
  }
}
