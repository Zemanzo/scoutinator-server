const io = require("../io");

async function routes(fastify, options) {
  fastify.get("/api/directory", async (req, res) => {
    const { path } = req.query;
    try {
      const contents = await io.getDirectoryContents(decodeURIComponent(path));
      res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(contents);
    } catch (err) {
      console.error(err);
      return res
        .code(400)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
          err,
        });
    }
  });

  fastify.get("/api/directoryImages", async (req, res) => {
    const { path } = req.query;
    try {
      console.error(err);
      const contents = await io.getDirectoryImages(path);
      res
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(contents);
    } catch (err) {
      return res
        .code(400)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
          err,
        });
    }
  });
}

module.exports = routes;
