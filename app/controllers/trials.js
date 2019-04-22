const Boom = require('boom');

const get = async () => {
  try {
    const result = 'trial';
    return result;
  } catch (exception) {
    return Boom.badImplementation('Error getting trial');
  }
};

module.exports = { get };
