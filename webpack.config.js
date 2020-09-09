var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OfflinePlugin = require('offline-plugin');


module.exports = function () {

    return {

        target: 'web',
        mode: 'development',

        entry: {
            index: ["app.tsx"],
        },

        output: {
            filename: "[name].js",
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"],
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                logInfoToStdOut: true,
                                logLevel: 'info'
                            }
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: './content/'
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: 'commons',
                        chunks: 'initial',
                        minChunks: 2,
                        priority: 10
                    }
                }
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `[name].css`
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/tpl/index.html',
                title: 'Index',
                chunks: ["vendors", "commons", "index"]
            }),
            new OfflinePlugin({
                responseStrategy: 'network-first',
                appShell: 'index.html',
                externals: [], // all the files that comes from outside the webpack
                exclude: ['/api/**'], // exlude from caching an api for example
                autoUpdate: 1000 * 60,
                ServiceWorker: {
                    events: true,
                    navigateFallbackURL: '/',
                },
                AppCache: false
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'tmp'),
            host: 'localhost',
            hot: true,
            port: 5000,
            historyApiFallback: true,
            open: 'http://localhost:5000'
        }
    }
}