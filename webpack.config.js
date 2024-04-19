import HtmlWebpackPlugin from "html-webpack-plugin";
import { URL } from "url";

const __dirname = new URL('.', import.meta.url).pathname;

export default {
    mode: 'development',
    entry: `${__dirname}/src/index.js`,
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: `${__dirname}/node_modules`,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/public/index.html`
        })
    ],
    devServer: {
        static: {
            directory: `${__dirname}/dist`
        },
        hot: true,
        open: true
    }
};