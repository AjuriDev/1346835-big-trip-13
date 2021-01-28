import Observer from '../util/observer.js';

export default class Waypoints extends Observer {
  constructor() {
    super();
    this._waypoints = [];
    this._destinations = [];
    this._offers = [];
  }

  setWaypoints(updateType, waypoints) {
    this._waypoints = waypoints.slice();

    this._notify(updateType);
  }

  setDestinations(destinations) {
    this._destinations = destinations.slice();
  }

  setOffers(offers) {
    this._offers = offers.slice();
  }

  getWaypoints() {
    return this._waypoints;
  }

  getDestinations() {
    return this._destinations;
  }

  getOffers() {
    return this._offers;
  }

  updateWaypoint(updateType, update) {
    const index = this._waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting waypoint`);
    }

    this._waypoints = [
      ...this._waypoints.slice(0, index),
      update,
      ...this._waypoints.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addWaypoint(updateType, update) {
    this._waypoints = [
      update,
      ...this._waypoints
    ];

    this._notify(updateType, update);
  }

  deleteWaypoint(updateType, update) {
    const index = this._waypoints.findIndex((waypoint) => waypoint.id === update.id);

    if (index === -1) {
      throw new Error(`Can't delete unexisting waypoint`);
    }

    this._waypoints = [
      ...this._waypoints.slice(0, index),
      ...this._waypoints.slice(index + 1)
    ];

    this._notify(updateType);
  }

  static adaptToClient(waypoint) {
    const adaptedWaypoint = Object.assign(
        {},
        waypoint,
        {
          price: waypoint.base_price,
          date: {
            start: new Date(waypoint.date_from),
            close: new Date(waypoint.date_to)
          },
          isFavorites: waypoint.is_favorite
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedWaypoint.date_from;
    delete adaptedWaypoint.date_to;
    delete adaptedWaypoint.is_favorite;
    delete adaptedWaypoint.base_price;

    return adaptedWaypoint;
  }

  static adaptToServer(waypoint) {
    const adaptedWaypoint = Object.assign(
        {},
        waypoint,
        {
          'date_from': waypoint.date.start.toISOString(),
          'date_to': waypoint.date.close.toISOString(),
          'is_favorite': waypoint.isFavorites,
          'base_price': waypoint.price
        }
    );

    // Ненужные ключи мы удаляем
    delete adaptedWaypoint.date;
    delete adaptedWaypoint.isFavorites;
    delete adaptedWaypoint.price;

    return adaptedWaypoint;
  }
}
