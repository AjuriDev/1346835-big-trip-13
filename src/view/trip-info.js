import dayjs from 'dayjs';
import {offers} from '../mock/offers.js';
import {isInclude} from '../util.js';

const isSameMonth = (start, close) => {
  return start.slice(0, 3) === close.slice(0, 3) ? true : false;
};

const getTripCost = (waypoints) => {
  let cost = 0;

  waypoints.forEach((waypoint) => {
    cost += waypoint.price;
    offers.forEach((offer) => {
      isInclude(offer.name, waypoint.offers) ? cost += offer.price : cost;
    });
  });

  return cost;
};

const createInfoTitleTemplate = (waypoints) => {
  const route = waypoints.map((waypoint) => waypoint.destination).join(` &mdash; `);

  return (`
    <h1 class="trip-info__title">${route}</h1>
  `)
};

const createInfoDateTemplate = (waypoints) => {
  const startDate = dayjs(waypoints[0].date.start).format(`MMM DD`);
  const closeDate = dayjs(waypoints[waypoints.length - 1].date.close).format(`MMM DD`);
  const tripDuration = isSameMonth(startDate, closeDate) ? closeDate.slice(4) : closeDate

  return (`
    <p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${tripDuration}</p>
  `)
};

const createInfoCostTemplate = (waypoints) => {
  const cost = getTripCost(waypoints);

  return (`
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  `)
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
