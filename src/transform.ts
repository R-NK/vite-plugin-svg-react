import { Transform } from 'vite';
import convert from '@svgr/core';
import { transformSync } from '@babel/core';
import SVGO from 'svgo';
import fs from 'fs';

export type Options = {
  useSVGO?: boolean;
};

const cache = new Map();

export const reactSvgTransform = (options: Options): Transform => {
  return {
    test: ({ path, query, isBuild }) => {
      const isSVG = path.endsWith('.svg');

      return isSVG;
    },
    transform: async ({ code, path }) => {
      let result = cache.get(path);
      if (!result) {
        let svgCode = fs.readFileSync(path).toString('utf-8');

        if (options.useSVGO) {
          const svgo = new SVGO();
          const { data } = await svgo.optimize(svgCode, { path });
          svgCode = data;
          console.log('optimized: ', path);
        }

        const jsxCode = await convert(svgCode, {}, { filePath: path });

        const transformed = transformSync(jsxCode, {
          plugins: [require('@babel/plugin-transform-react-jsx')],
          ast: false,
          sourceMaps: true,
          sourceFileName: path,
        });
        result = transformed?.code;

        cache.set(path, result);
      }
      return { code: result };
    },
  };
};
