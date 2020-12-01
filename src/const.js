import {generateDestination} from './mock/destination.js';

const types = [`Check-in`, `Sightseeing`, `Restaurant`, `Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const defaultType = `Flight`;
const destinationsNames = [`Amsterdam`, `Geneva`, `Chamonix`];
const destinations = [`Amsterdam`, `Geneva`, `Chamonix`].map(generateDestination);

export {types, defaultType, destinationsNames, destinations};
