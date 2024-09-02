import React from "react";
import fs from "fs";
import path from "path";
import Main from "./components/Main";

const readReadmeContent = (filePath: string): string => {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }
  return "README.md file not found.";
};

const copyReadmeToPublic = (sourcePath: string, destinationPath: string) => {
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log("README.md copied to public directory.");
  }
};

async function HomePage() {
  const readmePath =
    process.env.README_PATH || path.resolve(process.cwd(), "README.md");
  const publicReadmePath = path.resolve(
    process.cwd(),
    "src/public",
    "README.md"
  );

  const readmeContent = readReadmeContent(readmePath);

  // duplicated copy README.md to public directory to keep it updated in development
  copyReadmeToPublic(readmePath, publicReadmePath);

  return <Main content={readmeContent} />;
}

export default HomePage;
