import {getRandomValue, getPartialArray} from '../util/common.js';

const SENTENCES_MIN = 1;
const SENTENCES_MAX = 5;
const PHOTOS_SENTENCES_MIN = 1;
const PHOTOS_SENTENCES_MAX = 2;
const PHOTOS_MAX = 5;

const DESCRIPTION_TEMPLATE = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateDescription = (text, sentencesMin, sentencesMax) => {
  let sentences = text.split(`.`);
  sentences.pop();
  sentences = getPartialArray(sentences, sentencesMin, sentencesMax);
  const description = sentences.join(`. `) + `.`;
  return description;
};

const getPhoto = () => {
  return {
    src: `http://picsum.photos/248/152?r=${Math.random()}`,
    description: generateDescription(DESCRIPTION_TEMPLATE, PHOTOS_SENTENCES_MIN, PHOTOS_SENTENCES_MAX)
  };
};

const generatePhotos = (number) => {
  const photos = [];
  const photosNumber = getRandomValue(number);
  for (let i = 0; i < photosNumber; i++) {
    photos.push(getPhoto());
  }
  return photos;
};

const generateDestination = (destination) => {
  return {
    name: destination,
    description: generateDescription(DESCRIPTION_TEMPLATE, SENTENCES_MIN, SENTENCES_MAX),
    pictures: generatePhotos(PHOTOS_MAX)
  };
};

export {generateDestination};
