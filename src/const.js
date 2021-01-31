const TYPES = [`check-in`, `sightseeing`, `restaurant`, `taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];
const DEFAULT_TYPE = `flight`;
const TIME_FORMAT = `DD/MM/YY HH:mm`;

const SortType = {
  DEFAULT: `default`,
  TIME_UP: `time-up`,
  PRICE_UP: `price-up`
};

const UserAction = {
  UPDATE_WAYPOINT: `UPDATE_WAYPOINT`,
  ADD_WAYPOINT: `ADD_WAYPOINT`,
  DELETE_WAYPOINT: `DELETE_WAYPOINT`,
  CANCEL_WAYPOINT: `CANCEL_WAYPOINT`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
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
  TIME_FORMAT,
  SortType,
  UserAction,
  UpdateType,
  FilterType,
  MenuItem
};
