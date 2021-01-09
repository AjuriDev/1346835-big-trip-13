import dayjs from 'dayjs';
import {getRandomValue, getRandomElement, getPartialArray} from '../util/common.js';
import {DESTINATION_NAMES} from '../const.js';
import {generateOffersNames} from './offers.js';
import {TYPES} from '../const.js';

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

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generateWaypoint = () => {
  const type = getRandomElement(TYPES);
  const offers = getPartialArray(generateOffersNames(type));
  return {
    id: generateId(),
    type,
    destination: getRandomElement(DESTINATION_NAMES),
    offers,
    date: generateDate(),
    price: getRandomValue(WAYPOINT_PRICE_MAX, WAYPOINT_PRICE_MIN),
    isFavorites: Boolean(getRandomValue(1))
  };
};

export {generateWaypoint};
