const fastify = require("fastify")({
  logger: false,
});
const fastifyCors = require("fastify-cors");

/**
 * Middleware
 */
fastify.register(fastifyCors, {
  origin: ["http://localhost:3000"],
});

const routeDirectory = require("./src/routes/directory/index.js");

fastify.register(routeDirectory);

fastify.listen(3008, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
