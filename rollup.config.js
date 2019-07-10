import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
const config = {
  output: {
    format: 'umd',
    name: 'GraphqlGeojsonScalarTypes'
  },
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  external: [ 'graphql', 'geojson-validation' ]
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true, // eslint-disable-line camelcase
        unsafe: true,
        unsafe_comps: true // eslint-disable-line camelcase
      }
    })
  );
}

export default config;
