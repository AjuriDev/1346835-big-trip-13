import AbstractView from './abstract.js';

const WAYPOINTS_SHORT = 2;
const MAX_WAYPOINTS_LONG = 3;

const createInfoTitleTemplate = (waypoints) => {
  let route = ``;
  let separator = ` &mdash; `;
  const waypointsCopy = waypoints.slice();

  if (waypointsCopy.length > MAX_WAYPOINTS_LONG) {
    waypointsCopy.splice(1, waypoints.length - WAYPOINTS_SHORT);
    separator = ` &mdash; ... &mdash; `;
  }

  route = waypointsCopy.map((waypoint) => waypoint.destination.name).join(separator);

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
