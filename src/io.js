const fs = require("fs").promises;
const path = require("path");
const config = require("../config.json");
const ROOT_DIRECTORY = path.resolve(config.root);

const getDirectoryContents = async (directory) => {
  const dir = path.join(ROOT_DIRECTORY, directory);
  if (!dir.includes(ROOT_DIRECTORY)) {
    throw new Error("The requested directory is higher than the root directory, which is not allowed.");
  }
  const entries = (await fs.readdir(dir, { withFileTypes: true }))
    .map(entry => {
      return {
        name: entry.name,
        type: entry.isDirectory() ? "folder" : "file"
      };
    });
  return entries;
}

module.exports = {
  getDirectoryContents,
};
