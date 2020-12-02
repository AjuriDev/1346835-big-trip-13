import {TYPES} from '../const.js';

const createWaypointTypeItemTemplate = (type, selectedType) => {
  return (`
    <div class="event__type-item">
      <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}"${type === selectedType ? ` checked` : ``}>
      <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
    </div>
  `);
};

const createWaypointTypeListTemplate = (selectedType) => {
  const typeItems = TYPES.map((type) => createWaypointTypeItemTemplate(type, selectedType)).join(``);

  return (`
    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${typeItems}
      </fieldset>
    </div>
  `);
};

export {createWaypointTypeListTemplate};
