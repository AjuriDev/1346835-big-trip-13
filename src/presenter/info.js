import InfoBlockView from '../view/trip-info.js';
import InfoMainView from '../view/info-main.js';
import InfoTitleView from '../view/info-title.js';
import InfoDateView from '../view/info-date.js';
import InfoCostView from '../view/info-cost.js';
import {sortDateUp} from '../util/waypoint.js';
import {render, remove, RenderPosition} from '../util/render.js';
import {UpdateType} from '../const.js';

export default class Info {
  constructor(infoContainer, waypointsModel) {
    this._infoContainer = infoContainer;
    this._waypointsModel = waypointsModel;

    this._infoComponent = new InfoBlockView();
    this._infoMainComponent = null;
    this._infoTitleComponent = null;
    this._infoDateComponent = null;
    this._infoCostComponent = null;


    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    render(this._infoContainer, this._infoComponent);

    this._waypointsModel.addObserver(this._handleModelEvent);

    this._renderInfo();
  }

  destroy() {
    this._clearInfo();

    remove(this._infoComponent);

    this._waypointsModel.removeObserver(this._handleModelEvent);
  }

  _handleModelEvent(updateType) {
    switch (updateType) {
      case UpdateType.PATCH:
        return;
      case UpdateType.MINOR:
        this._clearInfo();
        this._renderInfo();
        break;
      case UpdateType.MAJOR:
        this._clearInfo();
        this._renderInfo();
        break;
      case UpdateType.INIT:
        this._renderInfo();
        break;
    }
  }

  _getWaypoints() {
    return this._waypointsModel.getWaypoints().sort(sortDateUp);
  }

  _renderInfoTitle(waypoints) {
    if (this._infoTitleComponent !== null) {
      this._infoTitleComponent = null;
    }

    this._infoTitleComponent = new InfoTitleView(waypoints);

    render(this._infoMainComponent, this._infoTitleComponent, RenderPosition.AFTERBEGIN);
  }

  _renderInfoDate(waypoints) {
    if (this._infoDateComponent !== null) {
      this._infoDateComponent = null;
    }

    this._infoDateComponent = new InfoDateView(waypoints);

    render(this._infoMainComponent, this._infoDateComponent, RenderPosition.AFTERBEGIN);
  }


  _renderInfoMain(waypoints) {
    if (this._infoMainComponent !== null) {
      this._infoMainComponent = null;
    }

    this._infoMainComponent = new InfoMainView();

    render(this._infoComponent, this._infoMainComponent, RenderPosition.AFTERBEGIN);

    this._renderInfoTitle(waypoints);
    this._renderInfoDate(waypoints);
  }

  _renderInfoCost(waypoints) {
    if (this._infoCostComponent !== null) {
      this._infoCostComponent = null;
    }

    this._infoCostComponent = new InfoCostView(waypoints);

    render(this._infoComponent, this._infoCostComponent, RenderPosition.AFTERBEGIN);
  }

  _clearInfo() {
    remove(this._infoDateComponent);
    remove(this._infoTitleComponent);
    remove(this._infoMainComponent);
    remove(this._infoCostComponent);
  }

  _renderInfo() {

    const waypoints = this._getWaypoints();

    if (!waypoints.length > 0) {
      return;
    }

    this._renderInfoMain(waypoints);
    this._renderInfoCost(waypoints);
  }
}
