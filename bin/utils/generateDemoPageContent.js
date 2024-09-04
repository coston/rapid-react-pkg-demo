const path = require("path");

const updateFileConfigPath = require("./updateFileConfigPath");

function generateDemoPageContent(configPath) {
  const mainPath = path.join(__dirname, "../../app/components/Main.tsx");
  const manifestPath = path.join(__dirname, "../../app/manifest.ts");

  const absoluteConfigPath = path.resolve(process.cwd(), configPath);

  updateFileConfigPath(mainPath, absoluteConfigPath);
  updateFileConfigPath(manifestPath, absoluteConfigPath);
}

module.exports = generateDemoPageContent;
