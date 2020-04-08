const path = require("path");
const fs = require("fs");

module.exports.checkDir = (filePath) => {
  const dirPath = path.dirname(filePath);
  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
};