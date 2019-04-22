const controllers = require('../controllers');

module.exports = [
  {
    method: 'GET',
    path: '/api/health-details',
    handler: controllers.health.get,
    config: {
      tags: ['api'],
    },
  },
  {
    method: 'GET',
    path: '/api/health-by-nric',
    handler: controllers.health.getByNric,
    config: {
      tags: ['api'],
    },
  },
  {
    method: 'POST',
    path: '/api/health',
    handler: controllers.health.insert,
    config: {
      tags: ['api'],
    },
  },
];
