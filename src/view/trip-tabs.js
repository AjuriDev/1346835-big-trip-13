import AbstractView from "./abstract.js";

const createTabsSwitcherTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn" href="#">Table</a>
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
    </nav>`
  );
};

export default class TripTabs extends AbstractView {
  constructor() {
    super();
    this._element = null;
  }

  _getTemplate() {
    return createTabsSwitcherTemplate();
  }
}
