import { Transform } from 'vite';

const reactSvgTransform: Transform = {
  test: ({ path, query, isBuild }) => {
    const isSVG = path.endsWith('.svg');
    if (isSVG) {
      console.log('isBuild', isBuild);
      console.log('path', path);
      console.log('query', query);
    }
    return isSVG;
  },
  transform: ({ code, path }) => {
    console.log('code', code);
    console.log('path', path);
    return code;
  },
};

module.exports = {
  transforms: [reactSvgTransform],
};
