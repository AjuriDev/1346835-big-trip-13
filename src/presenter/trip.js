import TripView from '../view/trip.js';
import TripSortView from '../view/trip-sort.js';
import WaypointsListView from '../view/waypoints-list.js';
import NewWaypointMessage from '../view/new-waypoint-message.js';
import WaypointPresenter from './waypoint.js';
import {updateItem} from '../util/common.js';
import {render, RenderPosition} from '../util/render.js';

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._waypointPresenter = {};

    this._tripComponent = new TripView();
    this._sortComponent = new TripSortView();
    this._waypointListComponent = new WaypointsListView();
    this._newWaypointMessageComponent = new NewWaypointMessage();

    this._handleWaypointChange = this._handleWaypointChange.bind(this);
  }

  init(waypoints) {
    this._waypoints = waypoints;

    render(this._tripContainer, this._tripComponent);

    this._renderTrip();
  }

  _handleWaypointChange(updatedWaypoint) {
    this._waypoints = updateItem(this._waypoints, updatedWaypoint);
    this._waypointPresenter[updatedWaypoint.id].init(updatedWaypoint);
  }

  _renderSort() {
    render(this._tripComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
  }

  _renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter(this._waypointListComponent, this._handleWaypointChange);
    waypointPresenter.init(waypoint);
    this._waypointPresenter[waypoint.id] = waypointPresenter;
  }

  _clearWaypointsList() {
   Object
     .values(this._waypointPresenter)
     .forEach((presenter) => presenter.destroy());
   this._waypointPresenter = {};
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
