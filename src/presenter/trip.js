import TripView from '../view/trip.js';
import TripSortView from '../view/trip-sort.js';
import WaypointsListView from '../view/waypoints-list.js';
import NewWaypointMessageView from '../view/new-waypoint-message.js';
import WaypointPresenter from './waypoint.js';
import WaypointNewPresenter from "./new-waypoint.js";
import {sortDateUp, sortTimeUp, sortPriceUp} from '../util/waypoint.js';
import {filter} from "../util/filter.js";
import {render, remove, RenderPosition} from '../util/render.js';
import {SortType, UserAction, UpdateType, FilterType} from '../const.js';

export default class Trip {
  constructor(tripContainer, waypointsModel, filterModel) {
    this._waypointsModel = waypointsModel;
    this._filterModel = filterModel;
    this._tripContainer = tripContainer;
    this._waypointPresenter = {};
    this._currentSortType = SortType.DEFAULT;

    this._sortComponent = null;

    this._tripComponent = new TripView();
    this._waypointListComponent = null;
    this._newWaypointMessageComponent = new NewWaypointMessageView();

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._waypointNewPresenter = null;
  }

  init() {
    render(this._tripContainer, this._tripComponent);

    this._waypointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._renderTrip();
    this._waypointNewPresenter = new WaypointNewPresenter(this._waypointListComponent, this._handleViewAction);
  }

  destroy() {
    this._clearTrip(true);

    remove(this._waypointListComponent);
    remove(this._sortComponent);
    remove(this._tripComponent);

    this._waypointsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  createWaypoint() {
    this._currentSortType = SortType.DEFAULT;
    this._filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this._waypointNewPresenter.init();
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
    const filterType = this._filterModel.getFilter();
    const waypoints = this._waypointsModel.getWaypoints();
    const filtredWaypoints = filter[filterType](waypoints);

    switch (this._currentSortType) {
      case SortType.DEFAULT:
        return filtredWaypoints.sort(sortDateUp);
      case SortType.TIME_UP:
        return filtredWaypoints.sort(sortTimeUp);
      case SortType.PRICE_UP:
        return filtredWaypoints.sort(sortPriceUp);
    }

    return this._waypointsModel.getWaypoints();
  }

  _handleModeChange() {
    this._waypointNewPresenter.destroy();

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
  }

  _renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter(this._waypointListComponent, this._handleViewAction, this._handleModeChange);
    waypointPresenter.init(waypoint);
    this._waypointPresenter[waypoint.id] = waypointPresenter;
  }

  _renderWaypointsList(waypoints) {
    if (this._waypointListComponent !== null) {
      this._waypointListComponent = null;
    }

    this._waypointListComponent = new WaypointsListView();

    render(this._tripComponent, this._waypointListComponent, RenderPosition.AFTERBEGIN);

    waypoints.forEach((waypoint) => {
      this._renderWaypoint(waypoint);
    });
  }

  _renderNewWaypointMessage() {
    render(this._tripComponent, this._newWaypointMessageComponent);
  }

  _clearTrip(resetSortType = false) {
    this._waypointNewPresenter.destroy();

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
