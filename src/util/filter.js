import {FilterType} from '../const';
import {isWaypointFuture, isWaypointPast} from './waypoint';

const filter = {
  [FilterType.EVERYTHING]: (waypoints) => waypoints,
  [FilterType.FUTURE]: (waypoints) => waypoints.filter((waypoint) => isWaypointFuture(waypoint.date.start)),
  [FilterType.PAST]: (waypoints) => waypoints.filter((waypoint) => isWaypointPast(waypoint.date.close))
};

export {filter};
