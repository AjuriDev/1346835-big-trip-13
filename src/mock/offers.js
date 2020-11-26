const offers = [
  {
    types: [`Flight`],
    name: `luggage`,
    price: 30
  },
  {
    types: [`Flight`],
    name: `comfort`,
    price: 80
  },
  {
    types: [`Flight`],
    name: `meal`,
    price: 15
  },
  {
    types: [`Flight`],
    name: `seats`,
    price: 5
  },
  {
    types: [`Flight`],
    name: `train`,
    price: 40
  },
  {
    types: [`Taxi`],
    name: `uber`,
    price: 20
  },
  {
    types: [`Drive`],
    name: `car`,
    price: 200
  },
  {
    types: [`Check-in`],
    name: `breakfast`,
    price: 50
  },
  {
    types: [`Sightseeing`],
    name: `book-tickets`,
    price: 40
  },
  {
    types: [`Sightseeing`],
    name: `lunch`,
    price: 30
  }
];

const generateOffersNames = (type) => {
  return offers.
  filter((offer) => offer.types.includes(type)).
  map((offer) => offer.name);
};

export {offers, generateOffersNames};
