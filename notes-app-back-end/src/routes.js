/* eslint-disable linebreak-style */
const { addNoteHandler } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;