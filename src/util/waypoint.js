import dayjs from 'dayjs';

const humanizeDate = (date, format) => {
  if (date) {
    return dayjs(date).format(format);
  }
  return ``;
};

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

const sortDateUp = ({date: {start: startA}}, {date: {start: startB}}) => {
  startA = dayjs(startA);
  startB = dayjs(startB);
  return startA.diff(startB);
};

const sortTimeUp = ({date: {start: startA, close: closeA}}, {date: {start: startB, close: closeB}}) => {
  return dayjs(closeB).diff(dayjs(startB)) - dayjs(closeA).diff(dayjs(startA));
};

const sortPriceUp = ({price: priceA}, {price: priceB}) => {
  return priceB - priceA;
};

const isWaypointFuture = (dateFrom) => {
  return dayjs().diff(dayjs(dateFrom)) < 0;
};

const isWaypointPast = (dateTo) => {
  return dayjs().diff(dayjs(dateTo)) > 0;
};

export {humanizeDate, calculateDuration, sortDateUp, sortTimeUp, sortPriceUp, isWaypointFuture, isWaypointPast};
