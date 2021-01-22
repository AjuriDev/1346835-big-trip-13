import AbstractView from './abstract.js';

const getTripCost = (waypoints) => {
  let cost = 0;

  waypoints.forEach((waypoint) => {
    cost += waypoint.price;
    cost += waypoint.offers.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  });

  return cost;
};

const createInfoCostTemplate = (waypoints) => {
  const cost = getTripCost(waypoints);

  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>`
  );
};

export default class InfoCost extends AbstractView {
  constructor(waypoints) {
    super();
    this._waypoints = waypoints;
    this._element = null;
  }

  _getTemplate() {
    return createInfoCostTemplate(this._waypoints);
  }
}
