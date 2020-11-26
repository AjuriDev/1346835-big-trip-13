import {createInfoBlockTemplate} from './view/trip-info.js';
import {createTabsSwitcherTemplate} from './view/trip-tabs.js';
import {createFiltersTemplate} from './view/trip-filters.js';
import {createSortTemplate} from './view/trip-sort.js';
import {createWaypointsListTemplate} from './view/waypoints-list.js';
import {createNewWaypointTemplate} from './view/waypoint-create.js';
import {createWaypointEditorTemplate} from './view/waypoint-edit.js';
import {createWaypointTemplate} from './view/trip-waypoint.js';
import {generateWaypoint} from './mock/waypoint.js';
// import {generateDestination} from './mock/destination.js';
// import {offers} from './mock/offers.js';

const WAYPOINTS_NUMBER = 10;
const waypoints = Array(WAYPOINTS_NUMBER).fill().map(generateWaypoint);
// const destinations = [`Amsterdam`, `Geneva`, `Chamonix`].map(generateDestination);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// добавляем блок "Маршрут и стоимость"
const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

render(tripMainElement, createInfoBlockTemplate(), `afterbegin`);

// добавляем блоки "Меню" и "Фильтры"
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsTitles = tripControlsElement.querySelectorAll(`h2`);
const tripControls = [createTabsSwitcherTemplate(), createFiltersTemplate()];

tripControlsTitles.forEach((title, i) => {
  render(title, tripControls[i], `afterend`);
});

// добавляем блок "Сортировка"
const siteMainElement = document.querySelector(`.page-main`);
const tripWaypointsElement = siteMainElement.querySelector(`.trip-events`);

render(tripWaypointsElement, createSortTemplate());

// создаем список точек маршрута
render(tripWaypointsElement, createWaypointsListTemplate());

// добавляем блок "Добавить точку маршрута"
const waypointsList = tripWaypointsElement.querySelector(`.trip-events__list`);

render(waypointsList, createNewWaypointTemplate(), `afterbegin`);

// добавляем блок "Редактировать точку маршрута"
render(waypointsList, createWaypointEditorTemplate(), `afterbegin`);

// добавляем 3 блока "Точка маршрута"
// render(waypointsList, createWaypointTemplate());
// render(waypointsList, createWaypointTemplate());
// render(waypointsList, createWaypointTemplate());
waypoints.forEach((waypoint) => {
  render(waypointsList, createWaypointTemplate(waypoint));
});
