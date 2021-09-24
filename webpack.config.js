const exec = require('child_process').exec;

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
        plugins: [
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