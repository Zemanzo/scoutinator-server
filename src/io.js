const {createReadStream: fsCreateReadStream} = require("fs");
const fs = require("fs").promises;
const path = require("path");
const config = require("../config.json");
const ROOT_DIRECTORY = path.resolve(config.root);

const _hasImageExtension = name => {
  return [".jpg", ".jpeg", ".png", ".gif", "webp"].some((ext) =>
    name.endsWith(ext)
  );
};

const _getEntryType = entry => {
    if (entry.isDirectory()) {
      return "folder";
    } else if (_hasImageExtension(entry.name)) {
      return "image";
    }
    return "file";
}

const getDirectoryContents = async (directory) => {
  const dir = path.join(ROOT_DIRECTORY, directory);

  if (!dir.includes(ROOT_DIRECTORY)) {
    throw new Error("The requested directory is higher than the root directory, which is not allowed.");
  }

  const entries = (await fs.readdir(dir, { withFileTypes: true }))
    .map(entry => {
      return {
        name: entry.name,
        type: _getEntryType(entry)
      };
    });
  return entries;
}

const getDirectoryImages = async (directory) => {
  return (await getDirectoryContents(directory)).filter(entry => entry.type === "image");
}

const getImageStream = async (imagePath) => {
  const absolutePath = path.join(ROOT_DIRECTORY, imagePath);
  console.log(absolutePath);

  if (!absolutePath.includes(ROOT_DIRECTORY)) {
    throw new Error(
      "The requested directory is higher than the root directory, which is not allowed."
    );
  }
  return fsCreateReadStream(absolutePath);
};

module.exports = {
  getDirectoryContents,
  getDirectoryImages,
  getImageStream,
};
