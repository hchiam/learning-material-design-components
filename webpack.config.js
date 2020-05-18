const path = require("path");

module.exports = {
  entry: "./brain.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
