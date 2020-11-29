const path = require('path');

module.exports = {
  entry: [
    './src/util.js',
    './src/const.js',
    './src/view/trip-info.js',
    './src/view/trip-tabs.js',
    './src/view/trip-filters.js',
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
