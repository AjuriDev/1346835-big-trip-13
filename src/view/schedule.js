import {humanizeDate, calculateDuration} from '../util/waypoint.js';

const createScheduleTemplate = (startDate, closeDate) => {
  const startTimeAtribute = humanizeDate(startDate, `YYYY-MM-DDTHH:mm`);
  const closeTimeAtribute = humanizeDate(closeDate, `YYYY-MM-DDTHH:mm`);
  const startTime = humanizeDate(startDate, `HH:mm`);
  const closeTime = humanizeDate(closeDate, `HH:mm`);
  const duration = calculateDuration(startDate, closeDate);

  return (
    `<div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${startTimeAtribute}">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${closeTimeAtribute}">${closeTime}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>`
  );
};

export {createScheduleTemplate};
