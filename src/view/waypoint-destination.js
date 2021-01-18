import {createDestinationPhotosTemplate} from './destination-photos.js';

const createDestinationSectionTemplate = (destination) => {
  if (destination) {
    const photoList = createDestinationPhotosTemplate(destination.pictures);

    return (
      `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>
        ${photoList}
      </section>`
    );
  }
  return ``;
};

export {createDestinationSectionTemplate};
