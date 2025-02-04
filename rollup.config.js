import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // 入口文件路径
  output: {
    file: 'dist/index.ts', // 输出文件路径
    format: 'es', // 输出格式（可选：amd, cjs, es, iife, umd）
    name: 'rollup-plugin-remove-others-console' // 输出的UMD模块名称
  },
  plugins: [
    typescript()
  ],
  external: ['child_process', 'os']
};