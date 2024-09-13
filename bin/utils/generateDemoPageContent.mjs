import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import updateFileConfigPath from "./updateFileConfigPath.mjs";
import generateManifest from "./generateManifest.mjs";
import processConfigFile from "./processConfigFile.mjs";
import writeFile from "./writeFile.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readFileContent = (filePath) => fs.readFileSync(filePath, "utf-8");
export function generateDemoPageContent(configPath) {
  const mainPath = path.join(__dirname, "../../app/components/Main.tsx");
  const manifestPath = path.join(__dirname, "../../app/manifest.ts");

  const absoluteConfigPath = path.resolve(process.cwd(), configPath);

  updateFileConfigPath(mainPath, absoluteConfigPath);
  updateFileConfigPath(manifestPath, absoluteConfigPath);

  const configContent = readFileContent(configPath);
  const configObject = processConfigFile(configContent);

  console.log({ configContent, configObject });
  const manifest = generateManifest(configObject);
  writeFile(manifestPath, manifest);
}

export default generateDemoPageContent;
