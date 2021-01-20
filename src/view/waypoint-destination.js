import {createDestinationPhotosTemplate} from './destination-photos.js';

const createDescriptionTemplate = (description) => {
  return `<p class="event__destination-description">${description}</p>`;
};

const createDestinationSectionTemplate = ({description, pictures: photos, isPhoto, isDescription}) => {
  if (!isDescription && !isPhoto) {
    return (
      `<section class="event__section  event__section--destination visually-hidden">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      </section>`
    );
  }

  const photoList = isPhoto ? createDestinationPhotosTemplate(photos) : ``;
  const text = isDescription ? createDescriptionTemplate(description) : ``;

  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${text}
      ${photoList}
    </section>`
  );
};

export {createDestinationSectionTemplate};
