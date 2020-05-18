const autoprefixer = require("autoprefixer");

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
