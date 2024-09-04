function generateContent(configPath) {
  return `"use client";

  import React from "react";

  // generated by rpd-cli
  import Demo from "react-pkg-demo";
  import config from '${configPath}';

  function HomePage({ content }: { content: string }) {

    const { packageName, description, icon, color, scope } = config;


    return (
      <Demo
        color={color}
        packageName={packageName}
        description={description}
        icon={icon}
        scope={scope}
        markdown={content}
      />
    );
  }

  export default HomePage;
  `;
}

module.exports = generateContent;
