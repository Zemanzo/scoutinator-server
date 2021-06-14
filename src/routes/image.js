const io = require("../io");

async function routes(fastify, options) {
  fastify.get("/api/image", async (req, res) => {
    const { path } = req.query;
    try {
      const imageStream = await io.getImageStream(decodeURIComponent(path));
      res
        .code(200)
        .header("Content-Type", "application/octet-stream")
        .header("Timing-Allow-Origin", "http://localhost:3000")
        .send(imageStream);
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
}

module.exports = routes;
