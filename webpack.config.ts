import path  from 'path';
import  webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        'index': './lib/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node'
};

export default config;