import dayjs from 'dayjs';
import {getRandomValue, getRandomElement, getPartialArray} from '../util.js';
import {destinationsNames} from '../const.js';
import {generateOffersNames} from './offers.js';
import {types} from '../const.js';

const WAYPOINT_PRICE_MIN = 10;
const WAYPOINT_PRICE_MAX = 300;
const TRAVEL_TIME_MAX = 3000;

const generateDate = () => {
  let start = dayjs().add(-getRandomValue(TRAVEL_TIME_MAX), `minute`);
  let close = start.add(getRandomValue(TRAVEL_TIME_MAX), `minute`);
  start = start.toDate();
  close = close.toDate();
  return {
    start,
    close
  };
};

const generateWaypoint = () => {
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

export {generateWaypoint};
