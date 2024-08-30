/** @type {import('next').NextConfig} */
const nextConfig = {
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
