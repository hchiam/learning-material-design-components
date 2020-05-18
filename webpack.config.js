const autoprefixer = require("autoprefixer");

const path = require("path");

function tryResolve_(url, sourceFilename) {
  // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
  // when the importer throws
  try {
    return require.resolve(url, { paths: [path.dirname(sourceFilename)] });
  } catch (e) {
    return "";
  }
}

function tryResolveScss(url, sourceFilename) {
  // Support omission of .scss and leading _
  const normalizedUrl = url.endsWith(".scss") ? url : `${url}.scss`;
  return (
    tryResolve_(normalizedUrl, sourceFilename) ||
    tryResolve_(
      path.join(
        path.dirname(normalizedUrl),
        `_${path.basename(normalizedUrl)}`
      ),
      sourceFilename
    )
  );
}

function materialImporter(url, prev) {
  if (url.startsWith("@material")) {
    const resolved = tryResolveScss(url, prev);
    return { file: resolved || url };
  }
  return { file: url };
}

module.exports = [
  {
    devServer: {
      open: true,
    },
    entry: ["./app.scss", "./app.js"],
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/, // look at SCSS files
          use: [
            {
              loader: "file-loader",
              options: {
                name: "bundle.css",
              },
            },
            { loader: "extract-loader" },
            { loader: "css-loader" },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: "sass-loader",
              options: {
                // importer: materialImporter, // doesn't seem to work

                sassOptions: {
                  includePaths: ["./node_modules"],
                },

                // Prefer Dart Sass
                implementation: require("sass"),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
              },
            },
          ],
        },
        {
          test: /\.js$/, // look at JS files
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env"],
          },
        },
      ],
    },
  },
];
