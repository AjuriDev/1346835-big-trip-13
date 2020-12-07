import dayjs from 'dayjs';
import InfoBlockView from './view/trip-info.js';
import InfoMainView from './view/info-main.js';
import InfoTitleView from './view/info-title.js';
import InfoDateView from './view/info-date.js';
import InfoCostView from './view/info-cost.js';
import TripTabsView from './view/trip-tabs.js';
import TripFiltersView from './view/trip-filters.js';
import TripControlsView from './view/trip-controls.js';
import NewWaypointBtn from './view/new-waypoint-btn.js';
import TripSortView from './view/trip-sort.js';
import WaypointsListView from './view/waypoints-list.js';
import WaypointEditorView from './view/waypoint-edit.js';
import TripWaypointView from './view/trip-waypoint.js';
import NewWaypointMessage from './view/new-waypoint-message.js';
import {generateWaypoint} from './mock/waypoint.js';
import {render, RenderPosition} from './util.js';

const WAYPOINTS_NUMBER = 15;
const waypoints = Array(WAYPOINTS_NUMBER)
  .fill()
  .map(generateWaypoint)
  .sort(({date: {start: startA}}, {date: {start: startB}}) => {
    startA = dayjs(startA);
    startB = dayjs(startB);
    return startA.diff(startB);
  });

const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

// добавляем кнопку "Новая точка маршрута"

render(tripMainElement, new NewWaypointBtn().getElement());

// добавляем блоки "Меню" и "Фильтры"

const tripControls = new TripControlsView();
render(tripMainElement, tripControls.getElement());
render(tripControls.getElement(), new TripFiltersView().getElement());
render(tripControls.getElement(), new TripTabsView().getElement());

const siteMainElement = document.querySelector(`.page-main`);
const tripWaypointsElement = siteMainElement.querySelector(`.trip-events`);

const renderWaypoint = (waypointsListElement, waypoint) => {
  const waypointComponent = new TripWaypointView(waypoint);
  const waypointEditComponent = new WaypointEditorView(waypoint);

  const replaceCardToForm = () => {
    waypointsListElement.replaceChild(waypointEditComponent.getElement(), waypointComponent.getElement());
  };

  const replaceFormToCard = () => {
    waypointsListElement.replaceChild(waypointComponent.getElement(), waypointEditComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  waypointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceCardToForm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  waypointEditComponent.getElement().addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToCard();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  waypointEditComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceFormToCard();
  });

  render(waypointsListElement, waypointComponent.getElement(), RenderPosition.AFTERBEGIN);
};

const renderWaypointsList = () => {
  // добавляем блок "Маршрут и стоимость"
  const infoBlock = new InfoBlockView();
  render(tripMainElement, infoBlock.getElement());
  render(infoBlock.getElement(), new InfoCostView(waypoints).getElement());

  const infoMain = new InfoMainView();
  render(infoBlock.getElement(), infoMain.getElement());
  render(infoMain.getElement(), new InfoDateView(waypoints).getElement());
  render(infoMain.getElement(), new InfoTitleView(waypoints).getElement());

  // создаем список точек маршрута
  const waypointsList = new WaypointsListView();
  render(tripWaypointsElement, waypointsList.getElement());

  // добавляем блок "Сортировка"
  render(tripWaypointsElement, new TripSortView().getElement());

  // добавляем блоки "Точка маршрута"
  waypoints.forEach((waypoint) => {
    renderWaypoint(waypointsList.getElement(), waypoint);
  });
};

if (waypoints.length > 0) {
  renderWaypointsList();
} else {
  render(tripWaypointsElement, new NewWaypointMessage().getElement());
}
