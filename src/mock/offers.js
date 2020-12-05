const OFFERS = {
  'Flight': [
    {
      id: `luggage`,
      name: `Add luggage`,
      price: 30
    },
    {
      id: `comfort`,
      name: `Switch to comfort`,
      price: 80
    },
    {
      id: `meal`,
      name: `Add meal`,
      price: 15
    },
    {
      id: `seats`,
      name: `Choose seats`,
      price: 5
    },
    {
      id: `train`,
      name: `Travel by train`,
      price: 40
    },
  ],
  'Taxi': [
    {
      name: `Order Uber`,
      price: 20
    }
  ],
  'Drive': [
    {
      name: `Rent a car`,
      price: 200
    }
  ],
  'Check-in': [
    {
      name: `Add breakfast`,
      price: 50
    }
  ],
  'Sightseeing': [
    {
      name: `Book tickets`,
      price: 40
    },
    {
      name: `Lunch in city`,
      price: 30
    }
  ]
};

const getOffers = (type) => {
  if (OFFERS[type]) {
    return OFFERS[type];
  }
  return [];
};

const generateOffersNames = (type) => {
  const offers = getOffers(type);
  return offers.map((offer) => offer.name);
};

export {getOffers, generateOffersNames};
