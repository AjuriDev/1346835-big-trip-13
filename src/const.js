import {generateDestination} from './mock/destination.js';

const TYPES = [`Check-in`, `Sightseeing`, `Restaurant`, `Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const DEFAULT_TYPE = `Flight`;
const DESTINATION_NAMES = [`Amsterdam`, `Geneva`, `Chamonix`];
const DESTINATIONS = DESTINATION_NAMES.map(generateDestination);
const TIME_FORMAT = `DD/MM/YY HH:mm`;

const SortType = {
  DEFAULT: `default`,
  TIME_UP: `time-up`,
  PRICE_UP: `price-up`
};

const UserAction = {
  UPDATE_WAYPOINT: `UPDATE_WAYPOINT`,
  ADD_WAYPOINT: `ADD_WAYPOINT`,
  DELETE_WAYPOINT: `DELETE_WAYPOINT`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

const FilterType = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

const MenuItem = {
  TABLE: `TABLE`,
  STATS: `STATS`
};

export {
  TYPES,
  DEFAULT_TYPE,
  DESTINATION_NAMES,
  DESTINATIONS,
  TIME_FORMAT,
  SortType,
  UserAction,
  UpdateType,
  FilterType,
  MenuItem
};
