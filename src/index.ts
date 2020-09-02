import type { Plugin } from 'vite';
import { reactSvgTransform } from './transform';

type Options = {
  useSVGO?: boolean;
};

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
