const createOptionTemplate = (destinationName) => {
  return `<option value="${destinationName}"></option>`;
};

const createDestinationOptionsTemplate = (destinations) => {
  const options = destinations
    .map((destination) => destination.name)
    .map(createOptionTemplate).join(``);

  return (
    `<datalist id="destination-list-1">
      ${options}
    </datalist>`
  );
};

export {createDestinationOptionsTemplate};
