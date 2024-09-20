function generateManifest(config) {
    return `import { MetadataRoute } from "next"

  export default function manifest(): MetadataRoute.Manifest {
    return {
      name: "${config.packageName} docs",
      short_name: "${config.packageName}",
      description: "${config.description}",
      start_url: "/",
      display: "standalone",
      background_color: "${config.color}",
      theme_color: "${config.color}",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
      ],
    }
  }`;
  }

  module.exports = generateManifest;