import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
            sourcemap: true
        },
        {
            dir: 'dist/esm',
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        resolve({extensions}),
        commonjs(),
        babel({exclude: ['node_modules/**']}),
        typescript({
            tsconfig: 'tsconfig.json'
        })
    ]
};
