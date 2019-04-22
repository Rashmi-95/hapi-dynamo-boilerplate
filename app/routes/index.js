const trialRoutes = require('./trials');
const healthRoutes = require('./health');

module.exports = [...trialRoutes, ...healthRoutes];
