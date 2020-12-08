const path = require('path');

module.exports = {
  entry: [
    './src/util.js',
    './src/const.js',
    './src/view/abstract.js',
    './src/view/trip-info.js',
    './src/view/info-main.js',
    './src/view/info-cost.js',
    './src/view/info-date.js',
    './src/view/info-title.js',
    './src/view/trip-tabs.js',
    './src/view/trip-filters.js',
    './src//view/trip-controls.js',
    './src/view/new-waypoint-btn.js',
    './src/view/trip-sort.js',
    './src/view/type-list.js',
    './src/view/waypoints-list.js',
    './src/view/destination-options.js',
    './src/view/waypoint-destination.js',
    './src/view/waypoint-edit.js',
    './src/view/schedule.js',
    './src/view/trip-waypoint.js',
    './src/mock/waypoint.js',
    './src/mock/offers.js',
    './src/mock/destination.js',
    './src/view/waypoint-offers.js',
    './src/view/new-waypoint-message.js',
    './src/main.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
};
