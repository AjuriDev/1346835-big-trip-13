import {getRandomValue, getPartialArray} from '../util.js';

const SENTENCES_MIN = 1;
const SENTENCES_MAX = 5;
const PHOTOS_MAX = 5;

const destinationsNames = [`Amsterdam`, `Geneva`, `Chamonix`];

const descriptionTemplate = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateDescription = (text) => {
  let sentences = text.split(`.`);
  sentences.pop();
  sentences = getPartialArray(sentences, SENTENCES_MIN, SENTENCES_MAX);
  const description = sentences.join(`. `) + `.`;
  return description;
};

const generatePhotos = (number) => {
  const photos = [];
  const photosNumber = getRandomValue(number);
  for (let i = 0; i < photosNumber; i++) {
    photos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return photos;
};

const generateDestination = (destination) => {
  return {
    name: destination,
    description: generateDescription(descriptionTemplate),
    photos: generatePhotos(PHOTOS_MAX)
  };
};

export {destinationsNames, generateDestination};
