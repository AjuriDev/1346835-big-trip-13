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

// добавляем блок "Маршрут и стоимость"

const infoBlock = new InfoBlockView();
render(tripMainElement, infoBlock.getElement());
render(infoBlock.getElement(), new InfoCostView(waypoints).getElement());

const infoMain = new InfoMainView();
render(infoBlock.getElement(), infoMain.getElement());
render(infoMain.getElement(), new InfoDateView(waypoints).getElement());
render(infoMain.getElement(), new InfoTitleView(waypoints).getElement());

// создаем список точек маршрута

const siteMainElement = document.querySelector(`.page-main`);
const tripWaypointsElement = siteMainElement.querySelector(`.trip-events`);

const waypointsList = new WaypointsListView();
render(tripWaypointsElement, waypointsList.getElement());

// добавляем блок "Сортировка"

render(tripWaypointsElement, new TripSortView().getElement());

// добавляем блок "Добавить точку маршрута"

render(waypointsList.getElement(), new WaypointEditorView(waypoints[0]).getElement(), RenderPosition.AFTERBEGIN);

// добавляем блок "Редактировать точку маршрута"
render(waypointsList.getElement(), new WaypointEditorView().getElement(), RenderPosition.AFTERBEGIN);

// добавляем блоки "Точка маршрута"

waypoints.forEach((waypoint) => {
  render(waypointsList.getElement(), new TripWaypointView(waypoint).getElement(), RenderPosition.AFTERBEGIN);
});
