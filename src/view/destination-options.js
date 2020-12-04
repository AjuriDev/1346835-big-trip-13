import {DESTINATION_NAMES} from '../const.js';

const createOptionTemplate = (destinationName) => {
  return `<option value="${destinationName}"></option>`;
};

const createDestinationOptionsTemplate = () => {
  const options = DESTINATION_NAMES.map(createOptionTemplate).join(``);
  return (
    `<datalist id="destination-list-1">
      ${options}
    </datalist>`
  );
};

export {createDestinationOptionsTemplate};
