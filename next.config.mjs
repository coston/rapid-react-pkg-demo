/** @type {import('next').NextConfig} */
import path from "path";

const projectRoot = process.env.NEXT_DIST_DIR || process.cwd();
const distDirAbsolutePath = path.resolve(projectRoot, ".next");
const distDirRelativePath = path.relative(process.cwd(), distDirAbsolutePath);

const nextConfig = {
  distDir: distDirRelativePath,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel", "@babel/preset-typescript"],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
