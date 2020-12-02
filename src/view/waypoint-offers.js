import {offers} from '../mock/offers.js';

const createWaypointOffersTemplate = (offersNames) => {
  let offersList = ``;
  offers.forEach((offer) => {
    if (offersNames.includes(offer.name)) {
      offersList += (`
        <li class="event__offer">
          <span class="event__offer-title">${offer.name}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </li>
      `);
    }
  });

  return offersList;
};

const createOfferTemplate = (offer, waypointOffers) => {
  return (`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-${offer.id}"${waypointOffers.includes(offer.name) ? ` checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer.id}-1">
        <span class="event__offer-title">${offer.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
  `);
};

const createOffersSectionTemplate = (type, waypointOffers) => {
  const options = offers
    .filter((offer) => offer.types.includes(type))
    .map((offer) => createOfferTemplate(offer, waypointOffers))
    .join(``);

  return (`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${options}
      </div>
    </section>
  `);
};

export {createWaypointOffersTemplate, createOffersSectionTemplate};
