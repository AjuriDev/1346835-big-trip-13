const path = require('path');

module.exports = {
  entry: [
    './src/api/api.js',
    './src/api/store.js',
    './src/util/render.js',
    './src/util/waypoint.js',
    './src/util/observer.js',
    './src/util/destination.js',
    './src/util/statistics.js',
    './src/util/common.js',
    './src/util/toast/toast.js',
    './src/util/toast/toast.css',
    './src/const.js',
    './src/model/waypoints.js',
    './src/model/filter.js',
    './src/view/abstract.js',
    './src/view/trip.js',
    './src/view/trip-info.js',
    './src/view/info-main.js',
    './src/view/info-cost.js',
    './src/view/info-date.js',
    './src/view/info-title.js',
    './src/view/site-menu.js',
    './src/view/trip-filters.js',
    './src//view/trip-controls.js',
    './src/view/new-waypoint-btn.js',
    './src/view/trip-sort.js',
    './src/view/type-list.js',
    './src/view/waypoints-list.js',
    './src/view/destination-options.js',
    './src/view/destination-photos.js',
    './src/view/waypoint-destination.js',
    './src/view/waypoint-edit.js',
    './src/view/schedule.js',
    './src/view/trip-waypoint.js',
    './src/view/loading.js',
    './src/view/waypoint-offers.js',
    './src/view/new-waypoint-message.js',
    './src/view/statistics.js',
    './src/presenter/trip.js',
    './src/presenter/waypoint.js',
    './src/presenter/filter.js',
    './src/presenter/info.js',
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
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }
    ]
  }
};
