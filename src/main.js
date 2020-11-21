import {createInfoBlockTemplate} from './view/trip-info.js';
import {createTabsSwitcherTemplate} from './view/trip-tabs.js';
import {createFiltersTemplate} from './view/trip-filters.js';
import {createSortTemplate} from './view/trip-sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createNewEventTemplate} from './view/event-create.js';
import {createEventEditorTemplate} from './view/event-edit.js';
import {createEventTemplate} from './view/trip-event.js';

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
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createSortTemplate());

// создаем список точек маршрута
render(tripEventsElement, createEventsListTemplate());

// добавляем блок "Добавить точку маршрута"
const eventsList = tripEventsElement.querySelector(`.trip-events__list`);

render(eventsList, createNewEventTemplate(), `afterbegin`);

// добавляем блок "Редактировать точку маршрута"
render(eventsList, createEventEditorTemplate(), `afterbegin`);

// добавляем 3 блока "Точка маршрута"
render(eventsList, createEventTemplate());
render(eventsList, createEventTemplate());
render(eventsList, createEventTemplate());
