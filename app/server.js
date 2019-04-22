const Hapi = require('hapi');
const plugins = require('./plugins');
const routes = require('./routes');

const server = Hapi.server({
  port: process.env.NODE_PORT || 3000,
  host: process.env.NODE_HOST || 'localhost',
});

const provision = async () => {
  await server.register(plugins);
  server.route(routes);
};

const init = async () => {
  try {
    await provision();
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (!module.parent) {
  init();
}

module.exports = server;
