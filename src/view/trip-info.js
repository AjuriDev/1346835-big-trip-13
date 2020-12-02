import dayjs from 'dayjs';
import {offers} from '../mock/offers.js';

const MONTH_LETTERS_NUMBER = 3;
const MONTH_DROP_LETTERS_NUMBER = 4;

const isSameMonth = (start, close) => {
  return start.slice(0, MONTH_LETTERS_NUMBER) === close.slice(0, MONTH_LETTERS_NUMBER) ? true : false;
};

const getTripCost = (waypoints) => {
  let cost = 0;

  waypoints.forEach((waypoint) => {
    cost += waypoint.price;
    offers.forEach((offer) => {
      if (waypoint.offers.includes(offer.name)) {
        cost += offer.price;
      }
    });
  });

  return cost;
};

const createInfoTitleTemplate = (waypoints) => {
  const route = waypoints.map((waypoint) => waypoint.destination).join(` &mdash; `);

  return (`
    <h1 class="trip-info__title">${route}</h1>
  `);
};

const createInfoDateTemplate = (waypoints) => {
  const startDate = dayjs(waypoints[0].date.start).format(`MMM DD`);
  const closeDate = dayjs(waypoints[waypoints.length - 1].date.close).format(`MMM DD`);
  const tripDuration = isSameMonth(startDate, closeDate) ? closeDate.slice(MONTH_DROP_LETTERS_NUMBER) : closeDate;

  return (`
    <p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${tripDuration}</p>
  `);
};

const createInfoCostTemplate = (waypoints) => {
  const cost = getTripCost(waypoints);

  return (`
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  `);
};

const createInfoBlockTemplate = (waypoints) => {
  const tripRoute = createInfoTitleTemplate(waypoints);
  const tripDate = createInfoDateTemplate(waypoints);
  const tripCost = createInfoCostTemplate(waypoints);

  return (`
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        ${tripRoute}

        ${tripDate}
      </div>

      ${tripCost}
    </section>
  `);
};

export {createInfoBlockTemplate};
