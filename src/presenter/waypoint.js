import WaypointEditorView from '../view/waypoint-edit.js';
import TripWaypointView from '../view/trip-waypoint.js';
import {render, replace, RenderPosition} from '../util/render.js';

export default class Waypoint {
  constructor(waypointsListContainer) {
    this._waypointsListContainer = waypointsListContainer;

    this._waypointComponent = null;
    this._waypointEditComponent = null;

    this._onWaypointRollupBtnClick = this._onWaypointRollupBtnClick.bind(this);
    this._onEditFormRollupBtnClick = this._onEditFormRollupBtnClick.bind(this);
    this._onEditFormSubmit = this._onEditFormSubmit.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  init(waypoint) {
    this._waypoint = waypoint;

    this._waypointComponent = new TripWaypointView(waypoint);
    this._waypointEditComponent = new WaypointEditorView(waypoint);

    this._waypointComponent.setOnRollupBtnClick(this._onWaypointRollupBtnClick);
    this._waypointEditComponent.setOnEditFormSubmit(this._onEditFormSubmit);
    this._waypointEditComponent.setOnRollupBtnClick(this._onEditFormRollupBtnClick);

    render(this._waypointsListContainer, this._waypointComponent, RenderPosition.AFTERBEGIN);
  }

  _replaceCardToForm() {
    replace(this._waypointEditComponent, this._waypointComponent);
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  _replaceFormToCard() {
    replace(this._waypointComponent, this._waypointEditComponent);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _onWaypointRollupBtnClick() {
    this._replaceCardToForm();
  }

  _onEditFormRollupBtnClick() {
    this._replaceFormToCard();
  }

  _onEditFormSubmit() {
    this._replaceFormToCard();
  }
}
