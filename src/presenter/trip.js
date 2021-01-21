import TripView from '../view/trip.js';
import TripSortView from '../view/trip-sort.js';
import WaypointsListView from '../view/waypoints-list.js';
import NewWaypointMessage from '../view/new-waypoint-message.js';
import WaypointPresenter from './waypoint.js';
import {sortDateUp, sortTimeUp, sortPriceUp} from '../util/waypoint.js';
import {render, remove, RenderPosition} from '../util/render.js';
import {SortType, UserAction, UpdateType} from '../const.js';

export default class Trip {
  constructor(tripContainer, waypointsModel) {
    this._waypointsModel = waypointsModel;
    this._tripContainer = tripContainer;
    this._waypointPresenter = {};
    this._currentSortType = SortType.DEFAULT;

    this._sortComponent = null;

    this._tripComponent = new TripView();
    this._waypointListComponent = new WaypointsListView();
    this._newWaypointMessageComponent = new NewWaypointMessage();

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._waypointsModel.addObserver(this._handleModelEvent);
  }

  init() {
    render(this._tripContainer, this._tripComponent);

    this._renderTrip();
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_WAYPOINT:
        this._waypointsModel.updateWaypoint(updateType, update);
        break;
      case UserAction.ADD_WAYPOINT:
        this._waypointsModel.addWaypoint(updateType, update);
        break;
      case UserAction.DELETE_WAYPOINT:
        this._waypointsModel.deleteWaypoint(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._waypointPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearTrip();
        this._renderTrip();
        break;
      case UpdateType.MAJOR:
        this._clearTrip(true);
        this._renderTrip();
        break;
    }
  }

  _getWaypoints() {
    switch (this._currentSortType) {
      case SortType.DEFAULT:
        return this._waypointsModel.getWaypoints().slice().sort(sortDateUp);
      case SortType.TIME_UP:
        return this._waypointsModel.getWaypoints().slice().sort(sortTimeUp);
      case SortType.PRICE_UP:
        return this._waypointsModel.getWaypoints().slice().sort(sortPriceUp);
    }

    return this._waypointsModel.getWaypoints();
  }

  _handleModeChange() {
    Object
      .values(this._waypointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearTrip();
    this._renderTrip();
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new TripSortView(this._currentSortType);
    this._sortComponent.setOnSortTypeChange(this._handleSortTypeChange);

    render(this._tripComponent, this._sortComponent, RenderPosition.AFTERBEGIN);
    // this._sortComponent.setOnSortTypeChange(this._handleSortTypeChange);
  }

  _renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter(this._waypointListComponent, this._handleViewAction, this._handleModeChange);
    waypointPresenter.init(waypoint);
    this._waypointPresenter[waypoint.id] = waypointPresenter;
  }

  _clearWaypointsList() {
    Object
      .values(this._waypointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._waypointPresenter = {};
  }

  _renderWaypointsList(waypoints) {
    render(this._tripComponent, this._waypointListComponent, RenderPosition.AFTERBEGIN);

    waypoints.forEach((waypoint) => {
      this._renderWaypoint(waypoint);
    });
  }

  _renderNewWaypointMessage() {
    render(this._tripComponent, new NewWaypointMessage());
  }

  _clearTrip(resetSortType = false) {
    Object
      .values(this._waypointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._waypointPresenter = {};

    remove(this._sortComponent);
    remove(this._newWaypointMessageComponent);

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _renderTrip() {
    const waypoints = this._getWaypoints();
    const waypointsCount = waypoints.length;

    if (waypointsCount > 0) {
      this._renderSort();
      this._renderWaypointsList(waypoints);
    } else {
      this._renderNewWaypointMessage();
    }
  }
}
