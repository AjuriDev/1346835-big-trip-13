const createPhotoTemplate = (photo) => {
  return `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`;
};

const createPhotoListTemplate = (photos) => {
  photos = photos.map(createPhotoTemplate).join();

  return (
    `<div class="event__photos-tape">
      ${photos}
    </div>`
  );
};

const createDestinationPhotosTemplate = (photos) => {
  const photoList = createPhotoListTemplate(photos);

  return (
    `<div class="event__photos-container">
      ${photoList}
    </div>`
  );
};

export {createDestinationPhotosTemplate};
