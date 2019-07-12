import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { file: 'lib/graphql-geojson-scalar-types.js', format: 'cjs', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [ babel() ]
  },

  // ES
  {
    input: 'src/index.js',
    output: { file: 'es/graphql-geojson-scalar-types.js', format: 'es', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [ babel() ]
  },

  // ES for Browsers
  {
    input: 'src/index.js',
    output: { file: 'es/graphql-geojson-scalar-types.mjs', format: 'es', indent: false },
    plugins: [
      nodeResolve(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  },

  // UMD Production
  {
    input: 'src/index.js',
    output: {
      file: 'dist/graphql-geojson-scalar-types.min.js',
      format: 'umd',
      name: 'GraphQLGeoJSONScalarTypes',
      indent: false
    },
    plugins: [
      nodeResolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
];
