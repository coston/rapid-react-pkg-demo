const removeComments = (content) =>
  content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");

const removeRequireStatements = (content) =>
  content.replace(/.*require\(["'].*["']\);?.*\n?/g, "");

const quoteScopeProperty = (content) =>
  content.replace(/scope\s*:\s*{([^}]*)}/g, (match, p1) => {
    const scopeValue = p1.trim().replace(/\s+/g, " ");
    return `scope: "${scopeValue}"`;
  });

const removeModuleExports = (content) =>
  content.replace(/module\.exports\s*=\s*{([^}]*)};?/g, "{$1}");

module.exports = {
  removeComments,
  removeRequireStatements,
  quoteScopeProperty,
  removeModuleExports,
};
