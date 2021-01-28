const getOffers = (offers, type) => {
  const offersByType = offers.find((offer) => offer[`type`] === type);

  if (offersByType === undefined) {
    return [];
  }

  return offersByType.offers;
};

export {getOffers};
