import AbstractView from "./abstract.js";

const createNewWaypointBtnTemplate = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

export default class NewWaypointBtn extends AbstractView{
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createNewWaypointBtnTemplate();
  }
}
