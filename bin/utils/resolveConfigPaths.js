const path = require("path");
const resolveCliPath = require("./resolveCliPath");

const resolveImportPath = (configFilePath, importPath) =>
  resolveCliPath(path.resolve(path.dirname(configFilePath), importPath));

const generateStandardImport = (variable, resolvedPath) =>
  `import ${variable} from "${resolvedPath}";`;

const generateNamedImport = (variables, resolvedPath) =>
  `import { ${variables} } from "${resolvedPath}";`;

const processRequireStatements = (
  fileContent,
  regex,
  configFilePath,
  generator
) =>
  [...fileContent.matchAll(regex)].map((match) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, variables, importPath] = match;
    const resolvedPath = resolveImportPath(configFilePath, importPath);
    return generator(variables, resolvedPath);
  });

function resolveConfigPaths(fileContent, configFilePath) {
  const requireRegex = /const\s+(\w+)\s*=\s*require\(["'](.+?)["']\);?/g;
  const namedRequireRegex =
    /const\s+\{([^}]+)\}\s*=\s*require\(["'](.+?)["']\);?/g;

  const standardImports = processRequireStatements(
    fileContent,
    requireRegex,
    configFilePath,
    generateStandardImport
  );

  const namedImports = processRequireStatements(
    fileContent,
    namedRequireRegex,
    configFilePath,
    generateNamedImport
  );

  const finalContent = [...standardImports, ...namedImports].join("\n");

  return finalContent;
}

module.exports = resolveConfigPaths;
