const fs = require("fs");

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
  } catch (error) {
    console.error(`Failed to write file ${filePath}:`, error);
  }
}

module.exports = writeFile;
