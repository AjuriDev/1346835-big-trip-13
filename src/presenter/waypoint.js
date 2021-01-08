import WaypointEditorView from '../view/waypoint-edit.js';
import TripWaypointView from '../view/trip-waypoint.js';
import {render, replace, remove, RenderPosition} from '../util/render.js';

export default class Waypoint {
  constructor(waypointsListContainer, changeData) {
    this._waypointsListContainer = waypointsListContainer;
    this._changeData = changeData;

    this._waypointComponent = null;
    this._waypointEditComponent = null;

    this._onWaypointRollupBtnClick = this._onWaypointRollupBtnClick.bind(this);
    this._onEditFormRollupBtnClick = this._onEditFormRollupBtnClick.bind(this);
    this._onEditFormSubmit = this._onEditFormSubmit.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._onFavoriteBtnClick = this._onFavoriteBtnClick.bind(this);
  }

  init(waypoint) {
    this._waypoint = waypoint;

    const prevWaypointComponent = this._waypointComponent;
    const prevWaypointEditComponent = this._waypointEditComponent;

    this._waypointComponent = new TripWaypointView(waypoint);
    this._waypointEditComponent = new WaypointEditorView(waypoint);

    this._waypointComponent.setOnRollupBtnClick(this._onWaypointRollupBtnClick);
    this._waypointComponent.setOnFavoriteBtnClick(this._onFavoriteBtnClick);
    this._waypointEditComponent.setOnEditFormSubmit(this._onEditFormSubmit);
    this._waypointEditComponent.setOnRollupBtnClick(this._onEditFormRollupBtnClick);

    if (prevWaypointComponent === null || prevWaypointEditComponent === null) {
      render(this._waypointsListContainer, this._waypointComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    if (this._waypointsListContainer.getElement().contains(prevWaypointComponent.getElement())) {
      replace(this._waypointComponent, prevWaypointComponent);
    }

    if (this._waypointsListContainer.getElement().contains(prevWaypointEditComponent.getElement())) {
      replace(this._waypointEditComponent, prevWaypointEditComponent);
    }

    remove(prevWaypointComponent);
    remove(prevWaypointEditComponent);
  }

  destroy() {
    remove(this._waypointComponent);
    remove(this._waypointEditComponent);
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

  _onFavoriteBtnClick() {
    this._changeData(
      Object.assign(
        {},
        this._waypoint,
        {
          isFavorites: !this._waypoint.isFavorites
        }
      )
    );
  }

  _onEditFormRollupBtnClick() {
    this._replaceFormToCard();
  }

  _onEditFormSubmit(waypoint) {
    this._changeData(waypoint);
    this._replaceFormToCard();
  }
}
