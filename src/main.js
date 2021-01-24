import InfoBlockView from './view/trip-info.js';
import InfoMainView from './view/info-main.js';
import InfoTitleView from './view/info-title.js';
import InfoDateView from './view/info-date.js';
import InfoCostView from './view/info-cost.js';
import SiteMenuView from './view/site-menu.js';
import TripControlsView from './view/trip-controls.js';
import NewWaypointBtn from './view/new-waypoint-btn.js';
import StatisticsView from "./view/statistics.js";
import {generateWaypoint} from './mock/waypoint.js';
import TripPresenter from './presenter/trip.js';
import FilterPresenter from './presenter/filter.js';
import WaypointsModel from './model/waypoints.js';
import FilterModel from './model/filter.js';
import {render, remove} from './util/render.js';
import {MenuItem} from "./const.js";

const WAYPOINTS_NUMBER = 15;
const waypoints = Array(WAYPOINTS_NUMBER)
  .fill()
  .map(generateWaypoint);

let statisticsComponent = null;

const waypointsModel = new WaypointsModel();
waypointsModel.setWaypoints(waypoints);

const filterModel = new FilterModel();

const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);

// добавляем кнопку "Новая точка маршрута"
const newWaypointComponent = new NewWaypointBtn();
render(tripMainElement, newWaypointComponent);

const handleNewWaypointClick = () => {
  remove(statisticsComponent);
  tripPresenter.destroy();
  tripPresenter.init();
  tripPresenter.createWaypoint();
  siteMenuComponent.toggleSiteMenuItem();
};

newWaypointComponent.setOnNewWaypointClick(handleNewWaypointClick);

// добавляем блоки "Меню" и "Фильтры"

const tripControls = new TripControlsView();
const siteMenuComponent = new SiteMenuView();
render(tripMainElement, tripControls);
render(tripControls, siteMenuComponent);

const handleSiteMenuClick = (menuItem) => {
  if (menuItem === undefined) {
    return;
  }

  switch (menuItem) {
    case MenuItem.TABLE:
      remove(statisticsComponent);
      tripPresenter.destroy();
      tripPresenter.init();
      break;
    case MenuItem.STATS:
      tripPresenter.destroy();
      remove(statisticsComponent);
      statisticsComponent = new StatisticsView(waypointsModel.getWaypoints());
      render(pageContainerElement, statisticsComponent);
      break;
  }

  siteMenuComponent.toggleSiteMenuItem(menuItem);
};

siteMenuComponent.setOnSiteMenuClick(handleSiteMenuClick);

// добавляем блок "Маршрут и стоимость"
const infoBlock = new InfoBlockView();
render(tripMainElement, infoBlock);
render(infoBlock, new InfoCostView(waypoints));

const infoMain = new InfoMainView();
render(infoBlock, infoMain);
render(infoMain, new InfoDateView(waypoints));
render(infoMain, new InfoTitleView(waypoints));


const siteMainElement = document.querySelector(`.page-main`);
const pageContainerElement = siteMainElement.querySelector(`.page-body__container`);

const tripPresenter = new TripPresenter(pageContainerElement, waypointsModel, filterModel);
const filterPresenter = new FilterPresenter(tripControls, filterModel);

tripPresenter.init();
filterPresenter.init();
