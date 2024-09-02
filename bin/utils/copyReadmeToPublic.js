const fs = require("fs");
const path = require("path");

const copyReadmeToPublic = () => {
  const readmePath = process.env.README_PATH;
  const publicDir = path.resolve(__dirname, "../../src/public");
  const publicReadmePath = path.join(publicDir, "README.md");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  if (fs.existsSync(readmePath)) {
    fs.copyFileSync(readmePath, publicReadmePath);
    console.log(`Copied README.md to ${publicReadmePath}`);
  } else {
    console.error("README.md file not found.");
  }
};

module.exports = copyReadmeToPublic;
