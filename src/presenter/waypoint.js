import WaypointEditorView from '../view/waypoint-edit.js';
import TripWaypointView from '../view/trip-waypoint.js';
import {render, replace, remove, RenderPosition} from '../util/render.js';
import {UserAction, UpdateType} from '../const.js';

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class Waypoint {
  constructor(waypointsListContainer, changeData, changeMode, destinations, offers) {
    this._waypointsListContainer = waypointsListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._destinations = destinations;
    this._offers = offers;

    this._waypointComponent = null;
    this._waypointEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleEditFormCancel = this._handleEditFormCancel.bind(this);
    this._handleEditFormSubmit = this._handleEditFormSubmit.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
  }

  init(waypoint) {
    this._waypoint = waypoint;

    const prevWaypointComponent = this._waypointComponent;
    const prevWaypointEditComponent = this._waypointEditComponent;

    this._waypointComponent = new TripWaypointView(this._waypoint, this._offers);
    this._waypointEditComponent = new WaypointEditorView(this._destinations, this._offers, this._waypoint);

    this._waypointComponent.setOnRollupBtnClick(this._handleEditClick);
    this._waypointComponent.setOnFavoriteBtnClick(this._handleFavoriteClick);
    this._waypointEditComponent.setOnEditFormSubmit(this._handleEditFormSubmit);
    this._waypointEditComponent.setOnRolldownBtnClick(this._handleEditFormCancel);
    this._waypointEditComponent.setOnDeleteBtnClick(this._handleDeleteClick);

    if (prevWaypointComponent === null || prevWaypointEditComponent === null) {
      render(this._waypointsListContainer, this._waypointComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._waypointComponent, prevWaypointComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._waypointEditComponent, prevWaypointEditComponent);
    }

    remove(prevWaypointComponent);
    remove(prevWaypointEditComponent);
  }

  destroy() {
    remove(this._waypointComponent);
    remove(this._waypointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceCardToForm() {
    replace(this._waypointEditComponent, this._waypointComponent);
    document.addEventListener(`keydown`, this._handleEscKeyDown);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToCard() {
    replace(this._waypointComponent, this._waypointEditComponent);
    document.removeEventListener(`keydown`, this._handleEscKeyDown);
    this._mode = Mode.DEFAULT;
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._waypointEditComponent.reset(this._waypoint);
      this._replaceFormToCard();
    }
  }

  _handleEditClick() {
    this._replaceCardToForm();
  }

  _handleFavoriteClick() {
    this._changeData(
        UserAction.UPDATE_WAYPOINT,
        UpdateType.PATCH,
        Object.assign(
            {},
            this._waypoint,
            {
              isFavorites: !this._waypoint.isFavorites
            }
        )
    );
  }

  _handleEditFormCancel() {
    this._waypointEditComponent.reset(this._waypoint);
    this._replaceFormToCard();
  }

  _handleEditFormSubmit(waypoint) {
    this._changeData(
        UserAction.UPDATE_WAYPOINT,
        UpdateType.MINOR,
        waypoint
    );
    this._replaceFormToCard();
  }

  _handleDeleteClick(waypoint) {
    this._changeData(
        UserAction.DELETE_WAYPOINT,
        UpdateType.MINOR,
        waypoint
    );
  }
}
