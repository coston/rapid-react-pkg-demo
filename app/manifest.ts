import { MetadataRoute } from "next"

  export default function manifest(): MetadataRoute.Manifest {
    return {
      name: "rapid-react-pkg-demo docs",
      short_name: "rapid-react-pkg-demo",
      description: "A CLI tool for quickly creating react package demos",
      start_url: "/",
      display: "standalone",
      background_color: "#bfe0ea",
      theme_color: "#bfe0ea",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
      ],
    }
  }