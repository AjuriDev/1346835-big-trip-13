import dayjs from 'dayjs';

const humanizeDate = (date, format) => {
  if (date) {
    return dayjs(date).format(format);
  }
  return ``;
};

export {humanizeDate};
