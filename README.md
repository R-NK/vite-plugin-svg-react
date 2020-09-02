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

```tsx
import React from 'react';
import SkipIcon from '/@assets/skip_next-24px.svg';

const Component = (): JSX.Element => (
    return (
        <SkipIcon width={'4rem'} />
    )
)
```

## Typescript
```typescript
// react-app-env.d.ts
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}
```