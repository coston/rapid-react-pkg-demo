#!/usr/bin/env node

import path from "path";
import { program } from "commander";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

import setEnvPath from "./utils/setEnvPath.mjs";
import generateDemoPageContent from "./utils/generateDemoPageContent.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextDir = path.join(__dirname, "..");

function runNextCommand(command, readmePathOption, configPathOption) {
  const readmePath = readmePathOption || "./README.md";
  const configPath = configPathOption || "./rapid.config.js";
  setEnvPath("README_PATH", readmePath);
  setEnvPath("RPD_CONFIG_PATH", configPath);
  process.env.NEXT_DIST_DIR = process.cwd();

  generateDemoPageContent(configPath);

  execSync(`npx next ${command}`, {
    stdio: "inherit",
    cwd: nextDir,
  });
}

program
  .command("dev")
  .description("Run the Next.js development server")
  .option("-r, --readme <path>", "Path to the README.md file")
  .option("-c, --config <path>", "Path to the rpd config file")
  .action((options) => runNextCommand("dev", options.readme, options.config));

program
  .command("build")
  .description("Build the Next.js application")
  .option("-r, --readme <path>", "Path to the README.md file")
  .option("-c, --config <path>", "Path to the rpd config file")
  .action((options) => runNextCommand("build", options.readme, options.config));

program.parse(process.argv);
