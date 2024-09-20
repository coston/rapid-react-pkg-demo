const {
    removeComments,
    removeRequireStatements,
    quoteScopeProperty,
    removeModuleExports,
  } = require("./textProcessing");

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