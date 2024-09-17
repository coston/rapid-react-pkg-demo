const path = require("path");
const resolveCliPath = require("./resolveCliPath");

const resolveImportPath = (configFilePath, importPath) =>
  resolveCliPath(path.resolve(path.dirname(configFilePath), importPath));

const generateStandardImport = (variable, resolvedPath) =>
  `import ${variable} from "${resolvedPath}";`;

const generateNamedImport = (variables, resolvedPath) =>
  `import { ${variables} } from "${resolvedPath}";`;

const generateCssImport = (resolvedPath) =>
  `import "${resolvedPath}";`;

const processRequireStatements = (
  fileContent,
  regex,
  configFilePath,
  generator
) =>
  [...fileContent.matchAll(regex)].map((match) => {
    const [_, variables, importPath] = match;
    const resolvedPath = resolveImportPath(configFilePath, importPath);
    return generator(variables, resolvedPath);
  });

const processCssImportStatements = (fileContent, regex, configFilePath) =>
  [...fileContent.matchAll(regex)].map((match) => {
    const [_, importPath] = match;
    const resolvedPath = resolveImportPath(configFilePath, importPath);
    return generateCssImport(resolvedPath);
  });

function resolveConfigPaths(fileContent, configFilePath) {
  const requireRegex = /const\s+(\w+)\s*=\s*require\(["'](.+?)["']\);?/g;
  const namedRequireRegex =
    /const\s+\{([^}]+)\}\s*=\s*require\(["'](.+?)["']\);?/g;
  const cssRequireRegex = /require\(["'](.+?\.css)["']\);?/g;
  const cssImportRegex = /import\s+["'](.+?\.css)["'];?/g;

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

  const cssRequires = processCssImportStatements(
    fileContent,
    cssRequireRegex,
    configFilePath
  );

  const cssImports = processCssImportStatements(
    fileContent,
    cssImportRegex,
    configFilePath
  );

  const finalContent = [
    ...standardImports,
    ...namedImports,
    ...cssRequires,
    ...cssImports,
  ].join("\n");

  return finalContent;
}

module.exports = resolveConfigPaths;