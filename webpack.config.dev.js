const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        open: false,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            Styles: path.resolve(__dirname, './src/styles'),
            Components: path.resolve(__dirname, './src/components'),
            Containers: path.resolve(__dirname, './src/containers'),
            Consts: path.resolve(__dirname, './src/consts'),
            Actions: path.resolve(__dirname, './src/actions'),
            Reducers: path.resolve(__dirname, './src/reducers'),
            Utils: path.resolve(__dirname, './src/utils'),
        },
    },
    entry: [
        './src/webpack-public-path',
        path.resolve(__dirname, './src/index.js'),
    ],
    devtool: 'eval-source-map',
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            inject: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.module\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                            esModule: false,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /\.module\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
}
