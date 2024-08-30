import React from "react";
import fs from "fs";
import Main from "./components/Main";

async function HomePage() {
  const readmePath = process.env.README_PATH || "";
  let readmeContent = "";

  if (fs.existsSync(readmePath)) {
    readmeContent = fs.readFileSync(readmePath, "utf-8");
  } else {
    readmeContent = "README.md file not found.";
  }

  return <Main content={readmeContent} />;
}

export default HomePage;
