const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');

module.exports = {
  plugin: HapiSwagger,
  options: {
    info: {
      title: 'Test API Documentation',
      version: Pack.version,
    },
  },
};
