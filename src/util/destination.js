const isValidDestination = (destinations, destination) => {
  return destinations.map((dest) => dest.name).includes(destination);
};

const getDestination = (destinations, destination) => {
  if (!isValidDestination(destinations, destination)) {
    return {
      name: destination,
      description: ``,
      pictures: []
    };
  }
  return destinations.find((dest) => dest.name === destination);
};

export {getDestination, isValidDestination};
