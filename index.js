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

const routeDirectory = require("./src/routes/directory.js");
const routeImage = require("./src/routes/image.js");

fastify.register(routeDirectory);
fastify.register(routeImage);

fastify.listen(3008, function (err, address) {
  if (err) {
    console.error(err);
    fastify.log.error(err);
    process.exit(1);
  }
});
