const createPhotoTemplate = (photo) => {
  return `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`;
};

const createDestinationPhotosTemplate = (photos) => {
  return (
    `<div class="event__photos-container">
      <div class="event__photos-tape"
        ${photos.map(createPhotoTemplate).join()}
      </div>
    </div>`
  );
};

export {createDestinationPhotosTemplate};
