import {countWaypointDuration} from './waypoint.js';

const makeItemsUniq = (items) => [...new Set(items)].sort();

const countWaypointsByType = (waypoints, type) => {
  return waypoints.filter((waypoint) => waypoint.type === type).length;
};

const countCostByType = (waypoints, type) => {
  return waypoints
      .filter((waypoint) => waypoint.type === type)
      .reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
};

const countDurationByType = (waypoints, type) => {
  return waypoints
      .filter((waypoint) => waypoint.type === type)
      .reduce((accumulator, currentValue) => accumulator + countWaypointDuration(currentValue), 0);
};

const humanizeDuration = (duration) => {
  const days = Math.floor(duration / (24 * 60 * 60 * 1000));
  const hours = Math.floor(duration / (60 * 60 * 1000)) % 24;
  const minutes = Math.floor(duration / (60 * 1000)) % 60;

  if (days !== 0) {
    return `${days}D ${hours}H ${minutes}M`;
  } else if (hours !== 0) {
    return `${hours}H ${minutes}M`;
  } else if (minutes !== 0) {
    return `${minutes}M`;
  }
  return ``;
};

export {makeItemsUniq, countWaypointsByType, countCostByType, countDurationByType, humanizeDuration};
