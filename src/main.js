import SiteMenuView from './view/site-menu.js';
import TripControlsView from './view/trip-controls.js';
import NewWaypointBtn from './view/new-waypoint-btn.js';
import StatisticsView from './view/statistics.js';
import TripPresenter from './presenter/trip.js';
import FilterPresenter from './presenter/filter.js';
import InfoPresenter from './presenter/info.js';
import WaypointsModel from './model/waypoints.js';
import FilterModel from './model/filter.js';
import {isOnline} from './util/common.js';
import {render, remove, RenderPosition} from './util/render.js';
import {setOffline, removeOffline, toast} from './util/offline/offline.js';
import {MenuItem, UpdateType} from './const.js';
import Api from './api/api.js';
import Store from './api/store.js';
import Provider from './api/provider.js';

const AUTHORIZATION = `Basic wrhstjfkutrw264yrgffvw`;
const END_POINT = `https://13.ecmascript.pages.academy/big-trip`;
const STORE_PREFIX = `bigtrip-localstorage`;
const STORE_VER = `v13`;
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;

const api = new Api(END_POINT, AUTHORIZATION);

const store = new Store(STORE_NAME, window.localStorage);
const apiWithProvider = new Provider(api, store);

let statisticsComponent = null;

const waypointsModel = new WaypointsModel();

const filterModel = new FilterModel();


const siteHeaderElement = document.querySelector(`.page-header`);
const tripMainElement = siteHeaderElement.querySelector(`.trip-main`);
const siteMainElement = document.querySelector(`.page-main`);
const pageContainerElement = siteMainElement.querySelector(`.page-body__container`);

const newWaypointComponent = new NewWaypointBtn();

const handleNewWaypointClick = () => {
  remove(statisticsComponent);
  tripPresenter.destroy();
  tripPresenter.init();
  siteMenuComponent.toggleSiteMenuItem();

  if (!isOnline()) {
    toast(`You can't create new task offline`);
    return;
  }

  tripPresenter.createWaypoint();
};

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
      newWaypointComponent.activate();
      break;
    case MenuItem.STATS:
      tripPresenter.destroy();
      newWaypointComponent.activate();
      remove(statisticsComponent);
      statisticsComponent = new StatisticsView(waypointsModel.getWaypoints());
      render(pageContainerElement, statisticsComponent);
      break;
  }

  siteMenuComponent.toggleSiteMenuItem(menuItem);
};

const tripPresenter = new TripPresenter(pageContainerElement, newWaypointComponent, waypointsModel, filterModel, apiWithProvider);
const filterPresenter = new FilterPresenter(tripControls, waypointsModel, filterModel);
const infoPresenter = new InfoPresenter(tripMainElement, waypointsModel);

tripPresenter.init();

Promise.all([apiWithProvider.getWaypoints(), apiWithProvider.getDestinations(), apiWithProvider.getOffers()])
  .then(([waypoints, destinations, offers]) => {
    waypointsModel.setDestinations(destinations);
    waypointsModel.setOffers(offers);
    waypointsModel.setWaypoints(UpdateType.INIT, waypoints);

    render(tripControls, siteMenuComponent);
    siteMenuComponent.setOnSiteMenuClick(handleSiteMenuClick);

    render(tripMainElement, newWaypointComponent, RenderPosition.AFTERBEGIN);
    newWaypointComponent.setOnNewWaypointClick(handleNewWaypointClick);

    infoPresenter.init();
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

window.addEventListener(`load`, () => {
  navigator.serviceWorker.register(`/sw.js`);
});

window.addEventListener(`online`, () => {
  document.title = document.title.replace(` [offline]`, ``);
  removeOffline();
  apiWithProvider.sync();
});

window.addEventListener(`offline`, () => {
  document.title += ` [offline]`;
  setOffline();
});
