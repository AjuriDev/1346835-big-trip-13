import WaypointEditorView from '../view/waypoint-edit.js';
import {isOnline} from '../util/common.js';
import {render, remove} from '../util/render.js';
import {toast} from '../util/offline/offline.js';
import {UserAction, UpdateType} from '../const.js';

export default class WaypointNew {
  constructor(waypointsListContainer, changeData, destinations, destinationNames, offers) {
    this._waypointsListContainer = waypointsListContainer;
    this._changeData = changeData;
    this._destinations = destinations;
    this._destinationNames = destinationNames;
    this._offers = offers;

    this._waypointEditComponent = null;

    this._handleEditFormSubmit = this._handleEditFormSubmit.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
  }

  init() {
    if (this._waypointEditComponent !== null) {
      return;
    }

    this._waypointEditComponent = new WaypointEditorView(this._destinations, this._destinationNames, this._offers);

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

  setSaving() {
    this._waypointEditComponent.updateData({
      isDisabled: true,
      isSaving: true
    });
  }

  setAborting() {
    const resetFormState = () => {
      this._waypointEditComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };

    this._waypointEditComponent.shake(resetFormState);
  }

  _handleEditFormSubmit(waypoint) {
    if (!isOnline()) {
      toast(`You can't create waypoint offline`);
      return;
    }

    this._changeData(
        UserAction.ADD_WAYPOINT,
        UpdateType.MAJOR,
        waypoint
    );
  }

  _handleDeleteClick() {
    this._changeData(UserAction.CANCEL_WAYPOINT);
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._changeData(UserAction.CANCEL_WAYPOINT);
    }
  }
}
