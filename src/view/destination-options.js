import {destinationsNames} from '../const.js';

const createOptionTemplate = (destinationName) => {
  return (`
    <option value="${destinationName}"></option>
  `);
};

const createDestinationOptionsTemplate = () => {
  const options = destinationsNames.map((destinationName) => createOptionTemplate(destinationName)).join(``);
  return (`
    <datalist id="destination-list-1">
      ${options}
    </datalist>
  `);
};

export {createDestinationOptionsTemplate};
