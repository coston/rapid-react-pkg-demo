const path = require("path");

function resolveCliPath(cliPathInput) {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const packageDir = path.dirname(packageJsonPath);

  if (path.isAbsolute(cliPathInput)) {
    return cliPathInput;
  } else {
    return path.resolve(packageDir, cliPathInput);
  }
}

module.exports = resolveCliPath;
