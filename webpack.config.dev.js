const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
    mode: 'development',
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
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
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
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
}
