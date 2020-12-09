import AbstractView from "./abstract.js";

const createInfoTitleTemplate = (waypoints) => {
  const route = waypoints.map((waypoint) => waypoint.destination).join(` &mdash; `);

  return `<h1 class="trip-info__title">${route}</h1>`;
};

export default class InfoTitle extends AbstractView {
  constructor(waypoints) {
    super();
    this._waypoints = waypoints;
    this._element = null;
  }

  _getTemplate() {
    return createInfoTitleTemplate(this._waypoints);
  }
}
