const fs = require("fs");

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

module.exports = writeFile;
