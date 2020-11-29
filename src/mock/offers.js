const offers = [
  {
    types: [`Flight`],
    id: `luggage`,
    name: `Add luggage`,
    price: 30
  },
  {
    types: [`Flight`],
    id: `comfort`,
    name: `Switch to comfort`,
    price: 80
  },
  {
    types: [`Flight`],
    id: `meal`,
    name: `Add meal`,
    price: 15
  },
  {
    types: [`Flight`],
    id: `seats`,
    name: `Choose seats`,
    price: 5
  },
  {
    types: [`Flight`],
    id: `train`,
    name: `Travel by train`,
    price: 40
  },
  {
    types: [`Taxi`],
    name: `Order Uber`,
    price: 20
  },
  {
    types: [`Drive`],
    name: `Rent a car`,
    price: 200
  },
  {
    types: [`Check-in`],
    name: `Add breakfast`,
    price: 50
  },
  {
    types: [`Sightseeing`],
    name: `Book tickets`,
    price: 40
  },
  {
    types: [`Sightseeing`],
    name: `Lunch in city`,
    price: 30
  }
];

const generateOffersNames = (type) => {
  return offers
  .filter((offer) => offer.types.includes(type))
  .map((offer) => offer.name);
};

export {offers, generateOffersNames};
