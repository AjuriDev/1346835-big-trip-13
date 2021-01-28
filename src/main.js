import SiteMenuView from './view/site-menu.js';
import TripControlsView from './view/trip-controls.js';
import NewWaypointBtn from './view/new-waypoint-btn.js';
import StatisticsView from './view/statistics.js';
import TripPresenter from './presenter/trip.js';
import FilterPresenter from './presenter/filter.js';
import InfoPresenter from './presenter/info.js';
import WaypointsModel from './model/waypoints.js';
import FilterModel from './model/filter.js';
import {render, remove, RenderPosition} from './util/render.js';
import {MenuItem, UpdateType} from './const.js';
import Api from './api.js';

const AUTHORIZATION = `Basic 112358`;
const END_POINT = `https://13.ecmascript.pages.academy/big-trip`;

const api = new Api(END_POINT, AUTHORIZATION);

let statisticsComponent = null;

const waypointsModel = new WaypointsModel();

const filterModel = new FilterModel();


const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);
const siteMainElement = document.querySelector(`.page-main`);
const pageContainerElement = siteMainElement.querySelector(`.page-body__container`);

// добавляем кнопку "Новая точка маршрута"
const newWaypointComponent = new NewWaypointBtn();

const handleNewWaypointClick = () => {
  remove(statisticsComponent);
  tripPresenter.destroy();
  tripPresenter.init();
  tripPresenter.createWaypoint();
  siteMenuComponent.toggleSiteMenuItem();
};

// добавляем блоки "Меню" и "Фильтры"

const tripControls = new TripControlsView();
const siteMenuComponent = new SiteMenuView();
render(tripMainElement, tripControls);

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

const tripPresenter = new TripPresenter(pageContainerElement, newWaypointComponent, waypointsModel, filterModel, api);
const filterPresenter = new FilterPresenter(tripControls, filterModel);
const infoPresenter = new InfoPresenter(tripMainElement, waypointsModel);

tripPresenter.init();

Promise.all([api.getWaypoints(), api.getDestinations(), api.getOffers()])
  .then(([waypoints, destinations, offers]) => {
    waypointsModel.setDestinations(destinations);
    waypointsModel.setOffers(offers);
    waypointsModel.setWaypoints(UpdateType.INIT, waypoints);

    render(tripControls, siteMenuComponent);
    siteMenuComponent.setOnSiteMenuClick(handleSiteMenuClick);

    render(tripMainElement, newWaypointComponent, RenderPosition.AFTERBEGIN);
    newWaypointComponent.setOnNewWaypointClick(handleNewWaypointClick);

    if (waypoints.length > 0) {
      infoPresenter.init();
    }

    filterPresenter.init();
  })
  .catch(() => {
    waypointsModel.setDestinations([]);
    waypointsModel.setOffers([]);
    waypointsModel.setWaypoints(UpdateType.INIT, []);

    render(tripControls, siteMenuComponent);
    siteMenuComponent.setOnSiteMenuClick(handleSiteMenuClick);

    render(tripMainElement, newWaypointComponent, RenderPosition.AFTERBEGIN);
    newWaypointComponent.setOnNewWaypointClick(handleNewWaypointClick);

    filterPresenter.init();
  });
