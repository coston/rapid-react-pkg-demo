const path = require("path");

const writeFile = require("./writeFile");
const generateContent = require("./generateContent");
const generateManifest = require("./generateManifest");

function generateDemoPageContent(configPath) {
  const mainPath = path.join(__dirname, "../../app/components/Main.tsx");
  const manifestPath = path.join(__dirname, "../../app/manifest.ts");

  const absoluteConfigPath = path.resolve(process.cwd(), configPath);

  const content = generateContent(absoluteConfigPath);
  const manifest = generateManifest(absoluteConfigPath);

  writeFile(mainPath, content);
  writeFile(manifestPath, manifest);
}

module.exports = generateDemoPageContent;
