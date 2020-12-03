import dayjs from 'dayjs';
import {createInfoBlockTemplate} from './view/trip-info.js';
import {createTripControlsTemplate} from './view/trip-controls.js';
import {createSortTemplate} from './view/trip-sort.js';
import {createWaypointsListTemplate} from './view/waypoints-list.js';
import {createWaypointEditorTemplate} from './view/waypoint-edit.js';
import {createWaypointTemplate} from './view/trip-waypoint.js';
import {generateWaypoint} from './mock/waypoint.js';
import {renderTemplate, RenderPosition} from './util.js';

const WAYPOINTS_NUMBER = 15;
const waypoints = Array(WAYPOINTS_NUMBER)
  .fill()
  .map(generateWaypoint)
  .sort(({date: {start: startA}}, {date: {start: startB}}) => {
    startA = dayjs(startA);
    startB = dayjs(startB);
    return startA.diff(startB);
  });

// добавляем блок "Маршрут и стоимость"
const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

renderTemplate(tripMainElement, createInfoBlockTemplate(waypoints), RenderPosition.AFTERBEGIN);

// добавляем блоки "Меню" и "Фильтры"

renderTemplate(tripMainElement, createTripControlsTemplate());

// добавляем блок "Сортировка"
const siteMainElement = document.querySelector(`.page-main`);
const tripWaypointsElement = siteMainElement.querySelector(`.trip-events`);

renderTemplate(tripWaypointsElement, createSortTemplate());

// создаем список точек маршрута
renderTemplate(tripWaypointsElement, createWaypointsListTemplate());

// добавляем блок "Добавить точку маршрута"
const waypointsList = tripWaypointsElement.querySelector(`.trip-events__list`);

renderTemplate(waypointsList, createWaypointEditorTemplate(), RenderPosition.AFTERBEGIN);

// добавляем блок "Редактировать точку маршрута"
renderTemplate(waypointsList, createWaypointEditorTemplate(waypoints[0]), RenderPosition.AFTERBEGIN);

// добавляем 3 блока "Точка маршрута"

waypoints.forEach((waypoint) => {
  renderTemplate(waypointsList, createWaypointTemplate(waypoint));
});
