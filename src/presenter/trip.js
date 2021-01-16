import TripView from '../view/trip.js';
import TripSortView from '../view/trip-sort.js';
import WaypointsListView from '../view/waypoints-list.js';
import NewWaypointMessage from '../view/new-waypoint-message.js';
import WaypointPresenter from './waypoint.js';
import {updateItem} from '../util/common.js';
import {sortDateUp, sortTimeUp, sortPriceUp} from '../util/waypoint.js';
import {render, RenderPosition} from '../util/render.js';
import {SortType} from '../const.js';

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._waypointPresenter = {};
    this._currentSortType = SortType.DEFAULT;

    this._tripComponent = new TripView();
    this._sortComponent = new TripSortView();
    this._waypointListComponent = new WaypointsListView();
    this._newWaypointMessageComponent = new NewWaypointMessage();

    this._handleWaypointChange = this._handleWaypointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(waypoints) {
    this._waypoints = waypoints.slice().sort(sortDateUp);
    this._sourcedWaypoints = waypoints.slice().sort(sortDateUp);

    render(this._tripContainer, this._tripComponent);

    this._renderTrip();
  }

  _handleWaypointChange(updatedWaypoint) {
    this._waypoints = updateItem(this._waypoints, updatedWaypoint);
    this._waypointPresenter[updatedWaypoint.id].init(updatedWaypoint);
  }

  _handleModeChange() {
    Object
      .values(this._waypointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _sortWaypoints(sortType) {
    switch (sortType) {
      case SortType.TIME_UP:
        this._waypoints.sort(sortTimeUp);
        break;
      case SortType.PRICE_UP:
        this._waypoints.sort(sortPriceUp);
        break;
      default:
        this._waypoints = this._sourcedWaypoints.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortWaypoints(sortType);
    this._clearWaypointsList();
    this._renderWaypointsList();
  }

  _renderSort() {
    render(this._tripComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
    this._sortComponent.setOnSortTypeChange(this._handleSortTypeChange);
  }

  _renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter(this._waypointListComponent, this._handleWaypointChange, this._handleModeChange);
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
