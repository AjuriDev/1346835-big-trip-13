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
import {render, replace, RenderPosition} from './util/render.js';

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

render(tripMainElement, new NewWaypointBtn());

// добавляем блоки "Меню" и "Фильтры"

const tripControls = new TripControlsView();
render(tripMainElement, tripControls);
render(tripControls, new TripFiltersView());
render(tripControls, new TripTabsView());

const siteMainElement = document.querySelector(`.page-main`);
const tripWaypointsElement = siteMainElement.querySelector(`.trip-events`);

const renderWaypoint = (waypointsListElement, waypoint) => {
  const waypointComponent = new TripWaypointView(waypoint);
  const waypointEditComponent = new WaypointEditorView(waypoint);

  const replaceCardToForm = () => {
    replace(waypointEditComponent, waypointComponent);
  };

  const replaceFormToCard = () => {
    replace(waypointComponent, waypointEditComponent);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  waypointComponent.setOnRollupBtnClick(() => {
    replaceCardToForm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  waypointEditComponent.setOnEditFormSubmit(() => {
    replaceFormToCard();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  waypointEditComponent.setOnRollupBtnClick(() => {
    replaceFormToCard();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(waypointsListElement, waypointComponent, RenderPosition.AFTERBEGIN);
};

const renderWaypointsList = () => {
  // добавляем блок "Маршрут и стоимость"
  const infoBlock = new InfoBlockView();
  render(tripMainElement, infoBlock);
  render(infoBlock, new InfoCostView(waypoints));

  const infoMain = new InfoMainView();
  render(infoBlock, infoMain);
  render(infoMain, new InfoDateView(waypoints));
  render(infoMain, new InfoTitleView(waypoints));

  // создаем список точек маршрута
  const waypointsList = new WaypointsListView();
  render(tripWaypointsElement, waypointsList);

  // добавляем блок "Сортировка"
  render(tripWaypointsElement, new TripSortView());

  // добавляем блоки "Точка маршрута"
  waypoints.forEach((waypoint) => {
    renderWaypoint(waypointsList, waypoint);
  });
};

if (waypoints.length > 0) {
  renderWaypointsList();
} else {
  render(tripWaypointsElement, new NewWaypointMessage());
}
