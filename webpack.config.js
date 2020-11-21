const path = require('path');

module.exports = {
  entry: [
    './src/view/trip-info.js',
    './src/view/trip-tabs.js',
    './src/view/trip-filters.js',
    './src/view/trip-sort.js',
    './src/view/events-list.js',
    './src/view/event-create.js',
    './src/view/event-edit.js',
    './src/view/trip-event.js',
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
