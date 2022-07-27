import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const extensions = ['.ts'];
const noDeclarationFiles = { compilerOptions: { declaration: false } };

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  '',
);

const tsconfigPath = 'tsconfig.build.json';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
].map((name) => RegExp(`^${name}($|/)`));

export default defineConfig([
  // CommonJS
  {
    input: 'src/index.ts',
    output: { file: 'lib/graphql-geojson-scalar-types.js', format: 'cjs', indent: false },
    external,
    plugins: [
      nodeResolve({
        extensions,
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: tsconfigPath,
      }),
      babel({
        extensions,
        plugins: [
          ['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }],
        ],
        babelHelpers: 'runtime',
      }),
    ],
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: 'es/graphql-geojson-scalar-types.js', format: 'es', indent: false },
    external,
    plugins: [
      nodeResolve({
        extensions,
      }),
      typescript({
        tsconfigOverride: noDeclarationFiles,
        tsconfig: tsconfigPath,
      }),
      babel({
        extensions,
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            { version: babelRuntimeVersion, useESModules: true },
          ],
        ],
        babelHelpers: 'runtime',
      }),
    ],
  },
]);
