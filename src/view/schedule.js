import dayjs from 'dayjs';
import {humanizeDate} from '../util.js';

const calculateDuration = (startTime, closeTime) => {
  const start = dayjs(startTime);
  const end = dayjs(closeTime);
  const days = end.diff(start, `day`) % 30 < 10
    ? `0${end.diff(start, `day`) % 30}`
    : end.diff(start, `day`) % 30;
  const hours = end.diff(start, `hour`) % 24 < 10
    ? `0${end.diff(start, `hour`) % 24}`
    : end.diff(start, `hour`) % 24;
  const minutes = end.diff(start, `minute`) % 60 < 10
    ? `0${end.diff(start, `minute`) % 60}`
    : end.diff(start, `minute`) % 60;

  if (Number(days)) {
    return `${days}D ${hours}H ${minutes}M`;
  } else if (Number(hours)) {
    return `${hours}H ${minutes}M`;
  } else if (Number(minutes)) {
    return `${minutes}M`;
  }
  return ``;
};

const createScheduleTemplate = (startDate, closeDate) => {
  const startTimeAtribute = humanizeDate(startDate, `YYYY-MM-DDTHH:mm`);
  const closeTimeAtribute = humanizeDate(closeDate, `YYYY-MM-DDTHH:mm`);
  const startTime = humanizeDate(startDate, `HH:mm`);
  const closeTime = humanizeDate(closeDate, `HH:mm`);
  const duration = calculateDuration(startDate, closeDate);

  return (`
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${startTimeAtribute}">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${closeTimeAtribute}">${closeTime}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
  `);
};

export {createScheduleTemplate};
