const controllers = require('../controllers');

module.exports = [
  {
    method: 'GET',
    path: '/api/trials',
    handler: controllers.trial.get,
    config: {
      tags: ['api'],
    },
  },
];
