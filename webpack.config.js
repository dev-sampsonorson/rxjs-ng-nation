const exec = require('child_process').exec;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (env, argv) => {
    return {
        mode: env.mode,
        entry: './src/index.ts',
        /* optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all'
            }
        }, */
        output: {
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader"
                    }
                }
            ]
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"]
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
        },
        plugins: [
            new WriteFilePlugin({ writeToDisk: true }),
            new HtmlWebpackPlugin({
                title: 'RxJS Angular Nation',
                template: './src/12_merge.html',
                filename: '12_merge.html',
                hash: false,
                inject: true
            }),
            new HtmlWebpackPlugin({
                title: 'RxJS Angular Nation',
                template: './src/13_merge_exercise.html',
                filename: '13_merge_exercise.html',
                hash: false,
                inject: true
            }),
            new HtmlWebpackPlugin({
                title: 'RxJS Angular Nation',
                template: './src/14_combineLatest.html',
                filename: '14_combineLatest.html',
                hash: false,
                inject: true
            }),
            new HtmlWebpackPlugin({
                title: 'RxJS Angular Nation',
                template: './src/17_takeUntil.html',
                filename: '17_takeUntil.html',
                hash: false,
                inject: true
            }),
            new HtmlWebpackPlugin({
                title: 'RxJS Angular Nation',
                template: './src/18_takeUntil_exercise.html',
                filename: '18_takeUntil_exercise.html',
                hash: false,
                inject: true
            }),
            new WriteFilePlugin({ writeToDisk: true }),
            {
                apply(compiler) {
                    if (compiler.hooks && compiler.hooks.done) {
                        compiler.hooks.done.tap('MyPlugin', (params) => {
                            exec('node dist/main.bundle.js', (error, stdout, strderr) => {
                                console.log('');
                                console.log(`${'🔅'.repeat(6)} Output ${'🔅'.repeat(6)}`);
                                console.log(!strderr ? stdout : strderr);
                                console.log(`end of stream -- ${!strderr ? '👊' : '⛔'}`);
                            });
                        })
                    }

                }
            }
        ]
    };
};