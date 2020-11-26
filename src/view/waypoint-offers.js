import {offers} from '../mock/offers.js';

const generateOffersList = (offersNames) => {
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

export {generateOffersList};
