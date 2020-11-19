import {createTripInfoBlock} from './view/trip-info.js';
import {createTripTabsSwitcher} from './view/trip-tabs.js';
import {createTripFilters} from './view/trip-filters.js';
import {createTripSortForm} from './view/trip-sort.js';
import {createEventsList} from './view/events-list.js';
import {createNewEvent} from './view/event-create.js';
import {editEvent} from './view/event-edit.js';
import {createTripEvent} from './view/trip-event.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// добавляем блок "Маршрут и стоимость"
const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

render(tripMainElement, createTripInfoBlock(), `afterbegin`);

// добавляем блоки "Меню" и "Фильтры"
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsTitles = tripControlsElement.querySelectorAll(`h2`);
const tripControls = [createTripTabsSwitcher(), createTripFilters()];

tripControlsTitles.forEach((title, i) => {
  render(title, tripControls[i], `afterend`);
});

// добавляем блок "Сортировка"
const siteMainElement = document.querySelector(`.page-main`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createTripSortForm(), `beforeend`);

// создаем список точек маршрута
render(tripEventsElement, createEventsList(), `beforeend`);

// добавляем блок "Добавить точку маршрута"
const eventsList = tripEventsElement.querySelector(`.trip-events__list`);

render(eventsList, createNewEvent(), `afterbegin`);

// добавляем блок "Редактировать точку маршрута"
render(eventsList, editEvent(), `afterbegin`);

// добавляем 3 блока "Точка маршрута"
render(eventsList, createTripEvent(), `beforeend`);
render(eventsList, createTripEvent(), `beforeend`);
render(eventsList, createTripEvent(), `beforeend`);
