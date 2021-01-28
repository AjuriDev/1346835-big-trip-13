const isValidDestination = (destinations, destinationName) => {
  return destinations.map((destination) => destination.name).includes(destinationName);
};

const getDestination = (destinations, destinationName) => {
  if (!isValidDestination(destinations, destinationName)) {
    return {
      name: destinationName,
      description: ``,
      pictures: []
    };
  }
  return destinations.find((destination) => destination.name === destinationName);
};

export {getDestination, isValidDestination};
