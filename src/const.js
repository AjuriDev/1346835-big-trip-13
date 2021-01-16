import {generateDestination} from './mock/destination.js';

const TYPES = [`Check-in`, `Sightseeing`, `Restaurant`, `Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const DEFAULT_TYPE = `Flight`;
const DESTINATION_NAMES = [`Amsterdam`, `Geneva`, `Chamonix`];
const destinations = DESTINATION_NAMES.map(generateDestination);
const SortType = {
  DEFAULT: `default`,
  TIME_UP: `time-up`,
  PRICE_UP: `price-up`
};

export {TYPES, DEFAULT_TYPE, DESTINATION_NAMES, destinations, SortType};
