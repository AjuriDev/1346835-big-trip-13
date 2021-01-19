const OFFERS = {
  'Flight': [
    {
      id: `luggage`,
      title: `Add luggage`,
      price: 30
    },
    {
      id: `comfort`,
      title: `Switch to comfort`,
      price: 80
    },
    {
      id: `meal`,
      title: `Add meal`,
      price: 15
    },
    {
      id: `seats`,
      title: `Choose seats`,
      price: 5
    },
    {
      id: `train`,
      title: `Travel by train`,
      price: 40
    },
  ],
  'Taxi': [
    {
      id: `uber`,
      title: `Order Uber`,
      price: 20
    }
  ],
  'Drive': [
    {
      id: `car`,
      title: `Rent a car`,
      price: 200
    }
  ],
  'Check-in': [
    {
      id: `breakfast`,
      title: `Add breakfast`,
      price: 50
    }
  ],
  'Sightseeing': [
    {
      id: `tickets`,
      title: `Book tickets`,
      price: 40
    },
    {
      id: `lunch`,
      title: `Lunch in city`,
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
