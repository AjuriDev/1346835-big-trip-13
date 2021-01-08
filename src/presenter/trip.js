import TripView from '../view/trip.js';
import TripSortView from '../view/trip-sort.js';
import WaypointsListView from '../view/waypoints-list.js';
import NewWaypointMessage from '../view/new-waypoint-message.js';
import WaypointPresenter from './waypoint.js';
// import WaypointEditorView from '../view/waypoint-edit.js';
// import TripWaypointView from '../view/trip-waypoint.js';
import {render, RenderPosition} from '../util/render.js';

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;

    this._tripComponent = new TripView();
    this._sortComponent = new TripSortView();
    this._waypointListComponent = new WaypointsListView();
    this._newWaypointMessageComponent = new NewWaypointMessage();
  }

  init(waypoints) {
    this._waypoints = waypoints;

    render(this._tripContainer, this._tripComponent);

    this._renderTrip();
  }

  _renderSort() {
    render(this._tripComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
  }

  _renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter(this._waypointListComponent);
    waypointPresenter.init(waypoint);
  }

  _renderWaypointsList() {
    render(this._tripComponent, this._waypointListComponent, RenderPosition.AFTERBEGIN);

    this._waypoints.forEach((waypoint) => {
      this._renderWaypoint(waypoint);
    });
  }

  _renderNewWaypointMessage() {
    render(this._tripComponent, new NewWaypointMessage());
  }

  _renderTrip() {
    if (this._waypoints.length > 0) {
      this._renderSort();
      this._renderWaypointsList();
    } else {
      this._renderNewWaypointMessage();
    }
  }
}
