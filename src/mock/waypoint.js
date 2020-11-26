import dayjs from 'dayjs';
import {getRandomValue, getRandomElement, getPartialArray} from '../util.js';
import {destinationsNames} from './destination.js';
import {generateOffersNames} from './offers.js';

const WAYPOINT_PRICE_MIN = 10;
const WAYPOINT_PRICE_MAX = 300;
const TRAVEL_TIME_MAX = 3000;

const types = [`Check-in`, `Sightseeing`, `Restaurant`, `Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];

const generateDate = () => {
  let start = dayjs();
  let close = start.add(getRandomValue(TRAVEL_TIME_MAX), `minute`);
  start = start.toDate();
  close = close.toDate();
  return {
    start,
    close
  };
};

export const generateWaypoint = () => {
  const type = getRandomElement(types);
  const offers = getPartialArray(generateOffersNames(type));

  return {
    type,
    destination: getRandomElement(destinationsNames),
    offers,
    date: generateDate(),
    price: getRandomValue(WAYPOINT_PRICE_MAX, WAYPOINT_PRICE_MIN),
    isFavorites: Boolean(getRandomValue(1))
  };
};
