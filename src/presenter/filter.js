import FilterView from '../view/trip-filters.js';
import {render, RenderPosition, replace, remove} from '../util/render.js';
import {FilterType, UpdateType} from '../const.js';

export default class Filter {
  constructor(filterContainer, waypointsModel, filterModel) {
    this._filterContainer = filterContainer;
    this._waypointsModel = waypointsModel;
    this._filterModel = filterModel;
    this._currentFilter = null;

    this._filterComponent = null;

    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._waypointsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    const filterCondition = this._waypointsModel.checkWaypointsByDate();

    this._filterComponent = new FilterView(filters, this._currentFilter, filterCondition);
    this._filterComponent.setOnFilterTypeChange(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _getFilters() {
    return [
      {
        type: FilterType.EVERYTHING,
        name: `Everything`
      },
      {
        type: FilterType.FUTURE,
        name: `Future`
      },
      {
        type: FilterType.PAST,
        name: `Past`
      }
    ];
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, filterType);
  }
}
