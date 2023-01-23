import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

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
        resolve(),
        babel({exclude: ['node_modules/**']}),
        typescript({
            tsconfig: 'tsconfig.json'
        })
    ]
};
