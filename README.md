# Learning about [Material Design Components for the Web](https://github.com/material-components/material-components-web)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://github.com/material-components/material-components-web>

## CodePen quick start demo

<https://codepen.io/hchiam/pen/YzyRrwQ>

## Quick start demo using this repo (batteries included)

```bash
npm install; npm run go
```

or

```bash
npm install # just once
npm run build # just once
npm start # custom config has it automatically open localhost
```

This repo is based on a great walk-through tutorial of install/setup steps: [Getting Started](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md). Read it for details, but here are helpful things I'd like to point out (or remind myself):

- [`package.json` deps](https://github.com/hchiam/learning-material-design-components/blob/master/package.json) and [`webpack.config.js` options](https://github.com/hchiam/learning-material-design-components/blob/master/webpack.config.js)
- Both CDN and NPM options are available.
- You can make webpack automatically open the (correct) localhost port in the browser:

  ```js
  devServer: {
    open: true;
  }
  ```

- `mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));`
- There's an [appendix](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#appendix-configuring-a-sass-importer-for-nested-node_modules) on what to do if you have nested `node_modules` folders caused by deps on conflicting versions of individual MDC Web packages. But actually, [this fix might be broken too](https://github.com/material-components/material-components-web/issues/5135).
- `webpack-dev-server` gives us live reloading (i.e. automatically reloads the page when you save a source file that's already watched by webpack).

[Intro video](https://www.youtube.com/watch?v=ckCe0xZv3Co).

Use [SCSS](https://github.com/hchiam/learning-sass) for easier theming.

## Gallery

Intro: <https://www.youtube.com/watch?v=vATjngAPc7Q>

Click through prototyping: <https://www.youtube.com/watch?v=mpuockxs9eo>
