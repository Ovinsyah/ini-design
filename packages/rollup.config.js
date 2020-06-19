import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import scss from 'rollup-plugin-scss'

import pkg from "./package.json";

export default {
  input: './index.ts',
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    scss({
      output: './dist/ini.scss',
    }),
    del({ targets: ['dist/*'] }),
    external(),
    resolve({
      extensions: ['.ts', '.tsx']
    }),
    babel({
      exclude: "node_modules/**"
    }),
    typescript({
      typescript: require('typescript'),
      exclude: ['**/*.test.ts?(x)'],
      clean: true,
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    commonjs({
      namedExports: {
        react: ['Component', 'createElement']
      }
    })
  ],
};
