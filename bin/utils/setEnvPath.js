const resolveCliPath = require("./resolveCliPath");

function setEnvPath(envVar, filePath) {
  if (filePath) {
    process.env[envVar] = resolveCliPath(filePath);
  }
}

module.exports = setEnvPath;
