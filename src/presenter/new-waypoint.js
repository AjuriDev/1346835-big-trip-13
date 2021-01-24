import WaypointEditorView from '../view/waypoint-edit.js';
import {generateId} from "../mock/waypoint.js";
import {render, remove} from '../util/render.js';
import {UserAction, UpdateType} from '../const.js';

export default class WaypointNew {
  constructor(waypointsListContainer, changeData) {
    this._waypointsListContainer = waypointsListContainer;
    this._changeData = changeData;

    this._waypointEditComponent = null;

    this._handleEditFormSubmit = this._handleEditFormSubmit.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
  }

  init() {
    if (this._waypointEditComponent !== null) {
      return;
    }

    this._waypointEditComponent = new WaypointEditorView();

    this._waypointEditComponent.setOnEditFormSubmit(this._handleEditFormSubmit);
    this._waypointEditComponent.setOnDeleteBtnClick(this._handleDeleteClick);

    render(this._waypointsListContainer, this._waypointEditComponent);
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  destroy() {
    if (this._waypointEditComponent === null) {
      return;
    }

    remove(this._waypointEditComponent);
    this._waypointEditComponent = null;

    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _handleEditFormSubmit(waypoint) {
    this._changeData(
        UserAction.ADD_WAYPOINT,
        UpdateType.MAJOR,
        Object.assign({id: generateId()}, waypoint)
    );
    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}
