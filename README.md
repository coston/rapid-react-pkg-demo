# 🌊 rapid-react-pkg-demo

This is a CLI tool for quickly producing a small react package demo from a README file. It provides simple commands to run a development server and build your Next.js application using [react-pkg-demo](https://www.npmjs.com/package/react-pkg-demo).

## Installation

To install the CLI globally, run:

```bash
npm install rapid-react-pkg-demo --save-dev
```

## Usage

### Development

Run the Next.js development server.

```sh
rapid dev [options]
```

### Build

Build the Next.js application.

```sh
rapid build [options]
```

### Options

| Option                | Default             | Description                   |
| --------------------- | ------------------- | ----------------------------- |
| `-r, --readme <path>` | `./README.md`       | Path to the README.md file    |
| `-c, --config <path>` | `./rapid.config.js` | Path to the rapid config file |

#### Example with options

```sh
rapid dev --readme ./docs/README.md --config ./config/rapid.config.js
```

## Rapid Config File

The `rapid.config.js` file is used to configure the behavior and appearance of your react package demo. Below is an example configuration:

```js
const Code = require("./src/components/Code");
const { Button } = require("./src");

module.exports = {
  color: "#d3c1ad",
  packageName: "react-package",
  description: "a package react things",
  icon: "⏩",
  scope: { Button, Code },
};
```

### Configuration Options

| Property      | Type     | Required | Description                                                    |
| ------------- | -------- | -------- | -------------------------------------------------------------- |
| `color`       | `string` | Yes      | The primary color used in the demo.                            |
| `packageName` | `string` | Yes      | The name of the package.                                       |
| `description` | `string` | Yes      | A short description of the package.                            |
| `icon`        | `string` | Yes      | An icon representing the package.                              |
| `scope`       | `object` | No       | An object containing components to be demoed using react-live. |

## License

This project is licensed under the MIT License.
