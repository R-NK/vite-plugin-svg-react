## vite-plugin-svg-react
Provides in-line SVG support for [Vite](https://github.com/vitejs/vite).

Inspired by [vite-plugin-svg](https://github.com/visualfanatic/vite-plugin-svg).
## Usage
```js
// vite.config.js
const reactSvgPlugin = require('vite-plugin-svg-react')

module.exports = {
  plugins: [
    reactSvgPlugin({
      useSVGO: true  // optimize svg by SVGO
    })
  ]
}
```