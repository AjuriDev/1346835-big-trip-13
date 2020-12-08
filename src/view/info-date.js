import dayjs from 'dayjs';
import AbstractView from "./abstract.js";

const MONTH_LETTERS_NUMBER = 3;
const MONTH_DROP_LETTERS_NUMBER = 4;

const isSameMonth = (start, close) => {
  return start.slice(0, MONTH_LETTERS_NUMBER) === close.slice(0, MONTH_LETTERS_NUMBER) ? true : false;
};

const createInfoDateTemplate = (waypoints) => {
  const startDate = dayjs(waypoints[0].date.start).format(`MMM DD`);
  const closeDate = dayjs(waypoints[waypoints.length - 1].date.close).format(`MMM DD`);
  const tripDuration = isSameMonth(startDate, closeDate) ? closeDate.slice(MONTH_DROP_LETTERS_NUMBER) : closeDate;

  return `<p class="trip-info__dates">${startDate}&nbsp;&mdash;&nbsp;${tripDuration}</p>`;
};

export default class InfoDate extends AbstractView {
  constructor(waypoints) {
    super();
    this._waypoints = waypoints;
    this._element = null;
  }

  _getTemplate() {
    return createInfoDateTemplate(this._waypoints);
  }
}
