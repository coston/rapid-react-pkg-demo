#!/usr/bin/env node

const path = require("path");
const { program } = require("commander");
const { execSync } = require("child_process");

const setEnvPath = require("./utils/setEnvPath");
const generateDemoPageContent = require("./utils/generateDemoPageContent");

const nextDir = path.join(__dirname, "..");

function runNextCommand(command, readmePathOption, configPathOption) {
  const readmePath = readmePathOption || "./README.md";
  const configPath = configPathOption || "./rapid.config.js";

  setEnvPath("README_PATH", readmePath);
  setEnvPath("RPD_CONFIG_PATH", configPath);

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
