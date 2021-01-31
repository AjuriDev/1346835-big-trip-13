const isValidDestination = (destinationNames, destinationName) => {
  return destinationNames.includes(destinationName);
};

const getDestination = (destinations, destinationNames, destinationName) => {
  if (!isValidDestination(destinationNames, destinationName)) {
    return {
      name: destinationName,
      description: ``,
      pictures: []
    };
  }
  return destinations.find((destination) => destination.name === destinationName);
};

export {getDestination, isValidDestination};
