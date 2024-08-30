const fs = require("fs");
const path = require("path");
const writeFile = require("./writeFile");
const generateContent = require("./generateContent");
const processConfigFile = require("./processConfigFile");
const resolveConfigPaths = require("./resolveConfigPaths");
const generateManifest = require("./generateManifest");
const readFileContent = (filePath) => fs.readFileSync(filePath, "utf-8");

function generateDemoPageContent(configPath) {
  const mainPath = path.join(__dirname, "../../app/components/Main.tsx");
  const manifestPath = path.join(__dirname, "../../app/manifest.ts");

  const configContent = readFileContent(configPath);
  const configPaths = resolveConfigPaths(configContent, configPath);
  const configObject = processConfigFile(configContent);

  const content = generateContent(configObject, configPaths);
  const manifest = generateManifest(configObject);

  writeFile(mainPath, content);
  writeFile(manifestPath, manifest);
}

module.exports = generateDemoPageContent;