import AbstractView from './abstract.js';
import {MenuItem} from "../const.js";

const createSiteMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#" data-name="${MenuItem.TABLE}">Table</a>
      <a class="trip-tabs__btn" href="#" data-name="${MenuItem.STATS}">Stats</a>
    </nav>`
  );
};

export default class SiteMenu extends AbstractView {
  constructor() {
    super();
    this._element = null;

    this._onSiteMenuClick = this._onSiteMenuClick.bind(this);
  }

  _getTemplate() {
    return createSiteMenuTemplate();
  }

  toggleSiteMenuItem(menuItem = MenuItem.TABLE) {
    const items = this.getElement().querySelectorAll(`.trip-tabs__btn`);

    items.forEach((item) => item.classList.remove(`trip-tabs__btn--active`));

    this.getElement().querySelector(`[data-name="${menuItem}"]`).classList.add(`trip-tabs__btn--active`);
  }

  _onSiteMenuClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains(`trip-tabs__btn--active`)) {
      return;
    }

    this._callback.menuClick(evt.target.dataset.name);
  }

  setOnSiteMenuClick(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._onSiteMenuClick);
  }
}
