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

async function HomePage() {
  const publicReadmePath = path.resolve(
    process.cwd(),
    "src/public",
    "README.md"
  );

  const readmeContent = readReadmeContent(publicReadmePath);

  return <Main content={readmeContent} />;
}

export default HomePage;
