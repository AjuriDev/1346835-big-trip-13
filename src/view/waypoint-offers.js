import {getOffers} from '../util/offers.js';

const createWaypointOffersTemplate = (type, waypointOffers, byTypeOffers) => {
  const offersNames = waypointOffers.map((offer) => offer.title);
  let offersList = ``;
  const offers = getOffers(byTypeOffers, type);
  offers.forEach((offer) => {
    if (offersNames.includes(offer.title)) {
      offersList += (
        `<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </li>`
      );
    }
  });

  return offersList;
};

const createOfferTemplate = (offer, offersNames, isDisabled) => {
  return (
    `<div class="event__offer-selector">
      <input
        class="event__offer-checkbox  visually-hidden"
        id="event-offer-${offer.title}"
        type="checkbox"
        name="event-offer-${offer.title}"
        ${offersNames.includes(offer.title) ? ` checked` : ``}
        ${isDisabled ? `disabled` : ``}
        />
      <label class="event__offer-label" for="event-offer-${offer.title}" data-title="${offer.title}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
  );
};

const createOffersSectionTemplate = (type, waypointOffers, isOffers, offersList, isDisabled) => {
  if (!isOffers) {
    return (
      `<section class="event__section  event__section--offers visually-hidden">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      </section>`
    );
  }
  const offersNames = waypointOffers.map((offer) => offer.title);
  const offers = getOffers(offersList, type);
  const options = offers.map((offer) => createOfferTemplate(offer, offersNames, isDisabled)).join(``);

  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${options}
      </div>
    </section>`
  );
};

export {createWaypointOffersTemplate, createOffersSectionTemplate};
