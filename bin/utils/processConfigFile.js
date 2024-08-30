const removeComments = (content) =>
  content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

const removeRequireStatements = (content) =>
  content.replace(/.*const\s+[\w\s{},]+\s*=\s*require\(.+?\);.*\n?/g, "");

const quoteScopeProperty = (content) =>
  content.replace(/scope\s*:\s*{([^}]*)}/g, (match, p1) => {
    const scopeValue = p1.trim().replace(/\s+/g, " ");
    return `scope: "${scopeValue}"`;
  });

const removeModuleExports = (content) =>
  content.replace(/module\.exports\s*=\s*{([^}]*)};?/g, "{$1}");

const processConfigFile = (fileContent) => {
  const withoutComments = removeComments(fileContent);
  const withoutRequires = removeRequireStatements(withoutComments);
  const withQuotedScope = quoteScopeProperty(withoutRequires);
  const withoutExports = removeModuleExports(withQuotedScope);
  const formattedText = withoutExports;

  try {
    const configObject = eval(`(${formattedText})`);
    return configObject;
  } catch (error) {
    console.error("Error parsing config file:", error);
    console.error("Formatted text:", formattedText);
  }
};

module.exports = processConfigFile;
