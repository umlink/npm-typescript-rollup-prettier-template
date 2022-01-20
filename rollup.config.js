import typescript from '@rollup/plugin-typescript';  // 让 rollup 认识 ts 的代码

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: './dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript(),
    commonjs(),
    resolve()
  ]
}

export default config
