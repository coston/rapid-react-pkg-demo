import fs from "fs";

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf8");
  } catch (error) {
    console.error(`Failed to write file ${filePath}:`, error);
  }
}

export default writeFile;
