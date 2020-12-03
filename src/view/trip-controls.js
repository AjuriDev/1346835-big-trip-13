import {createTabsSwitcherTemplate} from './trip-tabs.js';
import {createFiltersTemplate} from './trip-filters.js';

const createTripControlsTemplate = () => {
  const tabsSwitcher = createTabsSwitcherTemplate();
  const filters = createFiltersTemplate();

  return (`
    <div class="trip-main__trip-controls  trip-controls">
      <h2 class="visually-hidden">Switch trip view</h2>
      ${tabsSwitcher}

      <h2 class="visually-hidden">Filter events</h2>
      ${filters}
    </div>
  `);
};

export {createTripControlsTemplate};
