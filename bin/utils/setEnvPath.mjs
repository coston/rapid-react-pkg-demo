import resolveCliPath from "./resolveCliPath.mjs";

function setEnvPath(envVar, filePath) {
  if (filePath) {
    process.env[envVar] = resolveCliPath(filePath);
  }
}

export default setEnvPath;
