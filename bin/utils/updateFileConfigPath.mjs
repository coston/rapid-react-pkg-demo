import fs from "fs";
import writeFile from "./writeFile.mjs";

const updateImportLine = (fileContent, newImportPath) => {
  const newImportLine = `import config from '${newImportPath}';`;
  const importConfigRegex = /^import config.*$/m;

  return fileContent.replace(importConfigRegex, newImportLine);
};

const updateFileConfigPath = (filePath, newImportPath) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const updatedContent = updateImportLine(fileContent, newImportPath);

    writeFile(filePath, updatedContent);
  } catch (error) {
    console.error(`Failed to update import path in ${filePath}:`, error);
  }
};

export default updateFileConfigPath;
