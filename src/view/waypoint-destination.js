import {destinations} from '../const.js';

const createDestinationSectionTemplate = (destination) => {
  destination = destinations.find((place) => place.name === destination);
  if (destination) {
    return (`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>
      </section>
    `);
  }
  return ``;
};

export {createDestinationSectionTemplate};
