import type { Plugin } from 'vite';
import { reactSvgTransform, Options } from './transform';

const createPlugin = (userOptions: Options): Plugin => {
  const options: Options = {
    useSVGO: false,
    ...userOptions,
  };
  return {
    transforms: [reactSvgTransform(options)],
  };
};

export default createPlugin;
