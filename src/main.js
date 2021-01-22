import InfoBlockView from './view/trip-info.js';
import InfoMainView from './view/info-main.js';
import InfoTitleView from './view/info-title.js';
import InfoDateView from './view/info-date.js';
import InfoCostView from './view/info-cost.js';
import TripTabsView from './view/trip-tabs.js';
import TripControlsView from './view/trip-controls.js';
import NewWaypointBtn from './view/new-waypoint-btn.js';
import {generateWaypoint} from './mock/waypoint.js';
import TripPresenter from './presenter/trip.js';
import FilterPresenter from './presenter/filter.js';
import WaypointsModel from './model/waypoints.js';
import FilterModel from './model/filter.js';
import {render} from './util/render.js';

const WAYPOINTS_NUMBER = 15;
const waypoints = Array(WAYPOINTS_NUMBER)
  .fill()
  .map(generateWaypoint);

const waypointsModel = new WaypointsModel();
waypointsModel.setWaypoints(waypoints);

const filterModel = new FilterModel();

const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

// добавляем кнопку "Новая точка маршрута"

render(tripMainElement, new NewWaypointBtn());

// добавляем блоки "Меню" и "Фильтры"

const tripControls = new TripControlsView();
render(tripMainElement, tripControls);
render(tripControls, new TripTabsView());

// добавляем блок "Маршрут и стоимость"
const infoBlock = new InfoBlockView();
render(tripMainElement, infoBlock);
render(infoBlock, new InfoCostView(waypoints));

const infoMain = new InfoMainView();
render(infoBlock, infoMain);
render(infoMain, new InfoDateView(waypoints));
render(infoMain, new InfoTitleView(waypoints));


const siteMainElement = document.querySelector(`.page-main`);
const tripContainerElement = siteMainElement.querySelector(`.page-body__container`);

const tripPresenter = new TripPresenter(tripContainerElement, waypointsModel, filterModel);
const filterPresenter = new FilterPresenter(tripControls, filterModel);

tripPresenter.init();
filterPresenter.init();
