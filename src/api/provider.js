import WaypointsModel from "../model/waypoints.js";
import {isOnline} from "../util/common.js";

const getSyncedWaypoints = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.point);
};

const createStoreStructure = (items) => {

  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getWaypoints() {
    if (isOnline()) {
      return this._api.getWaypoints()
        .then((waypoints) => {
          const items = createStoreStructure(waypoints.map(WaypointsModel.adaptToServer));
          this._store.setItems(items);
          return waypoints;
        });
    }

    const storeWaypoints = Object.values(this._store.getItems());

    return Promise.resolve(storeWaypoints.map(WaypointsModel.adaptToClient));
  }

  getDestinations() {
    if (isOnline()) {
      return this._api.getDestinations();
    }

    return Promise.resolve([]);
  }

  getOffers() {
    if (isOnline()) {
      return this._api.getOffers();
    }

    return Promise.resolve([]);
  }

  updateWaypoint(waypoint) {
    if (isOnline()) {
      return this._api.updateWaypoint(waypoint)
        .then((updatedWaypoint) => {
          this._store.setItem(updatedWaypoint.id, WaypointsModel.adaptToServer(updatedWaypoint));
          return updatedWaypoint;
        });
    }

    this._store.setItem(waypoint.id, WaypointsModel.adaptToServer(Object.assign({}, waypoint)));

    return Promise.resolve(waypoint);
  }

  addWaypoint(waypoint) {
    if (isOnline()) {
      return this._api.addWaypoint(waypoint)
        .then((newWaypoint) => {
          this._store.setItem(newWaypoint.id, WaypointsModel.adaptToServer(newWaypoint));
          return newWaypoint;
        });
    }

    return Promise.reject(new Error(`Add waypoint failed`));
  }

  deleteWaypoint(waypoint) {
    if (isOnline()) {
      return this._api.deleteWaypoint(waypoint)
        .then(() => this._store.removeItem(waypoint.id));
    }

    return Promise.reject(new Error(`Delete waypoint failed`));
  }

  sync() {
    if (isOnline()) {
      const storeWaypoints = Object.values(this._store.getItems());

      return this._api.sync(storeWaypoints)
        .then((response) => {
          const createdWaypoints = getSyncedWaypoints(response.created);
          const updatedWaypoints = getSyncedWaypoints(response.updated);

          const items = createStoreStructure([...createdWaypoints, ...updatedWaypoints]);

          this._store.setItems(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }
}
